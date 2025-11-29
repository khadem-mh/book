"use client";

import { useState } from "react";
import BaseModal from "@/components/ui/BaseModal";
import BaseSelect, { BaseOption } from "@/components/ui/inputs/BaseSelect";
import BaseInput from "@/components/ui/inputs/BaseInput";
import BaseTextarea from "@/components/ui/inputs/BaseTextarea";
import { Button } from "@heroui/react";

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
        { key: "flashcard", label: "مشکل از محتوای فلش کارت" },
        { key: "prompt", label: "مشکل از پرامپت AI" },
        { key: "ai_audio", label: "مشکل از صوت AI" },
        { key: "ai_image", label: "مشکل از تصاویر تولید شده AI" },
    ];

    return (
        <BaseModal
            title="گزارش یک مشکل"
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
                <BaseSelect
                    label="دسته"
                    placeholder="یک دسته انتخاب کنید"
                    options={options}
                    selectedKey={form.category}
                    onChange={(key) => setForm((s) => ({ ...s, category: key }))}
                />

                <BaseTextarea
                    label="توضیحات"
                    value={form.description}
                    placeholder="مشکل از چه قراره؟"
                    rows={5}
                    onChange={(v) => setForm((s) => ({ ...s, description: v }))}
                />
            </div>
        </BaseModal>
    );
}
