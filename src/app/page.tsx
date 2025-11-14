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
  MdHeadset,
  MdArticle,
  MdAutoAwesomeMosaic,
} from "react-icons/md";

export default function HomePage() {
  return (
    <main dir="rtl" lang="fa" className="px-4 md:px-12 py-12 text-gray-800">
      <Hero />
      <PlatformHighlights />
      <HowItWorks />
      <WhyDifferent />
      <Features />
      <SampleFlashcard />
      <QuestionBox />
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
          <span className="text-xs text-gray-500">خلاصه‌های ساختاریافته • فلش‌کارت‌های آموزشی • صوت AI</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Build the skills your teams need —
          <br /> یادگیری عمیق از کتاب‌های فنی معتبر با <span className="text-sky-600">فلش‌کارت‌های فصل‌به‌فصل</span>
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          ما هر کتاب را صفحه‌به‌صفحه و فصل‌به‌فصل تحلیل می‌کنیم: تعاریف، مثال‌ها، اصطلاحات و تمرین‌ها. همراه با فایل صوتیِ هوش‌مصنوعی و پرامپت‌های قابل کپی برای هر کارت تا اگر نیاز بود AI برایتان توضیح بیشتری بدهد.
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
            <span>تضمینِ کارآمدیِ یادگیری و به‌روزرسانیِ نسخه‌های جدید کتاب‌ها</span>
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

function PlatformHighlights(){
  const items = [
    "Trusted content",
    "Live online events",
    "Courses",
    "Interactive learning",
    "Certification prep",
    "O’Reilly Answers",
    "AI Academy",
    "Assignments",
    "Insights Dashboard",
  ];

  return (
    <section className="max-w-6xl mx-auto mt-12">
      <div className="rounded-2xl p-6 bg-gradient-to-r from-slate-50 to-white shadow-sm">
        <h4 className="text-xl font-semibold text-right">ویژگی‌های پلتفرم (مورد اعتماد سازمان‌ها)</h4>
        <p className="text-gray-600 text-right mt-2">یک مجموعهٔ کامل از منابع که تیم‌ها را در مسیر نتیجه‌محور توسعه می‌دهد. روی هر آیتم کلیک کنید تا توضیحات بیشتر ببینید.</p>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {items.map((it) => (
            <div key={it} className="p-3 bg-white rounded-lg shadow-sm text-right flex items-center gap-3">
              <MdArticle className="text-2xl" />
              <div>
                <div className="font-semibold">{it}</div>
                <div className="text-xs text-gray-500">توضیح کوتاه درباره {it}</div>
              </div>
            </div>
          ))}
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
      desc: "مدل زبانی متن را به خلاصه‌های مرتب، توضیحی و قابل فهم برای فارسی‌زبانان تبدیل می‌کند.",
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

function WhyDifferent(){
  return (
    <section className="max-w-6xl mx-auto mt-12 text-right">
      <h3 className="text-2xl font-semibold">چرا ما متفاوتیم</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <h4 className="font-semibold">پوشش کامل، ساخت‌یافته و عملی</h4>
          <p className="mt-2 text-gray-600">ما به‌صورت درس‌به‌درس، فصل‌به‌فصل و صفحه‌به‌صفحه مفاهیم، اصطلاحات و مثال‌های کتاب را تحلیل و در قالب کارت‌های آموزشی، تمرین و سوال ارائه می‌کنیم — با تمرکز روی فهمِ کاربردی نه فقط خلاصهٔ سطحی.</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <h4 className="font-semibold">صوتِ AI و پرامپت برای هر کارت</h4>
          <p className="mt-2 text-gray-600">هر کارت همراه با نسخهٔ صوتی تولیدشده توسط AI و پرامپتِ آماده برای ارسال به مدلِ زبانی قرار می‌گیرد تا اگر کاربر نیاز به توضیحات بیشتر داشت، به‌راحتی از آن استفاده کند.</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <h4 className="font-semibold">پرسش‌سنجی و ارزیابی هوشمند</h4>
          <p className="mt-2 text-gray-600">سوال‌ها و تمرین‌ها به‌صورت خودکار تولید می‌شوند و می‌توانید در question-box مهارت خود را بسنجید؛ تمام سوالات توسط AI تولید و براساس سطح شما تنظیم می‌شوند.</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <h4 className="font-semibold">به‌روز بودنِ نسخه‌ها</h4>
          <p className="mt-2 text-gray-600">ما نسخهٔ جدید کتاب‌ها را دنبال می‌کنیم و آخرین ویرایش‌های معتبر را در اولویت انتشار قرار می‌دهیم؛ در صورت انتشار نسخهٔ جدید، محتوای سایت به‌سرعت بروزرسانی می‌شود.</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500">توجه: هرگونه نشر متن کاملِ کتاب مستلزم قرارداد و مجوز ناشر است. محتوای آموزشی ما در قالب تحلیل، توضیح و تمرین ارائه می‌شود و درصورت وجود توافقنامه‌های قانونی با ناشر، می‌توانیم سطوح بیشتری از محتوا را منتشر کنیم.</p>
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

  return (
    <section className="max-w-4xl mx-auto mt-12 text-right">
      <h3 className="text-2xl font-semibold">نمونه فلش‌کارت</h3>
      <p className="text-gray-600 mt-2">روی کارت کلیک کن تا جواب رو ببینی — همچنان محتوای سوال و جواب در جای خودش باقی می‌ماند ولی با انیمیشن نرم جایگزین می‌شود.</p>

      <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-2/3">
          <div className="relative p-6 rounded-2xl bg-white shadow-lg overflow-hidden" style={{ minHeight: 160 }}>
            {/* front */}
            <div className={`transition-all duration-400 ease-in-out ${flipped ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
              <h4 className="font-semibold text-lg">سوال: تفاوت بین Monolith و Microservices چیست؟</h4>
              <p className="mt-3 text-sm text-gray-600">کوتاه توضیح بده و یک مثال عملی بزن.</p>
            </div>

            {/* back */}
            <div className={`absolute inset-0 transition-all duration-400 ease-in-out ${flipped ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <h4 className="font-semibold text-lg">پاسخ (خلاصه)</h4>
              <ul className="mt-2 text-sm text-gray-600 list-disc pr-5 space-y-1">
                <li>مونو‌لیت: ساده، استقرار یکجا؛ مناسب پروژه‌های کوچک.</li>
                <li>میکروسرویس: هر سرویس مستقل، مقیاس‌پذیری و انعطاف بیشتر اما پیچیدگی زیرساختی.</li>
                <li>مثال: استارتاپی که سریع توسعه می‌دهد معمولاً با مونو‌لیت شروع می‌کند و سپس بخش‌هایی را سرویس‌بندی می‌کند.</li>
              </ul>

              <div className="mt-4 flex items-center gap-3">
                <MdHeadset />
                <button className="text-sm underline">پخش صوتی AI</button>
                <span className="text-xs text-gray-500 mr-3">|</span>
                <button className="text-sm underline">کپی پرامپت</button>
              </div>
            </div>

            <button
              onClick={() => setFlipped((p) => !p)}
              className="absolute bottom-4 left-4 text-sm px-3 py-1 rounded-md bg-slate-100"
            >
              {flipped ? 'دیدن سوال' : 'دیدن پاسخ'}
            </button>
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

      <p className="mt-4 text-xs text-gray-500">(برای دیدنِ جواب روی دکمهٔ "دیدن پاسخ" کلیک کنید)</p>
    </section>
  );
}

function QuestionBox(){
  const [q, setQ] = useState('');
  const [ans, setAns] = useState(null);

  function ask(){
    // mock: در نسخهٔ واقعی به API هوش‌مصنوعی متصل می‌شود
    setAns('پاسخ هوش‌مصنوعی (نمونه): خلاصه‌ای از نکات کلیدی و مثال‌ها...');
  }

  return (
    <section className="max-w-4xl mx-auto mt-12 text-right">
      <h3 className="text-2xl font-semibold">Question Box — تست و پرسش</h3>
      <p className="text-gray-600 mt-2">یک سوال دربارهٔ مطلب بپرسید؛ سیستم به‌صورت هوشمند بر اساس محتوای کتاب پاسخ می‌دهد (نسخهٔ آزمایشی).</p>

      <div className="mt-4 flex gap-3">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="سوال خود را اینجا بنویسید..." className="flex-1 px-3 py-2 rounded-md border" />
        <Button color="primary" onClick={ask}>پرسش</Button>
      </div>

      {ans && (
        <div className="mt-4 p-4 bg-white rounded-2xl shadow-sm">
          <div className="font-semibold">پاسخ هوش‌مصنوعی</div>
          <div className="mt-2 text-sm text-gray-700">{ans}</div>
        </div>
      )}
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: 'آیا تمام متن کتاب روی سایت قرار می‌گیرد؟',
      a: 'هرگونه نشر متن کاملِ کتاب منوط به قرارداد و مجوز با ناشر است. آنچه ما ارائه می‌کنیم تحلیلِ آموزشی، توضیحات صفحه‌به‌صفحه، فلش‌کارت‌ها، صوت AI و محتوای تعاملی است که برای یادگیری عمیق طراحی شده‌اند.'
    },
    {
      q: 'آیا خلاصه‌ها قابل اعتماد هستند؟',
      a: 'بله — خلاصه‌ها و مواد تحلیلی توسط مدل‌های پیشرفته تولید و سپس توسط تیم محتوایی بازبینی می‌شوند تا دقت و کیفیت حفظ شود.'
    },
    {
      q: 'چطور می‌توانم کتابی پیشنهاد دهم؟',
      a: 'در بخش جستجو یا فرم پیشنهاد کتاب، نام و لینک کتاب را وارد کنید؛ تیم ما بررسی و در صورت امکان اضافه می‌کند.'
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
          <p className="mt-2 text-white/90">همین حالا ثبت‌نام کنید و ۷ روز دسترسی آزمایشی رایگان بگیرید. وبسایت در حال توسعه است و فیچرهای بیشتر به‌زودی اضافه خواهند شد.</p>
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
