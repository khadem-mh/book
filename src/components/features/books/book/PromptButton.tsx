"use client";

import useCopyToClipboard from "@/core/hooks/useCopyToClipboard";
import { TbPrompt } from "react-icons/tb";

type CopyButtonProps = {
    textToCopy: string;
};

const PromptButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
    const { copy } = useCopyToClipboard();

    return (
        <div
            onClick={() => copy(textToCopy)}
            className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-lg bg-slate-100 hover:bg-slate-200 transition-all"
        >
            <TbPrompt className="text-[20px] text-gray-600" />
        </div>
    );
};

export default PromptButton;