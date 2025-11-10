// components/books/SortControl.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { TbArrowsSort } from "react-icons/tb";

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

// پیش‌فرض همیشه گزینه اول
const DEFAULT = `${OPTIONS[0].field}:${OPTIONS[0].dir}`;

export default function BookSort() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initial = useMemo(() => searchParams?.get("sort") ?? DEFAULT, [searchParams?.toString()]);
  const [value, setValue] = useState(initial);

  useEffect(() => {
    const s = searchParams?.get("sort") ?? DEFAULT;
    if (s !== value) setValue(s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams?.toString()]);

  function applySort(v: string) {
    if (v === value) return;  // تکرار = نادیده
    setValue(v);

    const params = new URLSearchParams(searchParams?.toString() ?? "");
    params.set("sort", v);

    const newUrl = pathname + `?${params.toString()}`;
    router.replace(newUrl);
  }

  return (
    <div className="bg-white rounded-xl shadow px-4 flex items-center gap-3">
     <div className="text-gray-600 flex items-center gap-2">
       <TbArrowsSort className="text-xl"/>
       <span className="text-sm">مرتب‌سازی بر اساس :</span>
     </div>

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
              className={`whitespace-nowrap text-sm px-3 cursor-pointer border-transparent py-3 border-b-1.5 border-t-1.5 transition
                ${active ? "text-sky-600 !border-sky-500"
                 : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"}`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
