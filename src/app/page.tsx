"use client"

import { Button } from "@heroui/react";
import { MdArrowBackIosNew } from "react-icons/md";

export default function Home() {
  return (
    <div dir="ltr" className="flex gap-6">
      <img src="/images/global/effective.png" alt="header" className="w-[440px]" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="font-[Exo_2] text-5xl font-bold leading-13 text-gray-800">
            Build the <p className="text-sky-600 animate-bounce inline-flex" style={{animationDuration: "2000ms"}}>مهارت ها</p> <br /> your <p className="text-orange-600 animate-shimmer inline-flex" style={{animationDuration: "4000ms", animationDirection: "alternate"}}>teams</p> need
          </div>
          <p className="leading-8 text-gray-600">
            With our learning platform, your team gains access to a curated
            collection of books, specialized resources, and trusted courses —
            helping them grow faster, make smarter decisions, and deliver better
            results.
            Click on any feature to explore more.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button color="primary" endContent={<MdArrowBackIosNew className="text-sm rotate-180" />}>
            همه کتاب ها
          </Button>
          <Button variant="flat" endContent={<MdArrowBackIosNew className="text-sm rotate-180" />}>
            امتحانش رایگانه
          </Button>
        </div>
      </div>
    </div>
  );
}