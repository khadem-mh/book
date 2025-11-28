"use client";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { IoMdMore } from "react-icons/io";
import { MdOutlineContentCopy, MdEdit, MdDelete, MdNoteAdd } from "react-icons/md";

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
    const iconClass = "text-[18px]";

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
                    startContent={<MdNoteAdd className={iconClass} />}
                    onClick={onNew}
                >
                    ایجاد مورد جدید
                </DropdownItem>

                <DropdownItem
                    key="copy"
                    startContent={<MdOutlineContentCopy className={iconClass} />}
                    onClick={onCopy}
                >
                    کپی
                </DropdownItem>

                <DropdownItem
                    key="edit"
                    startContent={<MdEdit className={iconClass} />}
                    onClick={onEdit}
                >
                    ویرایش
                </DropdownItem>

                <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    startContent={<MdDelete className={`${iconClass} text-danger`} />}
                    onClick={onDelete}
                >
                    حذف
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default FlashCardMenu;