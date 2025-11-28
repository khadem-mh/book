"use client";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { IoMdMore } from "react-icons/io";
import { LuScrollText } from "react-icons/lu";
import { MdOutlineContentCopy, MdEdit, MdDelete, MdNoteAdd } from "react-icons/md";
import { PiFilePdfDuotone } from "react-icons/pi";
import { RiVoiceAiLine } from "react-icons/ri";
import { TbMessageReport } from "react-icons/tb";

type FlashCardMenuProps = {
    onNew?: () => void;
    onCopy?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
};

const FlashCardMenu: React.FC<FlashCardMenuProps> = ({
    onNew = () => { },
    onCopy = () => { },
    onEdit = () => { },
    onDelete = () => { },
}) => {
    const iconClass = "text-[19px]";

    return (
        <Dropdown backdrop="opaque" placement="top">
            <DropdownTrigger>
                <div className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-lg bg-slate-100 hover:bg-slate-200 transition-all">
                    <IoMdMore className="text-[20px] text-gray-600" />
                </div>
            </DropdownTrigger>

            <DropdownMenu aria-label="Flashcard menu" variant="faded">
                <DropdownItem
                    key="new"
                    startContent={<TbMessageReport className={iconClass} />}
                    onClick={onNew}
                >
                    گزارش مشکل
                </DropdownItem>
                <DropdownItem
                    key="new"
                    startContent={<PiFilePdfDuotone className={iconClass} />}
                    onClick={onNew}
                >
                    خروجی PDF
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default FlashCardMenu;