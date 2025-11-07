"use client";

import React, { useState } from "react";
import Link from "next/link";
import categoriesData from "@/data/categories.json";
import { Input, Button } from "@heroui/react";
import { FiMail, FiArrowUp, FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "ok" | "error">(null);

  const categories = (categoriesData as any[]).slice(0, 8); // show a few, or map all

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    // demo: fake submit -> in real app call your API
    setTimeout(() => {
      setStatus("ok");
      setEmail("");
      setTimeout(() => setStatus(null), 2500);
    }, 900);
  }

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ABOUT */}
          <div className="space-y-3">
            <Link href="/" className="inline-block">
              <h3 className="text-xl font-bold">ChannelFinder</h3>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              مجموعه‌ای از کتاب‌ها و منابع آموزشی حول معماری نرم‌افزار، فرانت‌اند، داده و هوش‌مصنوعی. مطالب مرتب و دسته‌بندی‌شده برای توسعه‌دهندگان.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a aria-label="Instagram" href="#" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                <FiInstagram size={18} />
              </a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                <FiTwitter size={18} />
              </a>
              <a aria-label="GitHub" href="#" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                <FiGithub size={18} />
              </a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
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
            <div className="mt-3">
              <Link href="/categories" className="text-sm text-indigo-600 hover:underline">نمایش همه دسته‌ها</Link>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold mb-3">لینک‌های مفید</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><Link href="/" className="hover:underline">خانه</Link></li>
              <li><Link href="/books" className="hover:underline">کتاب‌ها</Link></li>
              <li><Link href="/about" className="hover:underline">درباره ما</Link></li>
              <li><Link href="/contact" className="hover:underline">تماس با ما</Link></li>
              <li><Link href="/terms" className="hover:underline">قوانین و سیاست‌ها</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-sm font-semibold mb-3">خبرنامه</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">برای دریافت جدیدترین کتاب‌ها و مطالب آموزشی ایمیل‌تان را وارد کنید.</p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
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
              />
              <Button type="submit" className="whitespace-nowrap" size="sm">عضویت</Button>
            </form>

            {status === "error" && <p className="mt-2 text-sm text-rose-500">ایمیل معتبر وارد کنید.</p>}
            {status === "sending" && <p className="mt-2 text-sm text-slate-500">در حال ارسال...</p>}
            {status === "ok" && <p className="mt-2 text-sm text-emerald-500">متشکریم! اشتراک فعال شد.</p>}
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} ChannelFinder — همه حقوق محفوظ است.
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-slate-500 dark:text-slate-400 hover:underline">حریم خصوصی</Link>
            <Link href="/terms" className="text-sm text-slate-500 dark:text-slate-400 hover:underline">قوانین</Link>
            <a href="#top" className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 hover:underline">
              بالای صفحه <FiArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
