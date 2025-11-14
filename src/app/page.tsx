"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import {
  MdMenuBook,
  MdSchool,
  MdGroup,
  MdAccessTime,
  MdOutlineAutoAwesome,
  MdFlashOn,
  MdArrowForwardIos,
  MdOutlineSearch,
} from "react-icons/md";

export default function HomePage() {
  return (
    <main dir="rtl" lang="fa" className="px-4 md:px-12 py-12 bg-gray-50 text-gray-800">
      <Hero />
      <HowItWorks />
      <Features />
      <SampleFlashcard />
      <CTA />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
      <div className="flex-1 md:w-1/2 text-right">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          یادگیری سریع از کتاب‌های معتبرِ <span className="text-sky-600">O'Reilly</span>
          <br /> با فلش‌کارت‌های فصل‌به‌فصل و خلاصه‌شده — به فارسی
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          ما با کمک هوش‌مصنوعی تمام فصل‌ها و بخش‌های کتاب‌های فنی (منبع: O'Reilly) را تبدیل به فلش‌کارت‌های آموزشیِ عملی، پرسش‌سنجی و خلاصه‌‌های قابل فهم می‌کنیم — طوری که فارسی‌زبان‌ها سریع‌تر یاد بگیرند و عمقِ مفاهیم را از دست ندهند.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <Button color="primary" endContent={<MdArrowForwardIos className="text-sm" />}>
            همه کتاب‌ها
          </Button>

          <Button variant="flat" className="border" endContent={<MdOutlineSearch className="text-sm" />}>
            جستجوی کتاب
          </Button>

          <Button variant="ghost" className="ml-auto">ورود / ثبت‌نام</Button>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          <span className="inline-block bg-white px-3 py-1 rounded-full shadow-sm">منبع: O'Reilly</span>
          <span className="mx-3">•</span>
          <span>خلاصه‌سازی فصل‌به‌فصل</span>
          <span className="mx-3">•</span>
          <span>فلش‌کارت، تست و تمرین</span>
        </div>
      </div>

      <div className="md:w-96 w-full">
        <img
          src="/images/global/effective.png"
          alt="تصویر آموزشی"
          loading="lazy"
          className="w-full h-full object-contain scale-x-[-1] rounded-xl shadow-md"
        />
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "فصل‌بندی و استخراج",
      desc: "هر فصل از کتاب خوانده و بخش‌های کلیدی استخراج می‌شود (عنوان‌ها، نکات، مثال‌ها).",
      Icon: MdMenuBook,
    },
    {
      title: "خلاصه‌سازی هوشمند",
      desc: "مدل‌های زبانی چندمرحله‌ای متن را به خلاصه‌های قابل فهم و کوتاه تبدیل می‌کنند.",
      Icon: MdOutlineAutoAwesome,
    },
    {
      title: "فلش‌کارت و سوال‌سازی",
      desc: "برای هر بخش فلش‌کارت، تست و نکته عملی تولید می‌شود تا یادگیری فعال رخ دهد.",
      Icon: MdFlashOn,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-12">
      <h3 className="text-2xl font-semibold text-right">چطور کار می‌کند</h3>
      <p className="text-gray-600 mt-2 text-right">سه مرحله ساده تا فهم عمیق — همه چیز اتوماتیک و قابل بررسی توسط انسان.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((s) => (
          <div key={s.title} className="p-5 bg-white rounded-2xl shadow-sm text-right">
            <div className="w-12 h-12 rounded-lg bg-slate-100 grid place-items-center text-2xl">
              <s.Icon />
            </div>
            <h4 className="mt-3 font-semibold">{s.title}</h4>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "فلش‌کارت‌های فصل‌به‌فصل",
      desc: "خلاصه‌ای از هر فصل با نکات کلیدی و کارت‌های مرور سریع.",
      Icon: MdMenuBook,
    },
    {
      title: "پرسش‌های تستی و تمرین",
      desc: "سوال‌های در سطوح مختلف برای محک زدن درک شما و مرور فعال.",
      Icon: MdSchool,
    },
    {
      title: "پشتیبانی تیمی و گروهی",
      desc: "مسیرهای یادگیری گروهی و گزارش‌گیریِ پیشرفت برای تیم‌ها.",
      Icon: MdGroup,
    },
    {
      title: "استفاده کارآمد از زمان",
      desc: "درس‌های کوتاه و قابل‌اجرا برای یادگیری در زمان‌های آزاد.",
      Icon: MdAccessTime,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-12">
      <h3 className="text-2xl font-semibold text-right">ویژگی‌ها</h3>
      <p className="text-gray-600 mt-2 text-right">یکباره از محتوای کتاب به آموزشِ کاربردی برسید — نه ترجمه خشک.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="flex gap-4 items-start p-5 rounded-2xl shadow-sm bg-white text-right">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-100 grid place-items-center text-2xl">
              <f.Icon />
            </div>
            <div>
              <h4 className="font-semibold">{f.title}</h4>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SampleFlashcard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="max-w-4xl mx-auto mt-12 text-right">
      <h3 className="text-2xl font-semibold">نمونه فلش‌کارت</h3>
      <p className="text-gray-600 mt-2">روی کارت کلیک کن تا جواب رو ببینی — این سبک یادگیری باعث میشه اطلاعات زودتر در حافظه بمانند.</p>

      <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
        <div
          onClick={() => setFlipped((p) => !p)}
          role="button"
          tabIndex={0}
          className={`cursor-pointer w-full md:w-2/3 p-6 rounded-2xl shadow-lg bg-white transition-transform transform ${flipped ? "rotate-y-180" : ""}`}
          style={{ perspective: 800 }}
        >
          {!flipped ? (
            <div className="text-right">
              <h4 className="font-semibold text-lg">سوال: تفاوت بین Monolith و Microservices چیست؟</h4>
              <p className="mt-3 text-sm text-gray-600">کوتاه توضیح بده و یک مثال عملی بزن.</p>
            </div>
          ) : (
            <div className="text-right">
              <h4 className="font-semibold text-lg">پاسخ (خلاصه)</h4>
              <ul className="mt-2 text-sm text-gray-600 list-disc pr-5 space-y-1">
                <li>مونو‌لیت: ساده، استقرار یکجا؛ مناسب پروژه‌های کوچک.</li>
                <li>میکروسرویس: هر سرویس مستقل، مقیاس‌پذیری و انعطاف بیشتر اما پیچیدگی زیرساختی.</li>
                <li>مثال: استارتاپی که سریع توسعه می‌دهد معمولاً با مونو‌لیت شروع می‌کند، سپس بخش‌هایی را سرویس‌بندی می‌کند.</li>
              </ul>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/3">
          <div className="p-4 bg-white rounded-2xl shadow-sm text-sm">
            <div className="flex items-center gap-2">
              <MdOutlineSearch />
              <div>
                <div className="font-semibold">عملیات روی کارت</div>
                <div className="text-gray-500 text-xs">ذخیره — نشانه‌گذاری — تکرار</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="px-3 py-2 rounded-md border">ذخیره</button>
              <button className="px-3 py-2 rounded-md border">علامت‌گذاری</button>
              <button className="px-3 py-2 rounded-md border">تمرین شبیه‌سازی</button>
              <button className="px-3 py-2 rounded-md border">اشتراک‌گذاری</button>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-500">(برای دیدنِ جواب روی کارت کلیک کنید)</p>
    </section>
  );
}

function CTA() {
  return (
    <section className="max-w-6xl mx-auto mt-12 text-right">
      <div className="p-8 bg-gradient-to-r from-sky-600 to-orange-400 rounded-2xl text-white flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h4 className="text-2xl font-semibold">شروع کنید — اولین کتاب را انتخاب کنید</h4>
          <p className="mt-2 text-white/90">همین حالا ثبت‌نام کنید و ۷ روز دسترسی آزمایشی رایگان بگیرید.</p>
        </div>
        <div>
          <Button color="primary">شروع رایگان</Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="max-w-6xl mx-auto mt-12 text-right text-sm text-gray-500">
      <div className="py-8 border-t">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} یادگیری از O'Reilly — خلاصه و فلش‌کارت</div>
          <div className="flex items-center gap-4">
            <a className="underline">حریم خصوصی</a>
            <a className="underline">قوانین استفاده</a>
            <a className="underline">تماس با ما</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
