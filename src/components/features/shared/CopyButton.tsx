"use client";

import { MdOutlineLibraryBooks } from "react-icons/md";
import useCopyToClipboard from "@/core/hooks/useCopyToClipboard";

type CopyButtonProps = {
    textToCopy: string;
};

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
    const { copy } = useCopyToClipboard();

    return (
        <div
            onClick={() => copy(textToCopy)}
            className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-lg bg-slate-200 hover:bg-slate-300 transition"
        >
            <MdOutlineLibraryBooks className="text-lg text-gray-600" />
        </div>
    );
};

export default CopyButton;