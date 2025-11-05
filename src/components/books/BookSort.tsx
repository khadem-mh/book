// components/books/SortControl.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

type SortOption = {
  label: string;
  field: string;
  dir: "asc" | "desc";
};

const OPTIONS: SortOption[] = [
  { label: "جدیدترین (سال نزولی)", field: "publishedYear", dir: "desc" },
  { label: "قدیمی‌ترین (سال صعودی)", field: "publishedYear", dir: "asc" },
  { label: "بالاترین امتیاز", field: "rating", dir: "desc" },
  { label: "کمترین امتیاز", field: "rating", dir: "asc" },
  { label: "عنوان A → Z", field: "title", dir: "asc" },
  { label: "عنوان Z → A", field: "title", dir: "desc" },
  { label: "بیشترین صفحات", field: "pages", dir: "desc" },
  { label: "کمترین صفحات", field: "pages", dir: "asc" },
];

export default function BookSort() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // read initial sort from URL
  const initialSort = searchParams?.get("sort") ?? "";
  const [value, setValue] = useState<string>(initialSort);

  // keep local state in sync if URL changes from outside
  useEffect(() => {
    const s = searchParams?.get("sort") ?? "";
    if (s !== value) setValue(s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams?.toString()]);

  function applySort(v: string) {
    setValue(v);

    const params = new URLSearchParams(searchParams as any || undefined);
    if (!v) {
      params.delete("sort");
    } else {
      params.set("sort", v);
    }

    const newUrl = pathname + (params.toString() ? `?${params.toString()}` : "");
    // replace so we don't fill history on each change
    router.replace(newUrl);
  }

  return (
    <div className="flex items-center gap-3">
      <label className="text-xs text-gray-500">مرتب‌سازی</label>

      <select
        value={value}
        onChange={(e) => applySort(e.target.value)}
        className="rounded-lg border border-gray-200 px-3 py-2 text-sm"
      >
        <option value="">پیش‌فرض</option>
        {OPTIONS.map((o) => {
          const key = `${o.field}:${o.dir}`;
          return (
            <option key={key} value={key}>
              {o.label}
            </option>
          );
        })}
      </select>

      {/* دکمه‌ی پاک‌کردن سریع */}
      <button
        onClick={() => applySort("")}
        className="text-sm px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
      >
        پاک‌کردن
      </button>
    </div>
  );
}
