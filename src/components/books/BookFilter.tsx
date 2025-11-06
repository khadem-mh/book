"use client";

import React from "react";
import { useMemo, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import categoriesData from "@/data/categories.json";

import {
  Input,
  Select,
  SelectItem,
  DateRangePicker,
  Accordion,
  AccordionItem,
  Checkbox,
} from "@heroui/react";

import { parseDate } from "@internationalized/date";
import { FiSearch } from "react-icons/fi";

type Author = { name: string; enName?: string; cover?: string };

export type Book = {
  slug: string;
  title: string;
  titleFa?: string;
  subTitle?: string;
  authors: Author[];
  cover?: string;
  pages?: number;
  language?: string;
  languageFa?: string;
  publishedYear?: number;
  publishedYearAi?: number;
  chapters?: number;
  level?: string;
  tags?: string[];
  rating?: number;
  description?: string;
  createdAt?: string;
  categories?: string[]; // array of category slugs
};

type Category = { id: number; slug: string; name: string; nameFa?: string };

type Props = {
  books: Book[];
  onChange?: (filtered: Book[]) => void;
};

/**
 * BookFilter (Hero UI)
 * - Input (Hero) for search
 * - Select (Hero) for level (single-select controlled)
 * - SelectItem for author (single-select controlled)
 * - Accordion + Checkbox list for categories (multi-select controlled)
 * - DateRangePicker (Hero) for published range (full date)
 * - Syncs to URL query params: q, level, author, categories, minYear, maxYear
 */
const BookFilter: React.FC<Props> = ({ books, onChange }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // --- read initial values from URL ---
  const initialQ = searchParams?.get("q") ?? "";
  const initialLevel = searchParams?.get("level") ?? "";
  const initialAuthor = searchParams?.get("author") ?? "";
  const initialCategories = searchParams?.get("categories")
    ? searchParams.get("categories")!.split(",").filter(Boolean)
    : [];
  const initialMinYear = searchParams?.get("minYear") ?? "";
  const initialMaxYear = searchParams?.get("maxYear") ?? "";

  // --- local state (controlled) ---
  const [query, setQuery] = useState<string>(initialQ);
  // level stored as Set for HeroUI Select selectedKeys API (single select => set with 0|1 entries)
  const [levelKeys, setLevelKeys] = useState<Set<string>>(
    () => (initialLevel ? new Set([initialLevel]) : new Set())
  );
  const [authorKeys, setAuthorKeys] = useState<Set<string>>(
    () => (initialAuthor ? new Set([initialAuthor]) : new Set())
  );

  // categories as Set for multi-select via checkboxes
  const [categoryKeys, setCategoryKeys] = useState<Set<string>>(() => new Set(initialCategories));

  // published range (DateRangePicker controlled)
  const initialPublishedRange = useMemo(() => {
    return {
      start: initialMinYear ? parseDate(`${initialMinYear}-01-01`) : null,
      end: initialMaxYear ? parseDate(`${initialMaxYear}-12-31`) : null,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [publishedRange, setPublishedRange] = useState<any>(initialPublishedRange);

  // --- utility derived values ---
  const selectedLevel = React.useMemo(() => Array.from(levelKeys)[0] ?? "", [levelKeys]);
  const selectedAuthor = React.useMemo(() => Array.from(authorKeys)[0] ?? "", [authorKeys]);
  const selectedCategories = React.useMemo(() => Array.from(categoryKeys), [categoryKeys]);

  // categories list (from json)
  const allCategories = useMemo(() => (categoriesData as Category[]).slice(), []);

  // derive filter options from books
  const allLevels = useMemo(() => {
    const s = new Set<string>();
    books.forEach((b) => b.level && s.add(b.level));
    return Array.from(s);
  }, [books]);

  const allAuthors = useMemo(() => {
    const s = new Set<string>();
    books.forEach((b) => b.authors?.forEach((a) => s.add(a.name)));
    return Array.from(s);
  }, [books]);

  const minPublishedYear = useMemo(() => {
    const years = books.map((b) => b.publishedYear || 0).filter(Boolean);
    return years.length ? Math.min(...(years as number[])) : undefined;
  }, [books]);

  const maxPublishedYear = useMemo(() => {
    const years = books.map((b) => b.publishedYear || 0).filter(Boolean);
    return years.length ? Math.max(...(years as number[])) : undefined;
  }, [books]);

  // --- when DateRangePicker changes, also keep min/max year values in sync (so URL effect uses years) ---
  React.useEffect(() => {
    // when publishedRange updates, we want URL sync to pick up minYear/maxYear derived from it
    // handled in the URL-sync effect below which reads publishedRange -> minYear/maxYear
  }, [publishedRange]);

  // --- filter logic using latest state ---
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const minYearVal = publishedRange?.start ? Number(publishedRange.start.year) : "";
    const maxYearVal = publishedRange?.end ? Number(publishedRange.end.year) : "";

    return books.filter((b) => {
      if (q) {
        const inTitle = ((b.title || "") + " " + (b.titleFa || "") + " " + (b.subTitle || "")).toLowerCase().includes(q);
        const inAuthors = (b.authors || []).map((a) => (a.name + " " + (a.enName || "")).toLowerCase()).some((s) => s.includes(q));
        const inTags = (b.tags || []).some((t) => t.toLowerCase().includes(q));
        if (!(inTitle || inAuthors || inTags)) return false;
      }

      if (selectedLevel && b.level !== selectedLevel) return false;
      if (selectedAuthor && !(b.authors || []).some((a) => a.name === selectedAuthor)) return false;

      if (minYearVal !== "" && b.publishedYear !== undefined) {
        if (b.publishedYear < Number(minYearVal)) return false;
      }
      if (maxYearVal !== "" && b.publishedYear !== undefined) {
        if (b.publishedYear > Number(maxYearVal)) return false;
      }

      if (categoryKeys.size > 0) {
        const bookCats = (b.categories || []).map((c) => String(c));
        const hasAny = Array.from(categoryKeys).some((sc) => bookCats.includes(sc));
        if (!hasAny) return false;
      }

      return true;
    });
  }, [books, query, selectedLevel, selectedAuthor, publishedRange, categoryKeys]);

  // --- sync filter state into URL (replace so history isn't flooded) ---
  React.useEffect(() => {
    const params = new URLSearchParams();

    if (query) params.set("q", query);
    if (selectedLevel) params.set("level", selectedLevel);
    if (selectedAuthor) params.set("author", selectedAuthor);

    // published range -> minYear/maxYear
    if (publishedRange?.start) params.set("minYear", String(publishedRange.start.year));
    if (publishedRange?.end) params.set("maxYear", String(publishedRange.end.year));

    if (categoryKeys.size) params.set("categories", Array.from(categoryKeys).join(","));

    const newUrl = pathname + (params.toString() ? `?${params.toString()}` : "");
    router.replace(newUrl);
  }, [query, selectedLevel, selectedAuthor, publishedRange, categoryKeys, pathname, router]);

  // call back to parent
  React.useEffect(() => {
    onChange?.(filtered);
  }, [filtered, onChange]);

  // --- handlers ---
  function onLevelChange(keys: Set<string> | string | any) {
    // Hero's onSelectionChange gives a Selection value (Set-like). Ensure Set<string>.
    const set = keys instanceof Set ? keys : new Set(Array.from(keys || []));
    setLevelKeys(set);
  }

  function onAuthorChange(keys: Set<string> | string | any) {
    const set = keys instanceof Set ? keys : new Set(Array.from(keys || []));
    setAuthorKeys(set);
  }

  function onCategoryToggle(slug: string) {
    setCategoryKeys((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  function clearFilters() {
    setQuery("");
    setLevelKeys(new Set());
    setAuthorKeys(new Set());
    setCategoryKeys(new Set());
    setPublishedRange({ start: null, end: null });
    // URL will update from effect
  }

  // --- render ---
  return (
    <div className="w-full max-w-[320px]">
      <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
        {/* Search (Hero Input) */}
        <div className="mb-4">
          <Input
            label="جستجو"
            labelPlacement="outside"
            placeholder="عنوان یا نویسنده..."
            value={query}
            onValueChange={(val: string) => setQuery(val)}
            size="sm"
            endContent={<FiSearch className="text-lg" />}
            variant="bordered"
            className="w-full"
          />
        </div>

        {/* Accordion for categories */}
        <Accordion type="single" defaultValue="" collapsible className="mb-3">
          <AccordionItem value="categories" title="دسته‌بندی">
            <div className="flex flex-col gap-2 py-2">
              {allCategories.map((cat) => {
                const checked = categoryKeys.has(cat.slug);
                return (
                  <label key={cat.slug} className="flex items-center gap-2">
                    <Checkbox isSelected={checked} onChange={() => onCategoryToggle(cat.slug)} />
                    <span className="text-sm">{cat.nameFa ?? cat.name}</span>
                  </label>
                );
              })}
            </div>
          </AccordionItem>
        </Accordion>

        {/* Level (Hero Select - single) */}
        <div className="mb-3">
          <Select
            label="سطح"
            placeholder="همه"
            selectedKeys={levelKeys}
            onSelectionChange={onLevelChange}
            variant="bordered"
            className="w-full"
          >
            <SelectItem key="">همه</SelectItem>
            {allLevels.map((lv) => (
              <SelectItem key={lv}>{lv}</SelectItem>
            ))}
          </Select>
        </div>

        {/* Author (Hero Select - single) */}
        <div className="mb-3">
          <Select
            label="نویسنده"
            placeholder="همه"
            selectedKeys={authorKeys}
            onSelectionChange={onAuthorChange}
            variant="bordered"
            className="w-full"
          >
            <SelectItem key="">همه</SelectItem>
            {allAuthors.map((a) => (
              <SelectItem key={a}>{a}</SelectItem>
            ))}
          </Select>
        </div>

        {/* Published range */}
        <div className="mb-3">
          <DateRangePicker
            label="سال نشر (بازهٔ تاریخی)"
            value={publishedRange}
            onChange={setPublishedRange}
            variant="bordered"
            className="w-full"
            minValue={minPublishedYear ? parseDate(`${minPublishedYear}-01-01`) : undefined}
            maxValue={maxPublishedYear ? parseDate(`${maxPublishedYear}-12-31`) : undefined}
          />
        </div>

        {/* actions */}
        <div className="flex items-center justify-between gap-2 mt-2">
          <button onClick={clearFilters} className="px-3 py-2 rounded-lg bg-gray-100 text-sm hover:bg-gray-200">
            پاک‌سازی
          </button>
          <div className="text-sm text-gray-600">
            نمایش: <span className="font-semibold">{filtered.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFilter;
