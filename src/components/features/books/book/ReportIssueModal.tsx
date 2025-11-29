"use client";

import { useState } from "react";
import BaseModal from "@/components/ui/BaseModal";
import BaseTextarea from "@/components/ui/inputs/BaseTextarea";
import { Button } from "@heroui/react";

type BaseOption = {
    key: string;
    label: string;
    img?: string;
    short?: string; // برای نمایش زیر آیکون
};

interface ReportIssueModalProps {
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export default function ReportIssueModal({
    isOpen: controlledIsOpen,
    onOpenChange,
}: ReportIssueModalProps) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        category: "" as string | undefined,
    });

    const options: BaseOption[] = [
        { key: "flashcard", label: "مشکل در محتوای فلش‌کارت", short: "محتوا", img: "/images/home/story/flashcard.png" },
        { key: "prompt", label: "مشکل در متن پرامپت", short: "پرامپت", img: "/images/home/prompt.png" },
        { key: "ai_audio", label: "اختلال در صدای هوش مصنوعی", short: "صوت", img: "/images/home/sound-ai.png" },
        { key: "ai_image", label: "اختلال در تصاویر تولیدشده با هوش مصنوعی", short: "تصاویر", img: "/images/flashcard/ai-image.png" },
    ];

    const onSelectCategory = (key: string) => {
        setForm((s) => ({ ...s, category: s.category === key ? undefined : key }));
    };

    return (
        <BaseModal
            title="گزارشت چیه؟"
            isOpen={controlledIsOpen}
            onOpenChange={onOpenChange}
            footerButtons={
                <>
                    <Button color="danger" variant="light" onPress={() => onOpenChange?.(false)}>
                        لغو
                    </Button>
                    <Button
                        color="primary"
                        onPress={() => {
                            console.log("submit", form);
                            onOpenChange?.(false);
                        }}
                    >
                        ثبت
                    </Button>
                </>
            }
        >
            <div className="flex flex-col gap-4">
                <div className="border border-slate-300 p-3 rounded-2xl">
                    <p className="text-sm text-gray-700 mb-3 text-center">مشکل اصلی رو انتخاب کن</p>

                    <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
                        {options.map((opt) => {
                            const selected = form.category === opt.key;
                            return (
                                <button
                                    key={opt.key}
                                    type="button"
                                    onClick={() => onSelectCategory(opt.key)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            onSelectCategory(opt.key);
                                        }
                                    }}
                                    role="option"
                                    aria-selected={selected}
                                    className={`flex flex-col cursor-pointer items-center gap-2 p-3 rounded-2xl text-xs transition-all border
              ${selected ? "border-sky-500 bg-sky-50 shadow-sm" : "border-slate-300 bg-white hover:bg-sky-50 hover:border-sky-300"}
              focus:outline-none focus:ring-2 focus:ring-sky-200`}
                                >
                                    <img
                                        src={opt.img}
                                        alt={opt.label}
                                        className="w-[56px] h-[56px] object-contain"
                                        draggable={false}
                                    />
                                    <span className="text-center leading-tight">{opt.short}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {form.category && (
                    <BaseTextarea
                        label="توضیحات"
                        value={form.description}
                        placeholder="لطفاً مشکل را با جزئیات بنویسید (اختیاری)"
                        rows={5}
                        onChange={(v) => setForm((s) => ({ ...s, description: v }))}
                    />
                )}
            </div>
        </BaseModal>
    );
}
