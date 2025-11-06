// components/books/SortControl.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

type SortOption = {
  label: string;
  field: string;
  dir: "asc" | "desc";
};

const OPTIONS: SortOption[] = [
  { label: "جدیدترین", field: "publishedYear", dir: "desc" },
  { label: "قدیمی‌ترین", field: "publishedYear", dir: "asc" },
  { label: "بالاترین امتیاز", field: "rating", dir: "desc" },
  { label: "بیشترین صفحات", field: "pages", dir: "desc" },
  { label: "کمترین صفحات", field: "pages", dir: "asc" },
];

export default function BookSort() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // read initial sort from URL
  const initialSort = useMemo(() => searchParams?.get("sort") ?? "", [searchParams?.toString()]);
  const [value, setValue] = useState<string>(initialSort);

  // keep local state in sync if URL changes from outside
  useEffect(() => {
    const s = searchParams?.get("sort") ?? "";
    if (s !== value) setValue(s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams?.toString()]);

  function applySort(v: string) {
    // toggle behavior: if same value clicked again -> clear
    const next = v === value ? "" : v;
    setValue(next);

    const params = new URLSearchParams(searchParams?.toString() ?? "");
    if (!next) params.delete("sort");
    else params.set("sort", next);

    const newUrl = pathname + (params.toString() ? `?${params.toString()}` : "");
    router.replace(newUrl);
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-500">مرتب‌سازی</span>

      <div className="flex gap-2 overflow-auto">
        {OPTIONS.map((o) => {
          const key = `${o.field}:${o.dir}`;
          const active = key === value;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              onClick={() => applySort(key)}
              className={`whitespace-nowrap text-sm px-3 py-1.5 rounded-lg border transition
                ${active ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"}`}
            >
              {o.label}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => applySort("")}
        className="ml-2 text-sm px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
        title="پاک‌کردن مرتب‌سازی"
      >
        پاک‌کردن
      </button>
    </div>
  );
}
