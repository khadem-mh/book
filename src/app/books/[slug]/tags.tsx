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
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3 text-gray-700">
          <div className="rounded-full p-2 bg-slate-100 text-slate-800 shadow-sm">
            <TbTag size={16} />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-800">تگ‌ها</div>
            <div className="text-xs text-gray-400">{tags.length} مورد</div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {shown.map((t) => (
          <motion.span
            key={t}
            whileHover={{ translateY: -3 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-700 text-sm select-none"
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
