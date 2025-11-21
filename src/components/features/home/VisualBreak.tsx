"use client";

import { Button } from "@heroui/react";
import { MdArrowForwardIos } from "react-icons/md";

const VisualBreak: React.FC = () => {
  return (
    <section className="border-5 border-dashed border-black/30 rounded-4xl px-6 py-12 max-w-7xl mx-auto mt-12 flex flex-col md:flex-row items-center gap-6
                        bg-black/80 text-white transition-colors duration-300 hover:bg-white group hover:text-black">

      <div className="transition-colors duration-300 group-hover:text-black">
        <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
          <p className="
            !text-left leading-17 
            bg-gradient-to-r from-slate-100 via-slate-400 to-slate-100 
            bg-clip-text text-transparent text-[70px] mt-3
            transition-all duration-300
            group-hover:from-black/10 group-hover:via-black/50 group-hover:to-black/10
          ">
            Organizations <span className="text-4xl">achieve great success</span>
          </p>
        </h1>

        <h4 className="text-3xl md:text-4xl mt-6 font-bold mb-4 transition-colors duration-300 group-hover:text-black">
          سازمان‌ها به موفقیت‌های بزرگ دست پیدا می‌کنند
        </h4>

        <p className="text-gray-300 mb-4 leading-8 transition-colors duration-300 group-hover:text-gray-700">
          تیم‌های هوشمند با مسیرهای یادگیری ساختارمند و ابزارهای تعاملی ما، توانسته‌اند مهارت‌های خود را سریع‌تر توسعه دهند و در پروژه‌ها پیشرو باشند. شما هم می‌توانید با استفاده از فلش‌کارت‌ها و صوت AI، یادگیری سازمانی خود را متحول کنید.
        </p>

        <Button
          className="bg-white text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white"
          variant="flat"
          endContent={<MdArrowForwardIos className="text-sm scale-x-[-1]" />}
        >
          مشاهده نمونه‌ها
        </Button>
      </div>

      <div>
        <img
          src="/images/global/raven.png"
          alt="O'Reilly Awards"
          className="w-[443px] scale-x-[-1]"
        />
      </div>

    </section>
  );
};

export default VisualBreak;
