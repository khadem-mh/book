"use client";

import { useState } from "react";
import BaseModal from "@/components/ui/BaseModal";
import { Input, Textarea, Button } from "@heroui/react";

interface ReportIssueModalProps {
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    onSubmit?: (data: { title: string; description: string }) => void;
}

export default function ReportIssueModal({
    isOpen: controlledIsOpen,
    onOpenChange,
    onSubmit,
}: ReportIssueModalProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (!title || !description) return; // ساده‌ترین اعتبارسنجی
        setIsSubmitting(true);
        try {
            await onSubmit?.({ title, description });
            setTitle("");
            setDescription("");
            onOpenChange?.(false); // بعد از submit مودال بسته شود
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <BaseModal
            title="Report an Issue"
            isOpen={controlledIsOpen}
            onOpenChange={onOpenChange}
            footerButtons={
                <>
                    <Button color="danger" variant="light" onPress={() => onOpenChange?.(false)}>
                        لغو
                    </Button>
                    <Button color="primary" onPress={handleSubmit} disabled={isSubmitting}>
                        {isSubmitting ? "در حال ارسال..." : "ثبت"}
                    </Button>
                </>
            }
        >
            <div className="flex flex-col gap-4">
                <Input
                    label="عنوان مشکل"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="عنوان مشکل را وارد کنید"
                />
                <Textarea
                    label="توضیحات"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="توضیح دهید"
                    rows={5}
                />
            </div>
        </BaseModal>
    );
}
