"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

type CopyOptions = {
  successMessage?: string;
  errorMessage?: string;
};

export default function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text: string, options?: CopyOptions) => {
    const successMessage = options?.successMessage || "کپی شد!";
    const errorMessage = options?.errorMessage || "کپی متن موفقیت‌آمیز نبود!";

    if (!navigator.clipboard) {
      toast.error("Clipboard API پشتیبانی نمی‌شود!");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success(successMessage);
      setTimeout(() => setIsCopied(false), 2000);
      return true;
    } catch (err) {
      setIsCopied(false);
      toast.error(errorMessage);
      return false;
    }
  };

  return { copy, isCopied };
}
