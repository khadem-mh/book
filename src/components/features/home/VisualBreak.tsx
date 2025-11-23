"use client";

import { Button } from "@heroui/react";
import { MdArrowForwardIos } from "react-icons/md";

const VisualBreak: React.FC = () => {
  return (
    <section className="border-5 border-dashed border-black/30 rounded-4xl px-6 py-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6
                        bg-black/80 text-white transition-colors duration-300 hover:bg-white group hover:text-black">

      <div className="transition-colors duration-300 group-hover:text-black">
        {/* عنوان بزرگ انگلیسی */}
        <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
          <p className="
            !text-left leading-17 
            bg-gradient-to-r from-slate-100 via-slate-400 to-slate-100 
            bg-clip-text text-transparent text-[55px] mt-3
            transition-all duration-300
            group-hover:from-black/10 group-hover:via-black/50 group-hover:to-black/10
          ">
            You coded? <span className="text-4xl">Cool… but first, get it</span>
          </p>
        </h1>

        {/* عنوان فرعی */}
        <h4 className="text-3xl md:text-4xl mt-6 font-bold mb-4 transition-colors duration-300 group-hover:text-black">
          اینجا برنامه‌نویسی یاد نمی‌گیری — مهارت واقعی مهندسی نرم‌افزار
        </h4>

        {/* متن توضیحی عامیانه و طعنه‌آمیز */}
        <p className="text-gray-300 mb-4 leading-8 transition-colors duration-300 group-hover:text-gray-700">
          ممکنه هزاران ساعت با فریم‌ورک‌ها و زبان‌های برنامه نویسی سر و کله زده باشی، پروژه‌ها لانچ کرده باشی و حتی <span className="text-red-500">مدرک دانشگاهی</span> گرفته باشی… ولی واقعاً می‌دونی چرا این کدها اینجوری نوشته می‌شن؟ معماری، طراحی سیستم و اصول نرم‌افزار رو فهمیدی یا نه؟<br /><br />
          <span className="text-red-500">اینجا خبری از درس‌های خشک و مفاهیم کهنهٔ دانشگاه یا کتابای سنگین نیست.</span> <span className="text-orange-300">با فلش‌کارت‌های هوشمند AI، مفاهیم رو صفحه‌به‌صفحه و فصل‌به‌فصل مرور کن، طراحی و معماری رو ببین، و مهارتت رو از صرفاً کدنویسی به <strong>درک واقعی مهندسی نرم‌افزار</strong> برسون.</span>
        </p>

        {/* دکمه */}
        <Button
          className="bg-white text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white"
          variant="flat"
          endContent={<MdArrowForwardIos className="text-sm scale-x-[-1]" />}
        >
          شروع مسیر واقعی
        </Button>
      </div>

      {/* تصویر */}
      <div>
        <img
          src="/images/home/raven.png"
          alt="O'Reilly Awards"
          className="w-[443px] scale-x-[-1]"
        />
      </div>

    </section>
  );
};

export default VisualBreak;
