"use client";

import React, { useMemo, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import categoriesData from "@/data/categories.json";

type Author = { name: string; enName?: string; cover?: string };

export type Book = {
  slug: string;
  title: string;
  titleFa?: string;
  subTitle?: string;
  authors: Author[];
  cover?: string;
  pages?: number;
  language?: string; // e.g. 'en'
  languageFa?: string;
  publishedYear?: number;
  publishedYearAi?: number;
  chapters?: number;
  level?: string; // e.g. 'beginner' | 'medium' | 'advanced'
  tags?: string[];
  rating?: number;
  description?: string;
  createdAt?: string;
  categories?: string[]; // <-- array of category slugs
};

type Category = { id: number; slug: string; name: string; nameFa?: string };

type Props = {
  books: Book[];
  onChange?: (filtered: Book[]) => void; // optional callback
};

/**
 * BookFilter with categories support
 * - URL param for categories: `categories=frontend,software-architecture`
 * - category selector displayed as chips (nameFa if available)
 */
const BookFilter: React.FC<Props> = ({ books, onChange }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // read initial values from URL search params
  const initialQ = searchParams?.get("q") ?? "";
  const initialLevel = searchParams?.get("level") ?? "";
  const initialAuthor = searchParams?.get("author") ?? "";
  const initialMinYear = searchParams?.get("minYear") ?? "";
  const initialMaxYear = searchParams?.get("maxYear") ?? "";
  const initialCategories = searchParams?.get("categories")
    ? (searchParams.get("categories")!.split(",").filter(Boolean) as string[])
    : [];

  const [query, setQuery] = useState(initialQ);
  const [level, setLevel] = useState<string | "">(initialLevel);
  const [author, setAuthor] = useState<string | "">(initialAuthor);
  const [minYear, setMinYear] = useState<number | "">(initialMinYear === "" ? "" : Number(initialMinYear));
  const [maxYear, setMaxYear] = useState<number | "">(initialMaxYear === "" ? "" : Number(initialMaxYear));
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategories);

  // categories list (from json)
  const allCategories = useMemo(() => {
    return (categoriesData as Category[]).slice();
  }, []);

  // derive filter options from data
  const minPublishedYear = useMemo(() => {
    const years = books.map((b) => b.publishedYear || 0).filter(Boolean);
    return years.length ? Math.min(...(years as number[])) : undefined;
  }, [books]);

  const maxPublishedYear = useMemo(() => {
    const years = books.map((b) => b.publishedYear || 0).filter(Boolean);
    return years.length ? Math.max(...(years as number[])) : undefined;
  }, [books]);

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

  // filtering logic (including categories)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return books.filter((b) => {
      if (q) {
        const inTitle = ((b.title || "") + " " + (b.titleFa || "") + " " + (b.subTitle || ""))
          .toLowerCase()
          .includes(q);
        const inAuthors = (b.authors || []).map((a) => (a.name + " " + (a.enName || "")).toLowerCase()).some((s) => s.includes(q));
        const inTags = (b.tags || []).some((t) => t.toLowerCase().includes(q));
        if (!(inTitle || inAuthors || inTags)) return false;
      }

      if (level && b.level !== level) return false;
      if (author && !(b.authors || []).some((a) => a.name === author)) return false;
      if (minYear !== "" && b.publishedYear !== undefined) {
        if (b.publishedYear < Number(minYear)) return false;
      }
      if (maxYear !== "" && b.publishedYear !== undefined) {
        if (b.publishedYear > Number(maxYear)) return false;
      }

      // categories: if user selected categories, require that book has at least one of them
      if (selectedCategories.length > 0) {
        const bookCats = (b.categories || []).map((c) => String(c));
        const hasAny = selectedCategories.some((sc) => bookCats.includes(sc));
        if (!hasAny) return false;
      }

      return true;
    });
  }, [books, query, level, author, minYear, maxYear, selectedCategories]);

  // push filter state into URL whenever any filter changes
  React.useEffect(() => {
    const params = new URLSearchParams();

    if (query) params.set("q", query);
    if (level) params.set("level", level);
    if (author) params.set("author", author);
    if (minYear !== "") params.set("minYear", String(minYear));
    if (maxYear !== "") params.set("maxYear", String(maxYear));
    if (selectedCategories.length) params.set("categories", selectedCategories.join(","));

    const newUrl = pathname + (params.toString() ? `?${params.toString()}` : "");
    // replace so browser history doesn't fill up on every keystroke
    router.replace(newUrl);
  }, [query, level, author, minYear, maxYear, selectedCategories, pathname, router]);

  // call back to parent when filtered changes
  React.useEffect(() => {
    onChange?.(filtered);
  }, [filtered, onChange]);

  function clearFilters() {
    setQuery("");
    setLevel("");
    setAuthor("");
    setMinYear("");
    setMaxYear("");
    setSelectedCategories([]);
  }

  function toggleCategory(slug: string) {
    setSelectedCategories((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm">
        {/* Header row: search + clear */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <label className="flex-1">
            <div className="text-xs text-gray-500 mb-1">جستجو</div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="عنوان یا نویسنده..."
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </label>

          <div className="flex items-center gap-2">
            <button onClick={clearFilters} className="px-3 py-2 rounded-lg bg-gray-100 text-sm hover:bg-gray-200">
              پاک‌سازی
            </button>
            <div className="text-sm text-gray-600">نتایج: <span className="font-semibold">{filtered.length}</span></div>
          </div>
        </div>

        {/* Filters grid */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <div className="text-xs text-gray-500 mb-1">دسته‌بندی</div>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => {
                const active = selectedCategories.includes(cat.slug);
                return (
                  <button
                    key={cat.slug}
                    onClick={() => toggleCategory(cat.slug)}
                    className={`text-sm px-3 py-1 rounded-full border ${active ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-800"}`}
                    title={cat.name}
                  >
                    {cat.nameFa ?? cat.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500 mb-1">سطح</div>
            <select value={level} onChange={(e) => setLevel(e.target.value)} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm">
              <option value="">همه</option>
              {allLevels.map((lv) => (<option key={lv} value={lv}>{lv}</option>))}
            </select>
          </div>

          <div>
            <div className="text-xs text-gray-500 mb-1">نویسنده</div>
            <select value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm">
              <option value="">همه</option>
              {allAuthors.map((a) => (<option key={a} value={a}>{a}</option>))}
            </select>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-xs text-gray-500 mb-1">سال نشر</div>
            <div className="flex gap-2">
              <input type="number" placeholder={String(minPublishedYear ?? "از")} value={minYear as any} onChange={(e) => setMinYear(e.target.value === "" ? "" : Number(e.target.value))} className="w-1/2 rounded-lg border border-gray-200 px-3 py-2 text-sm" />
              <input type="number" placeholder={String(maxPublishedYear ?? "تا")} value={maxYear as any} onChange={(e) => setMaxYear(e.target.value === "" ? "" : Number(e.target.value))} className="w-1/2 rounded-lg border border-gray-200 px-3 py-2 text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFilter;
