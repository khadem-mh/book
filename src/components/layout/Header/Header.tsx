"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { categories } from "@/core/lib/data/categories";
import { Input, Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiChevronDown,
  FiBook,
} from "react-icons/fi";
import { LuBrainCircuit } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi2";
import { TbBookmarkAi } from "react-icons/tb";
import LoginForm from "./LoginForm";

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

              <Popover placement="top-start" backdrop="opaque">
                <PopoverTrigger asChild>
                  <button className="text-sm text-slate-700 flex items-center gap-1 py-1.5 px-3 duration-300 cursor-pointer">
                    {/* <TbCategory2 className="text-xl" /> */}
                    دسته‌ها <FiChevronDown className="text-sm" />
                  </button>
                </PopoverTrigger>

                <PopoverContent className="p-3 rounded-xl border border-slate-100 shadow-sm">
                  <div className="grid grid-cols-3 gap-3.5">
                    {categories.map((c: any) => {
                      return (
                        <button
                          key={c.slug}
                          onClick={() => gotoCategory(c.slug)}
                          className="flex items-center text-sky-700 gap-2 cursor-pointer py-1 px-2 rounded-xl hover:bg-slate-100 transition-all text-left"
                        >
                          <img src={c.img} alt="cate" className="w-15" />
                          <div className="text-sm">
                            <p className="font-medium text-right">{c.nameFa}</p>
                            <p className="text-xs text-slate-500 text-right">{c.name}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </PopoverContent>
              </Popover>

              <Link href="/books" className="flex items-center gap-1 py-1.5 px-3 transition-all duration-300">
                {/* <PiBooks className="text-2xl" /> */}
                <p className="text-sm text-slate-700">همه کتاب‌ها</p>
              </Link>

              <Link href="/blog" className="flex items-center gap-1 py-1.5 px-3 transition-all duration-300">
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
            <LoginForm/>
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
                const Icon = FiBook;
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
