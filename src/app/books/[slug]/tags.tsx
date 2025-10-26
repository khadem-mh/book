// MinimalTagsBlock.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { TbTag } from "react-icons/tb";

type Props = { tags: string[] };

export default function MinimalTagsBlock({ tags }: Props) {
    const maxShown = 8;
    const shown = tags.slice(0, maxShown);
    const more = tags.length > maxShown ? tags.length - maxShown : 0;

    return (
        <div className="flex items-center gap-8 bg-white rounded-2xl px-2 py-1 border border-sky-200">

            <div className="flex items-center gap-3 text-gray-700">
                <div className="rounded-xl p-2 text-sky-600 bg-sky-50 border border-sky-200">
                    <TbTag size={20} className="animate-bounce"/>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm font-medium text-slate-800">تگ‌ها</p>
                    <p className="text-xs -mt-1.5 text-gray-400">{tags.length} مورد</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {shown.map((t) => (
                    <motion.span
                        key={t}
                        whileHover={{ translateY: -3 }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                        className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-50 border border-slate-100 text-slate-700 text-sm select-none"
                        style={{ maxWidth: 200 }}
                        title={t}
                    >
                        {/* small subtle dot (optional) */}
                        <span className="w-2 h-2 rounded-full bg-slate-300 inline-block" />
                        <span className="truncate">{t}</span>
                    </motion.span>
                ))}

                {more > 0 && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-sm">
                        +{more}
                    </span>
                )}
            </div>
        </div>
    );
}
