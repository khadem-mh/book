"use client";

import React, { useState } from "react";
import Link from "next/link";
import { categories as categoriesData } from "@/core/lib/data/categories";
import { Input, Button } from "@heroui/react";
import { FiMail, FiArrowUp, FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { LuBrainCircuit } from "react-icons/lu";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "ok" | "error">(null);

  const categories = (categoriesData as any[]).slice(0, 10); // show a few, or map all

  return (
    <footer className="mt-16">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-4 bg-gradient-to-r from-white via-gray-100 to-white border border-b-0 border-slate-300 rounded-t-4xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ABOUT */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <LuBrainCircuit className="text-[52px] text-sky-400 animate-pulse"/>
              <div>
                <div className="text-3xl text-gray-600 mb-1 flex items-center gap-1">
                  <p className="font-[Lalezar]">بابا</p>
                  <span className="font-[Lalezar] animate-bounce text-sky-400">هوش</span>
                </div>
                <p className="text-slate-600">یادگیری سریع با فلش‌کارت</p>
              </div>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              مجموعه‌ای از کتاب‌ها و منابع آموزشی حول معماری نرم‌افزار، فرانت‌اند، داده و هوش‌مصنوعی. مطالب مرتب و دسته‌بندی‌شده برای توسعه‌دهندگان.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a aria-label="Instagram" href="https://www.instagram.com/mohamadhoseinkhademal" className="p-2 rounded-md hover:bg-slate-100 bg-sky-50 border-dashed border-2 border-sky-200 text-sky-600">
                <FiInstagram size={18} />
              </a>
              <a aria-label="Twitter" href="https://x.com/khadem_mh" className="p-2 rounded-md hover:bg-slate-100 bg-sky-50 border-dashed border-2 border-sky-200 text-sky-600">
                <FiTwitter size={18} />
              </a>
              <a aria-label="GitHub" href="https://github.com/khadem-mh" className="p-2 rounded-md hover:bg-slate-100 bg-sky-50 border-dashed border-2 border-sky-200 text-sky-600">
                <FiGithub size={18} />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/khadem-mh" className="p-2 rounded-md hover:bg-slate-100 bg-sky-50 border-dashed border-2 border-sky-200 text-sky-600">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* CATEGORIES */}
          <div>
            <h4 className="text-sm font-semibold mb-3">دسته‌بندی‌ها</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              {categories.map((c: any) => (
                <li key={c.slug}>
                  <Link href={`/books?categories=${c.slug}`} className="text-slate-600 dark:text-slate-300 hover:underline">
                    {c.nameFa ?? c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold mb-3">لینک‌های مفید</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><Link href="/" className="hover:underline">خانه</Link></li>
              <li><Link href="/books" className="hover:underline">کتاب‌ها</Link></li>
              <li><Link href="#" className="hover:underline">درباره ما</Link></li>
              <li><Link href="#" className="hover:underline">تماس با ما</Link></li>
              <li><Link href="#" className="hover:underline">قوانین و سیاست‌ها</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-sm font-semibold mb-3">خبرنامه</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">برای دریافت جدیدترین کتاب‌ها و مطالب آموزشی ایمیل‌تان را وارد کنید.</p>

            <form className="flex gap-2">
              <Input
                value={email}
                onValueChange={(v: string) => { setEmail(v); setStatus("idle"); }}
                placeholder="you@domain.com"
                size="sm"
                radius="lg"
                variant="bordered"
                className="flex-1"
                startContent={<FiMail className="text-slate-400" />}
                aria-label="ایمیل برای خبرنامه"
                dir="ltr"
              />
              <Button type="submit" className="whitespace-nowrap" size="sm" radius="full" variant="flat">عضویت</Button>
            </form>

            {status === "error" && <p className="mt-2 text-sm text-rose-500">ایمیل معتبر وارد کنید.</p>}
            {status === "sending" && <p className="mt-2 text-sm text-slate-500">در حال ارسال...</p>}
            {status === "ok" && <p className="mt-2 text-sm text-emerald-500">متشکریم! اشتراک فعال شد.</p>}
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} PapaMind — همه حقوق محفوظ است.
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:underline">حریم خصوصی</Link>
            <Link href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:underline">قوانین</Link>
            <a href="#top" className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 hover:underline">
              بالای صفحه <FiArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
