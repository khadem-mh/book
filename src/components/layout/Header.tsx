// components/layout/Header.tsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import categoriesData from "@/data/categories.json";
import { Input, Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiChevronDown,
  FiCode,
  FiDatabase,
  FiCloud,
  FiShield,
  FiCpu,
  FiBook,
} from "react-icons/fi";
import { LuBrainCircuit } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi2";
import { TbBookmarkAi } from "react-icons/tb";

/**
 * Clean & minimal Header
 * - search (small) on left
 * - center empty
 * - nav + categories + logo on right
 * - compact categories popover with icons
 */

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // categories and small icons map
  const categories = useMemo(() => (categoriesData as any[]).slice(0, 12), []);
  const iconsMap: Record<string, React.ElementType> = {
    "frontend": FiCode,
    "backend": FiCpu,
    "web-development": FiCode,
    "software-architecture": FiBook,
    "software-engineering": FiBook,
    "data-science": FiDatabase,
    "cloud-computing": FiCloud,
    "security": FiShield,
    "ai-ml": FiCpu,
    "devops": FiCloud,
    "algorithms": FiCode,
    "testing": FiBook,
    "architecture-patterns": FiBook,
  };

  // search state (small input)
  const initialQ = (searchParams?.get("q") ?? "") as string;
  const [q, setQ] = useState<string>(initialQ);

  // mobile
  const [openMobile, setOpenMobile] = useState(false);

  function submitSearch(e?: React.FormEvent) {
    e?.preventDefault();
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    if (q?.trim()) params.set("q", q.trim());
    else params.delete("q");

    // navigate to books (preserve other params)
    const to = "/books" + (params.toString() ? `?${params.toString()}` : "");
    router.push(to);
    setOpenMobile(false);
  }

  function gotoCategory(slug: string) {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    params.set("categories", slug);
    const to = "/books" + (params.toString() ? `?${params.toString()}` : "");
    router.push(to);
    setOpenMobile(false);
  }

  return (
    <header className="sticky top-0 z-50 mb-8 rounded-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 gap-8 justify-between">

          {/* right: nav + categories + logo */}
          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex items-center">

              <Link href="/" className="flex items-center gap-2 ml-3">
                <LuBrainCircuit className="text-[32px] text-sky-400" />
                <div className="text-xl text-gray-600 flex items-center gap-0.5">
                  <p className="font-[Lalezar]">بابا</p>
                  <span className="font-[Lalezar] text-sky-400">هوش</span>
                </div>
              </Link>

              <Popover>
                <PopoverTrigger asChild>
                  <button className="text-sm text-slate-700 flex items-center gap-1 hover:bg-slate-100 rounded-xl py-1.5 px-3 transition-all duration-300 cursor-pointer">
                    {/* <TbCategory2 className="text-xl" /> */}
                    دسته‌ها <FiChevronDown className="text-sm" />
                  </button>
                </PopoverTrigger>

                <PopoverContent className="w-[360px] p-3 rounded-lg border border-slate-100 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((c: any) => {
                      const Icon = iconsMap[c.slug] ?? FiBook;
                      return (
                        <button
                          key={c.slug}
                          onClick={() => gotoCategory(c.slug)}
                          className="flex items-start gap-3 p-2 rounded hover:bg-slate-50 text-left"
                        >
                          <span className="mt-0.5 text-lg text-slate-600"><Icon /></span>
                          <div className="text-sm">
                            <div className="font-medium">{c.nameFa ?? c.name}</div>
                            <div className="text-xs text-slate-500">مطالب مرتبط</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </PopoverContent>
              </Popover>

              <Link href="/books" className="flex items-center gap-1 hover:bg-slate-100 rounded-xl py-1.5 px-3 transition-all duration-300">
                {/* <PiBooks className="text-2xl" /> */}
                <p className="text-sm text-slate-700">همه کتاب‌ها</p>
              </Link>

              <Link href="/blog" className="flex items-center gap-1 hover:bg-slate-100 rounded-xl py-1.5 px-3 transition-all duration-300">
                {/* <LuScrollText className="text-xl" /> */}
                <p className="text-sm text-slate-700">مقالات</p>
              </Link>
            </nav>

            {/* mobile menu toggle */}
            <div className="sm:hidden">
              <button onClick={() => setOpenMobile(s => !s)} className="p-2 rounded-md">
                {openMobile ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <form onSubmit={submitSearch}>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="دنبال چه کتابی میگردی؟"
                  value={q}
                  onValueChange={(v: string) => setQ(v)}
                  variant="flat"
                  className="w-64"
                  endContent={<FiSearch className="text-slate-500" />}
                  aria-label="جستجو در سایت"
                />
              </div>
            </form>
            <div className="bg-slate-100 p-2.5 rounded-xl cursor-pointer">
              <TbBookmarkAi className="text-xl" />
            </div>
            <Button color="primary" className="text-white" startContent={<HiOutlineUser className="text-2xl" />}>ورود | عضویت</Button>
          </div>

        </div>
      </div>

      {/* mobile panel */}
      {openMobile && (
        <div className="sm:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            <form onSubmit={(e) => { e.preventDefault(); submitSearch(); }}>
              <Input
                placeholder="جستجو..."
                value={q}
                onValueChange={(v: string) => setQ(v)}
                size="sm"
                variant="bordered"
                className="w-full"
                endContent={<FiSearch className="text-slate-500" />}
              />
            </form>

            <div className="grid grid-cols-2 gap-2">
              {categories.map((c: any) => {
                const Icon = iconsMap[c.slug] ?? FiBook;
                return (
                  <button key={c.slug} onClick={() => gotoCategory(c.slug)} className="flex items-start gap-2 p-2 rounded hover:bg-slate-50 text-left">
                    <Icon className="text-lg mt-0.5" />
                    <div className="text-sm">{c.nameFa ?? c.name}</div>
                  </button>
                );
              })}
            </div>

            <div className="flex gap-2">
              <button onClick={() => { router.push("/auth"); setOpenMobile(false); }} className="flex-1 text-sm px-3 py-2 rounded bg-gray-100">ورود</button>
              <button onClick={() => { router.push("/bookmarks"); setOpenMobile(false); }} className="flex-1 text-sm px-3 py-2 rounded border">ذخیره‌ها</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
