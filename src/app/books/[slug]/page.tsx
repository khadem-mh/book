"use client";

import React from "react";
import Link from "next/link";
import { books } from "@/lib/books";
import { motion } from "framer-motion";
import {
    TbUser,
    TbCalendarStats,
    TbFileText,
    TbTag,
    TbClock,
    TbBook,
    TbChevronRight,
} from "react-icons/tb";
import { LuZap } from "react-icons/lu";
import TagsBlock from "./tags";

type Props = { params: any };

function formatDate(dateStr?: string) {
    if (!dateStr) return "-";
    try {
        return new Date(dateStr).toLocaleDateString("fa-IR");
    } catch {
        return dateStr;
    }
}

export default function SpecificOfBook({ params }: Props) {
    const { slug } = params;
    const book = books.find((b: any) => b.slug === slug);

    if (!book) {
        return (
            <div className="p-6">
                <h1 className="text-xl font-bold">کتاب یافت نشد</h1>
                <p className="text-sm text-gray-500 mt-2">ممکن است slug اشتباه باشد یا کتاب هنوز اضافه نشده باشد.</p>
            </div>
        );
    }

    // AI defaults (meta fallbacks)
    const aiYear = book.publishedYearAi ?? 2025;
    const aiLevel = book?.publishedLevelAi ?? "easy";
    const aiPages = book?.publishedPagesAi ?? book.publishedPages ?? book.pages ?? "—";

    const iconBg = "rounded-full p-2 flex items-center justify-center shadow-sm";
    const iconSize = 22;

    const readingEstimate = (pages: number | string) => {
        const p = typeof pages === "number" ? pages : parseInt(String(pages)) || 0;
        const mins = Math.max(1, Math.round(p * 1.15));
        return `${mins} دقیقه (حدس زده)`;
    };

    const welcomeText = "سلام — من نسخهٔ هوش‌مصنوعی این کتاب هستم. می‌تونم خلاصه، فلش‌کارت و سوالات مرور بسازم. آماده‌ای؟";

    return (
        <div className="mx-auto p-6 space-y-8">
            {/* small CSS kept for gradients/text style but no animations */}
            <style>{`
        .ai-gradient { background: linear-gradient(135deg, rgba(56,189,248,0.96), rgba(99,102,241,0.96), rgba(168,85,247,0.96)); }
        .heading-gradient { background: linear-gradient(90deg, #0ea5e9, #7c3aed, #06b6d4); -webkit-background-clip: text; background-clip: text; color: transparent; }
        @media (max-width: 640px) { .heading-gradient { font-size: 1.6rem; } }
      `}</style>

            {/* Header */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* COVER - only this keeps a gentle framer-motion loop */}
                <motion.div
                    className="relative w-full md:w-64 flex-shrink-0"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                >
                    <motion.div
                        className="relative rounded-3xl overflow-hidden shadow-2xl"
                        animate={{ y: [-4, 4, -4], rotate: [0, 0.3, 0], scale: [1, 1.01, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img src={book.cover} alt={`${book.titleFa || book.title} cover`} className="w-full h-auto object-cover" style={{ borderRadius: 24 }} />
                        <div className="absolute inset-0 pointer-events-none z-30">
                            <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gCover" x1="0" x2="1">
                                        <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                                        <stop offset="60%" stopColor="rgba(255,255,255,0)" />
                                    </linearGradient>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#gCover)" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* small badges */}
                    <div className="mt-3 flex gap-2">
                        <span className="text-xs bg-white/95 px-3 py-1 rounded-full shadow glass">{book.languageFa ?? book.language ?? "—"}</span>
                        <span className="text-xs bg-white/95 px-3 py-1 rounded-full shadow glass">{book.level ?? "—"}</span>
                    </div>
                </motion.div>

                {/* meta & controls (STATIC) */}
                <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight heading-gradient">{book.titleFa || book.title}</h1>
                        {book.subTitle && <p className="text-sm text-gray-400 mt-2 max-w-3xl">{book.subTitle}</p>}

                        {/* authors with avatars (static) */}
                        <div className="mt-4 flex items-center gap-3 flex-wrap">
                            {(book.authors ?? []).map((a: any) => (
                                <div key={a.name} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                                    <img src={a.cover} alt={a.name} className="w-11 h-11 rounded-full object-cover border border-white/70" />
                                    <div className="text-sm font-medium">{a.name}</div>
                                </div>
                            ))}
                        </div>

                        {book.description && <p className="mt-5 text-sm text-gray-600 max-w-3xl leading-relaxed">{book.description}</p>}


                        <div className="mt-6 flex flex-wrap gap-3 items-center">
                            <button className="inline-flex items-center gap-2 bg-sky-600 text-white text-sm px-4 py-2 rounded-2xl shadow">
                                مشاهده کتاب <TbChevronRight size={16} />
                            </button>

                            <a className="inline-flex items-center gap-2 border border-slate-200 text-sm px-4 py-2 rounded-2xl hover:shadow transition" href="#tags">
                                تگ‌ها ({(book.tags ?? []).length})
                            </a>
                        </div>
                    </div>

                    {/* stats row - static */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                        <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
                            <div className={`${iconBg} bg-sky-50 text-sky-600`}><TbUser size={iconSize} /></div>
                            <div>
                                <div className="text-xs text-gray-400">نویسنده(ها)</div>
                                <div className="text-sm font-medium">{(book.authors ?? []).map((a: any) => a.name).join(", ")}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
                            <div className={`${iconBg} bg-amber-50 text-amber-600`}><TbCalendarStats size={iconSize} /></div>
                            <div>
                                <div className="text-xs text-gray-400">انتشار</div>
                                <div className="text-sm font-medium">{book.publishedYear ?? "-"}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
                            <div className={`${iconBg} bg-violet-50 text-violet-600`}><TbFileText size={iconSize} /></div>
                            <div>
                                <div className="text-xs text-gray-400">صفحات</div>
                                <div className="text-sm font-medium">{book.publishedPages ?? book.pages ?? "-"}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
                            <div className={`${iconBg} bg-slate-50 text-slate-700`}><TbClock size={iconSize} /></div>
                            <div>
                                <div className="text-xs text-gray-400">ایجاد شده</div>
                                <div className="text-sm font-medium">{formatDate(book.createdAt)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards (Preface & AI) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Preface card (static) */}
                <div>
                    <Link href={`/books/${slug}/preface`} className="no-underline">
                        <div className="group bg-gradient-to-r from-white to-slate-50 rounded-3xl p-6 shadow-lg border-l-4 border-sky-400">
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm"><TbBook size={22} className="text-sky-600" /></div>
                                    <div>
                                        <h3 className="text-lg font-semibold">مقدمه کتاب</h3>
                                        <p className="text-xs text-gray-400 mt-1">معرفی، علت نگارش و نکات کلیدی</p>
                                    </div>
                                </div>

                                <div className="text-xs text-sky-600">مشاهدهٔ مقدمه</div>
                            </div>

                            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-h-28 overflow-hidden">{book.prefaceSummary ?? book.description ?? "خلاصهٔ مقدمه در اینجا نمایش داده می‌شود."}</p>

                            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
                                <div>
                                    <div className="text-xs text-gray-400">مخاطب هدف</div>
                                    <div className="font-medium">{book.targetAudience ?? "عمومی / مهندسین نرم‌افزار"}</div>
                                </div>

                                <div>
                                    <div className="text-xs text-gray-400">حدس زمان مطالعه</div>
                                    <div className="font-medium">{readingEstimate(book.publishedPages ?? book.pages ?? 3)}</div>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-3">
                                <button className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-2xl text-sm shadow-sm">
                                    باز کردن مقدمه
                                </button>

                                <span className="text-xs text-gray-500">مشاهدهٔ کامل مقدمه و بلوک‌ها</span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* AI card (STATIC content but with background gradient) */}
                <div>
                    <Link href={`/books/${slug}/ai`} className="no-underline">
                        <div className="relative rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 ai-gradient" style={{ zIndex: 0 }} />

                            <div className="relative p-6 text-white z-20">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/10 rounded-full p-3"><LuZap size={24} className="text-white" /></div>
                                        <div>
                                            <h3 className="text-lg font-semibold">نسخه‌های تولیدشده با هوش مصنوعی</h3>
                                            <p className="text-xs text-white/90 mt-1">خلاصهٔ مولد، فلش‌کارت و سوالات مرور بر اساس هر فصل</p>
                                        </div>
                                    </div>

                                    <div className="text-xs bg-white/20 px-3 py-1 rounded-full">مشاهدهٔ صفحات AI</div>
                                </div>

                                <div className="mt-4 text-sm text-white/95 leading-relaxed">
                                    {welcomeText}
                                </div>

                                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                                        <div className="bg-white/20 rounded-full p-2"><TbCalendarStats size={18} className="text-white" /></div>
                                        <div>
                                            <div className="text-xs text-white/80">سال تولید</div>
                                            <div className="text-sm font-medium">{aiYear}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                                        <div className="bg-white/20 rounded-full p-2"><LuZap size={18} className="text-white" /></div>
                                        <div>
                                            <div className="text-xs text-white/80">سطح پیش‌فرض</div>
                                            <div className="text-sm font-medium capitalize">{aiLevel}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                                        <div className="bg-white/20 rounded-full p-2"><TbFileText size={18} className="text-white" /></div>
                                        <div>
                                            <div className="text-xs text-white/80">صفحات/بلوک‌های AI</div>
                                            <div className="text-sm font-medium">{aiPages}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-3">
                                    <button className="inline-flex items-center gap-2 bg-white text-sky-700 px-4 py-2 rounded-2xl font-medium shadow">
                                        مشاهده مجموعه‌ها
                                    </button>

                                    <button className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-2xl">
                                        تغییر سطح
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <TagsBlock tags={book.tags ?? []} />
        </div>
    );
}
