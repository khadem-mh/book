"use client";

import { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { IoMdMore } from "react-icons/io";
import { PiFilePdfDuotone } from "react-icons/pi";
import { TbMessageReport } from "react-icons/tb";
import ReportIssueModal from "./ReportIssueModal";

const FlashCardMenu = () => {
    const [isReportOpen, setIsReportOpen] = useState(false);
    const iconClass = "text-[19px]";

    return (
        <>
            <Dropdown backdrop="opaque" placement="top">
                <DropdownTrigger>
                    <div className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-lg bg-slate-100 hover:bg-slate-200 transition-all">
                        <IoMdMore className="text-[20px] text-gray-600" />
                    </div>
                </DropdownTrigger>

                <DropdownMenu aria-label="Flashcard menu" variant="faded">
                    <DropdownItem
                        key="report"
                        startContent={<TbMessageReport className={iconClass} />}
                        onClick={() => setIsReportOpen(true)}
                    >
                        گزارش مشکل
                    </DropdownItem>

                    <DropdownItem
                        key="export-pdf"
                        startContent={<PiFilePdfDuotone className={iconClass} />}
                    >
                        خروجی PDF
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <ReportIssueModal
                isOpen={isReportOpen}
                onOpenChange={(open) => setIsReportOpen(open)}
            />
        </>
    );
};

export default FlashCardMenu;
