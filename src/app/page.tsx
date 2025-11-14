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
  MdHelpOutline,
  MdOutlineCheckCircle,
} from "react-icons/md";

export default function HomePage() {
  return (
    <main dir="rtl" lang="fa" className="px-4 md:px-12 py-12 text-gray-800">
      <Hero />
      <HowItWorks />
      <Features />
      <SampleFlashcard />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
      <div className="flex-1 md:w-1/2 text-right">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-xs bg-white/80 px-3 py-1 rounded-full shadow-sm">منبع: O'Reilly</span>
          <span className="text-xs text-gray-500">خلاصه‌سازی فصل‌به‌فصل • فلش‌کارت • تست</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          یادگیری عمیق از کتاب‌های فنی معتبر
          <br /> با <span className="text-sky-600">فلش‌کارت‌های فصل‌به‌فصل</span> و خلاصه‌های عملی — به فارسی
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          ما با کمک هوش‌مصنوعی مهم‌ترین ایده‌ها و مثال‌های کتاب‌های O'Reilly را به زبانِ ساده استخراج می‌کنیم؛ خلاصه‌ها، کارت‌های مرور، و سوال‌های تمرینی — طوری که هم سریع یاد بگیرید و هم عمیق.
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

        <div className="mt-6 flex gap-3 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <MdOutlineCheckCircle />
            <span>خلاصه‌های قابل استناد و لینک به منبع</span>
          </div>
        </div>
      </div>

      <div className="md:w-96 w-full">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/global/effective.png"
            alt="تصویر آموزشی"
            loading="lazy"
            className="w-full h-64 object-cover scale-x-[-1]"
          />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "فصل‌بندی و استخراج",
      desc: "هر فصل ورودی خوانده می‌شود و عناصری مثل تیترها، مثال‌ها و نکات کلیدی جدا می‌شوند.",
      Icon: MdMenuBook,
    },
    {
      title: "خلاصه‌سازیِ چندمرحله‌ای",
      desc: "مدل زبانی متن را به خلاصه‌های مرتّب، توضیحی و قابل فهم برای فارسی‌زبانان تبدیل می‌کند.",
      Icon: MdOutlineAutoAwesome,
    },
    {
      title: "تولید فلش‌کارت و سوال",
      desc: "برای هر بخش کارت مرور، سوالِ درکِ مطلب و نکتهٔ عملی تولید می‌شود تا یادگیری فعال شود.",
      Icon: MdFlashOn,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-12">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-right">چطور کار می‌کند</h3>
          <p className="text-gray-600 mt-2 text-right">سه مرحلهٔ شفاف تا یادگیری عمیق — قابل بررسی و ویرایش توسط تیم محتوا.</p>
        </div>
        <div className="text-sm text-gray-500">قابل اتوماسیون، قابلِ اعتبارسنجی، و مخصوصِ فارسی‌زبانان</div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((s) => (
          <div key={s.title} className="p-6 bg-white rounded-2xl shadow-sm text-right hover:scale-[1.02] transition-transform">
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
      desc: "نکات کلیدی، تعاریف و مثال‌ها برای مرورِ سریعِ هر فصل.",
      Icon: MdMenuBook,
    },
    {
      title: "پرسش‌های تستی و تمرین",
      desc: "سوالات چندسطحی برای سنجش و تثبیت یادگیری.",
      Icon: MdSchool,
    },
    {
      title: "مسیرِ تیمی و گزارش پیشرفت",
      desc: "داشبورد تیمی برای رهبران تا پیشرفت اعضا را ببینند.",
      Icon: MdGroup,
    },
    {
      title: "دروس کوتاه و کاربردی",
      desc: "هر کارت طوری طراحی شده که در ۵ تا ۱۰ دقیقه قابل مرور باشد.",
      Icon: MdAccessTime,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-12">
      <h3 className="text-2xl font-semibold text-right">ویژگی‌ها</h3>
      <p className="text-gray-600 mt-2 text-right">رویکردی عملی، قابلِ اجرا و زمان‌پسند برای مطالعهٔ کتاب‌های فنی.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="flex gap-4 items-start p-5 rounded-2xl shadow-sm bg-white text-right hover:shadow-md transition-shadow">
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

  const cardStyle = {
    width: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.7s',
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
  };

  const sideStyle = {
    backfaceVisibility: 'hidden'
  };

  return (
    <section className="max-w-4xl mx-auto mt-12 text-right">
      <h3 className="text-2xl font-semibold">نمونه فلش‌کارت</h3>
      <p className="text-gray-600 mt-2">روی کارت کلیک کن تا جواب رو ببینی — این سبک یادگیری باعث میشه اطلاعات بهتر تثبیت بشن.</p>

      <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-2/3 perspective" style={{ perspective: 1000 }}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setFlipped((p) => !p)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setFlipped(p => !p); }}
            className="cursor-pointer"
            style={cardStyle}
          >
            {/* front */}
            <div className="p-6 rounded-2xl bg-white shadow-lg text-right" style={{ ...sideStyle }}>
              <h4 className="font-semibold text-lg">سوال: تفاوت بین Monolith و Microservices چیست؟</h4>
              <p className="mt-3 text-sm text-gray-600">کوتاه توضیح بده و یک مثال عملی بزن.</p>
            </div>

            {/* back */}
            <div className="p-6 rounded-2xl bg-white shadow-lg text-right absolute left-0 right-0" style={{ transform: 'rotateY(180deg)', ...sideStyle }}>
              <h4 className="font-semibold text-lg">پاسخ (خلاصه)</h4>
              <ul className="mt-2 text-sm text-gray-600 list-disc pr-5 space-y-1">
                <li>مونو‌لیت: ساده، استقرار یکجا؛ مناسب پروژه‌های کوچک.</li>
                <li>میکروسرویس: هر سرویس مستقل، مقیاس‌پذیری و انعطاف بیشتر اما پیچیدگی زیرساختی.</li>
                <li>مثال: استارتاپی که سریع توسعه می‌دهد معمولاً با مونو‌لیت شروع می‌کند و سپس بخش‌هایی را سرویس‌بندی می‌کند.</li>
              </ul>
            </div>
          </div>
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

      <p className="mt-4 text-xs text-gray-500">(برای دیدنِ جواب کارت را کلیک کنید)</p>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: 'آیا محتوای کامل کتاب‌ها در سایت قرار می‌گیرد؟',
      a: 'خیر. ما خلاصه‌ها، فلش‌کارت‌ها و تحلیل‌های آموزشی تولید می‌کنیم و به منبع اصلی کتاب لینک می‌دهیم. برای استفادهٔ کامل از کتاب لطفاً نسخهٔ اصلی را از ناشر تهیه کنید.'
    },
    {
      q: 'آیا این خلاصه‌ها قابل اعتماد هستند؟',
      a: 'بله — خلاصه‌ها به صورت خودکار تولید می‌شوند و سپس توسط تیمِ محتوایی بررسی و در صورت نیاز ویرایش می‌شوند تا از دقت و کیفیت اطمینان حاصل شود.'
    },
    {
      q: 'چطور می‌توانم کتابی را درخواست کنم؟',
      a: 'در بخش جستجو یا صفحهٔ پیشنهاد کتاب، نام کتاب یا لینک O\'Reilly را وارد کنید. تیم ما بررسی و در صورت امکان به فهرست اضافه می‌کند.'
    }
  ];

  return (
    <section className="max-w-6xl mx-auto mt-12 text-right">
      <h3 className="text-2xl font-semibold">سوالات متداول</h3>
      <p className="text-gray-600 mt-2">پاسخِ سوالات رایج دربارهٔ نحوهٔ کار، حقوق نشر و استفاده.</p>

      <div className="mt-6 space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="p-4 bg-white rounded-2xl shadow-sm">
            <summary className="cursor-pointer font-semibold">{f.q}</summary>
            <div className="mt-3 text-sm text-gray-600">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="max-w-6xl mx-auto mt-12 text-right">
      <div className="p-8 rounded-2xl text-white flex flex-col md:flex-row items-center gap-6" style={{ background: 'linear-gradient(90deg,#0ea5e9,#fb923c)' }}>
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
