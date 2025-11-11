"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaBook, FaChalkboardTeacher, FaUsers, FaClock } from "react-icons/fa";

export default function HeroToggle() {
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setIsEnglish((p) => !p), 10000);
    return () => clearInterval(interval);
  }, []);

  // حالا فقط همون section جهت و زبان داره — نه کل داکیومنت
  const sectionDir = isEnglish ? "ltr" : "rtl";
  const sectionLang = isEnglish ? "en" : "fa";

  return (
    <section dir={sectionDir} lang={sectionLang} className="px-4 md:px-12">
      <div
        className={`flex flex-col md:flex-row gap-6 transition-all duration-700 ${isEnglish ? "md:flex-row" : "md:flex-row-reverse"
          }`}
      >
        <img
          src="/images/global/effective.png"
          alt="header"
          className="w-full md:w-[440px] object-contain"
        />

        <div className={`flex flex-col gap-6 w-full ${isEnglish ? "text-left" : "text-right"}`}>
          {/* ====== TITLE ====== */}
          <div className="relative min-h-[120px] leading-relaxed">
            <h1 className="font-[Exo_2] text-5xl font-bold text-gray-800 leading-tight">
              {/* English */}
              <span
                aria-hidden={!isEnglish}
                className={`absolute left-0 right-0 top-0 w-full transform transition-all duration-700 ease-out ${isEnglish
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
                style={{ lineHeight: "1.2" }}
              >
                Build the{" "}
                <p className="text-sky-600 inline-flex animate-bounce">skills</p>{" "}
                <br /> your{" "}
                <p className="text-orange-600 inline-flex animate-pulse">teams</p>{" "}
                need
              </span>

              {/* Persian */}
              <span
                aria-hidden={isEnglish}
                className={`absolute left-0 right-0 top-0 w-full transform transition-all duration-700 ease-out ${!isEnglish
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
                style={{ lineHeight: "1.4" }}
              >
                بسازید{" "}
                <p className="text-sky-600 inline-flex animate-bounce">مهارت‌</p>{" "}
                <br /> که{" "}
                <p className="text-orange-600 inline-flex animate-pulse">تیم‌</p>{" "}
                شما نیاز دارد
              </span>
            </h1>
          </div>

          {/* ====== PARAGRAPH ====== */}
          <div className="relative min-h-[110px] leading-relaxed">
            <p
              aria-hidden={!isEnglish}
              className={`absolute left-0 right-0 top-0 w-full transition-all duration-700 ease-out text-gray-600 ${isEnglish
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              style={{ lineHeight: "1.7" }}
            >
              With our learning platform, your team gains access to a curated
              collection of books, specialized resources, and trusted courses —
              helping them grow faster, make smarter decisions, and deliver better
              results. Click on any feature to explore more.
            </p>

            <p
              aria-hidden={isEnglish}
              className={`absolute left-0 right-0 top-0 w-full transition-all duration-700 ease-out text-gray-600 ${!isEnglish
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              style={{ lineHeight: "1.9" }}
            >
              به کمک پلتفرم آموزشی ما، تیم شما به مجموعه‌ای از کتاب‌ها، منابع تخصصی و دوره‌های معتبر دسترسی پیدا می‌کند — تا سریع‌تر رشد کند، تصمیمات هوشمندانه‌تری بگیرد و نتایج بهتر تحویل دهد. برای آشنایی بیشتر روی هر قابلیت کلیک کنید.
            </p>
          </div>

          {/* ====== ACTIONS ====== */}
          <div className="flex items-center gap-4 flex-wrap">
            <Button
              color="primary"
              endContent={
                <MdArrowBackIosNew
                  className={`text-sm transition-transform duration-300 ${isEnglish ? "rotate-180" : ""}`}
                />
              }
              className="font-medium"
            >
              {isEnglish ? "All Books" : "همه کتاب‌ها"}
            </Button>

            <Button
              variant="flat"
              endContent={
                <MdArrowBackIosNew
                  className={`text-sm transition-transform duration-300 ${isEnglish ? "rotate-180" : ""}`}
                />
              }
              className="font-medium"
            >
              {isEnglish ? "Try it Free" : "امتحانش رایگانه"}
            </Button>
          </div>
        </div>
      </div>

      {/* ====== Feature Boxes (below hero) ====== */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          title={isEnglish ? "Curated Books" : "کتاب‌های منتخب"}
          desc={
            isEnglish
              ? "Hand-picked titles for fast team growth."
              : "کتاب‌های منتخب برای رشد سریع تیم."
          }
          Icon={FaBook}
          alignLeft={isEnglish}
        />
        <FeatureCard
          title={isEnglish ? "Expert Courses" : "دوره‌های تخصصی"}
          desc={
            isEnglish
              ? "Industry-led courses and practical workshops."
              : "دوره‌ها و کارگاه‌های عملی با اساتید حرفه‌ای."
          }
          Icon={FaChalkboardTeacher}
          alignLeft={isEnglish}
        />
        <FeatureCard
          title={isEnglish ? "Team Learning" : "یادگیری گروهی"}
          desc={
            isEnglish
              ? "Collaborative paths for entire teams."
              : "مسیرهای یادگیری گروهی برای کل تیم."
          }
          Icon={FaUsers}
          alignLeft={isEnglish}
        />
        <FeatureCard
          title={isEnglish ? "Time Savings" : "صرفه‌جویی در زمان"}
          desc={
            isEnglish
              ? "Short, actionable lessons your team can use now."
              : "درس‌های کوتاه و عملی که بلافاصله قابل استفاده‌اند."
          }
          Icon={FaClock}
          alignLeft={isEnglish}
        />
      </div>

      <div className="my-20" />

    </section>
  );
}

/* ---------- FeatureCard component (local) ---------- */
function FeatureCard({ title, desc, Icon, alignLeft = true }) {
  return (
    <div
      className={`flex gap-4 items-start p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 bg-white`}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-100 grid place-items-center text-2xl">
        <Icon />
      </div>

      <div className={`${alignLeft ? "text-left" : "text-right"}`}>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="mt-1 text-sm text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
