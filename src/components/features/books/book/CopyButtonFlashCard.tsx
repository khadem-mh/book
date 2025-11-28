"use client";

import useCopyToClipboard from "@/core/hooks/useCopyToClipboard";
import { IconType } from "react-icons"; // اضافه می‌کنیم تا نوع آیکون مشخص باشه

type CopyButtonProps = {
    textToCopy: string;
    Icon: IconType; // کامپوننت آیکون از react-icons
};

const CopyButtonFlashCard: React.FC<CopyButtonProps> = ({ textToCopy, Icon }) => {
    const { copy } = useCopyToClipboard();

    return (
        <div
            onClick={() => copy(textToCopy)}
            className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-lg bg-slate-100 hover:bg-slate-200 transition-all"
        >
            <Icon className="text-[19px] text-gray-600" />
        </div>
    );
};

export default CopyButtonFlashCard;