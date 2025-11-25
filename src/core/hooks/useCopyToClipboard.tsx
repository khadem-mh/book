"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function useCopyToClipboard() {
    const [isCopied, setIsCopied] = useState(false);

    const copy = async (text: string) => {

        if (!navigator.clipboard) {
            toast.error("Clipboard API پشتیبانی نمی‌شود!");
            return false;
        }

        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            toast.success("متن کپی شد!");
            setTimeout(() => setIsCopied(false), 2000);
            return true;
        } catch (err) {
            setIsCopied(false);
            toast.error("کپی متن موفقیت‌آمیز نبود!");
            return false;
        }
    };

    return { copy, isCopied };
}