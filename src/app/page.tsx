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
  MdOutlineCheckCircle,
  MdHeadset,
  MdArticle,
  MdAutoAwesomeMosaic,
  MdOutlineAssignmentTurnedIn,
  MdOutlineAnalytics,
  MdOutlineLibraryBooks,
  MdOutlineSmartDisplay,
  MdOutlineQuestionAnswer,
  MdOutlinePerson,
  MdArrowOutward,
} from "react-icons/md";
import { LuBookOpenText, LuScrollText } from "react-icons/lu";
import { GrUpdate } from "react-icons/gr";
import { TbBrandAmongUs, TbBrandOpenai, TbMessageCode, TbPrompt } from "react-icons/tb";
import { FaCodeBranch } from "react-icons/fa6";
import { SiOpenai } from "react-icons/si";
import { RiMusicAiLine } from "react-icons/ri";

export default function HomePage() {
  return (
    <main dir="rtl" lang="fa" className="relative px-4 md:px-12 py-12 text-gray-800">
      <BackgroundBubbles />
      <Hero />
      <HighlightsBanner />
      <WhyDifferent />
      <VisualBreak />
      <Features />
      <AudioAndPrompts />
      <SampleFlashcard />
      <QuestionBox />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

/* ---------------- decorative subtle bubbles ---------------- */
function BackgroundBubbles() {
  // چند radial-gradient نرم و کم‌رنگ برای حس مدرن پس‌زمینه
  const style = {
    backgroundImage: `radial-gradient(circle at 10% 15%, rgba(14,165,233,0.06) 0, transparent 12%),
                      radial-gradient(circle at 80% 30%, rgba(251,146,60,0.045) 0, transparent 16%),
                      radial-gradient(circle at 50% 80%, rgba(99,102,241,0.03) 0, transparent 20%)`,
    backgroundRepeat: 'no-repeat',
  };

  return <div className="absolute inset-0 -z-10" style={style} aria-hidden />;
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="text-right">
        <div className="inline-flex items-center justify-between w-full gap-3 mb-2">
          <span className="text-xs bg-gradient-to-r from-sky-100 to-white px-3 py-0.5 rounded-full shadow-sm">منبع رسمی: O'Reilly</span>
          <span className="text-xs text-gray-500">پوشش کامل کتاب‌ها — صوت AI — پرامپت‌های آماده</span>
        </div>

        <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
          <p className="!text-left leading-17 bg-gradient-to-r from-slate-100 via-gray-400 to-slate-100 bg-clip-text text-transparent text-[70px] mt-3">Build <span className="text-4xl">the skills your teams need</span></p>
          <p className="leading-15 mt-8">
            <span className="bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent">مطالعهٔ کاملِ کتاب‌های</span> حوزهٔ کامپیوتر با فلش‌کارت‌های مبتنی بر هوش مصنوعی
          </p>
        </h1>

        <p className="mt-4 text-gray-600 leading-8">
          ما کتاب‌ها را صفحه‌به‌صفحه، فصل‌به‌فصل و اصطلاح‌به‌اصطلاح پوشش می‌دهیم — تمام مفاهیم، مثال‌ها و تمرین‌ها را در یک تجربهٔ تعاملی و کاملاً فارسی‌شده ارائه می‌کنیم. دیگر نیازی به خرید PDF یا نسخهٔ فیزیکی نیست.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="bordered">ورود / ثبت‌نام</Button>

          <Button color="primary" variant="light" endContent={<MdArrowForwardIos className="text-sm scale-x-[-1]" />}>
            همه کتاب‌ها
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <Badge icon={<GrUpdate />} text="نسخه‌های به‌روز و رسمی" />
          <Badge icon={<LuScrollText />} text="پوشش صفحه‌به‌صفحه و فصل‌به‌فصل" />
          <Badge icon={<TbBrandOpenai />} text="صوت AI برای هر کارت" />
          <Badge icon={<TbPrompt />} text="پرامپت قابل کپی برای هر کارت" />
        </div>
      </div>

      <div className="relative">

        <img src="/images/global/effective.png" alt="illustration" className="w-full select-none animate-spin" style={{ animationDuration: "25000ms" }} />

        <div className="absolute -bottom-6 left-6 bg-white/50 rounded-2xl shadow-lg p-4 w-64">
          <div className="flex flex-col items-center">
            <div className="text-sm font-semibold">کتاب برجسته امروز</div>
            <div>
              <div className="text-xs text-gray-500 text-left leading-5">Fundamentals of Software Architecture — Edit in 2025</div>
              <div className="flex items-center justify-between w-full bg-slate-100 p-1 rounded-lg mt-1">
                <div className="flex items-center gap-1 cursor-pointer text-xs border rounded-lg px-2 border-slate-300">
                  <MdArrowOutward />
                  <span>مطاله</span>
                </div>
                <MdOutlineLibraryBooks className="text-lg text-gray-600 cursor-pointer hover:text-gray-900 transition" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
      <div className="w-10 h-10 rounded-lg grid place-items-center" style={{ background: 'linear-gradient(135deg, #eef2ff, #fff7ed)' }}>
        <div className="text-2xl text-sky-600">{icon}</div>
      </div>
      <div className="text-xs text-gray-700">{text}</div>
    </div>
  );
}


function HighlightsBanner() {
  return (
    <section className="max-w-7xl mx-auto mt-16 relative">
      {/* پس‌زمینه حباب‌های خیلی کم‌رنگ (اختیاری) */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-8"
            style={{
              width: `${Math.random() * 10 + 6}px`,
              height: `${Math.random() * 10 + 6}px`,
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 88%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <h3 className="text-2xl font-bold text-right mb-3">ویژگی‌های متمایز پلتفرم</h3>
      <p className="text-gray-600 text-right mb-8">
        چهار قابلیت کلیدی که تجربهٔ یادگیریِ عمیق، تعاملی و سازمانی را ممکن می‌کنند.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FeatureCard
          icon={<TbBrandAmongUs />}
          title="مربی هوش‌مصنوعی"
          desc="پاسخِ آنی و توضیحِ گام‌به‌گام برای هر بخش از کتاب — سازگار با سطح اختصاصیِ کاربر."
          note="مثل یک مربی شخصی در دسترس"
        />

        <FeatureCard
          icon={<TbMessageCode />}
          title="لاب‌های سناریویی"
          desc="تمرین‌های شبیه‌سازی‌شده برای مسائل واقعی: طراحی معماری، رفع باگ و پیاده‌سازی نمونه‌ها بدون نیاز به نصب."
          note="عملی و کاربردی — «یادگیری با دست»"
        />

        <FeatureCard
          icon={<FaCodeBranch />}
          title="مسیرها و انتساب تیمی"
          desc="ساخت و تخصیص مسیرهای آموزشی برای تیم، پیگیری پیشرفت و گزارش‌های دقیق برای رهبران."
          note="مدیریت یادگیری سازمانی"
        />

        <FeatureCard
          icon={<SiOpenai />}
          title="کتابخانهٔ پرامپت‌های تخصصی"
          desc="پرامپت‌های آماده و بهینه‌شده برای هر کارت — کپی کن، پرس و پاسخ بگیر، یا برای توضیح عمیق‌تر استفاده کن."
          note="ابزارِ کمکی برای تعامل بهتر با AI"
        />
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, note }) {
  return (
    <div className="flex flex-col p-6 rounded-3xl shadow-lg bg-white transition-transform hover:scale-105 relative overflow-hidden">
      {/* هاله نورانی پشت آیکون */}
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-tr from-sky-200 to-orange-200 opacity-20 animate-pulse pointer-events-none"></div>

      <div className="flex flex-col items-end z-10 relative">
        <div className="flex items-center w-full gap-3 mb-4">
          <div className="w-14 h-14 rounded-xl grid place-items-center text-4xl bg-gradient-to-tr from-sky-100 to-white text-sky-600 shadow-inner">
            {icon}
          </div>
          {note && <div className="text-sm text-gray-400">{note}</div>}
        </div>
        <div className="text-right">
          <div className="font-bold text-lg text-gray-800">{title}</div>
          <div className="text-sm text-gray-500 mt-1">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function WhyDifferent() {
  return (
    <section className="max-w-7xl mx-auto mt-24 text-right relative">
      {/* Title + background bubbles */}
      <div className="relative inline-block mb-6">
        {/* دایره‌های بزرگ و محو پشت عنوان */}
        <div className="absolute -top-2 left-24 w-96 h-96 rounded-full bg-slate-200 blur-[55px] -z-10"></div>

        <h3 className="text-2xl font-semibold relative z-10">چرا ما متفاوتیم</h3>
        <p className="mt-1 text-sm relative z-10 text-gray-950">
          تحلیل عمیق، پوشش کامل و تجربهٔ یادگیریِ قابل اتکا برای فارسی‌زبانان.
        </p>
      </div>

      <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardWithIcon
          icon={<LuBookOpenText />}
          title="پوشش کامل کتاب"
          desc="هر صفحه، هر فصل، هر اصطلاح — تمام محتوا به‌صورت ساختاریافته پوشش داده می‌شود."
        />
        <CardWithIcon
          icon={<RiMusicAiLine />}
          title="صوت AI برای هر کارت"
          desc="گوش دهید در محل کار یا مسیر؛ صوت اختصاصی با صدای AI برای هر فلش‌کارت فراهم است."
        />
        <CardWithIcon
          icon={<TbPrompt />}
          title="پرامپت و تعامل با AI"
          desc="پرامپت‌های آماده کنار هر کارت تا بتوانید از AI بخواهید آن بخش را کاملاً برایتان شرح دهد."
        />
      </div>
    </section>
  );
}

function CardWithIcon({ icon, title, desc }) {
  return (
    <div className="relative p-5 rounded-3xl bg-transparent shadow border-2 border-dashed border-black/40 transition-transform hover:scale-105 flex gap-4 items-start overflow-hidden">
      <div className="absolute -right-8 top-8 w-28 h-28 rounded-full bg-gradient-to-tr from-white to-black -z-10 pointer-events-none"></div>

      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-xl grid place-items-center text-2xl border-3 border-dashed border-white text-white bg-black/30 shadow-inner flex-shrink-0">
          <span className="text-[26px]">{icon}</span>
        </div>

        <div className="text-right">
          <div className="font-semibold text-gray-800 text-base">{title}</div>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const features = [
    { title: 'فلش‌کارت‌های فصل‌به‌فصل', desc: 'نکات کلیدی، تعاریف و مثال‌ها برای مرورِ سریعِ هر فصل.', Icon: MdMenuBook },
    { title: 'پرسش‌های تستی و تمرین', desc: 'سوالات چندسطحی برای سنجش و تثبیت یادگیری.', Icon: MdSchool },
    { title: 'داشبورد تیمی', desc: 'گزارش‌های پیشرفت، انتساب محتوا و مسیرهای شخصی‌سازی شده.', Icon: MdOutlineAnalytics },
    { title: 'دروس کوتاه و کاربردی', desc: 'هر کارت در ۵–۱۰ دقیقه مرور می‌شود.', Icon: MdAccessTime },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-12">
      <h3 className="text-2xl font-semibold text-right">ویژگی‌های فلش کارت‌ها</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="relative flex gap-4 items-start p-6 rounded-3xl shadow-lg bg-white text-right hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* subtle background bubble behind icon */}
            <div
              className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-10 pointer-events-none blur-2xl"
              style={{ background: 'radial-gradient(circle at 30% 30%, rgba(14,165,233,0.08), transparent 40%)' }}
            ></div>

            <div className="flex-shrink-0 w-16 h-16 rounded-xl grid place-items-center text-3xl bg-gradient-to-tr from-sky-100 to-white text-sky-600 shadow-inner">
              <f.Icon />
            </div>

            <div>
              <h4 className="font-bold text-gray-800 text-lg">{f.title}</h4>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Audio and Prompts ---------------- */
function AudioAndPrompts() {
  return (
    <section className="max-w-7xl mx-auto mt-12 text-right">
      <h3 className="text-2xl font-semibold">صوتِ AI و کتابخانهٔ پرامپت‌ها</h3>
      <p className="text-gray-600 mt-2">هر فلش‌کارت همراه با فایل صوتیِ تولیدشده توسط هوش‌مصنوعی و پرامپتِ قابل‌کپی عرضه می‌شود. اگر نیاز به توضیح بیشتر بود، پرامپت را کپی کنید و مستقیماً به AI بدهید.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <MdHeadset className="text-2xl text-sky-600" />
            <div>
              <div className="font-semibold">پخش صوت AI</div>
              <div className="text-xs text-gray-500">صداهای طبیعی برای مرور در حرکت</div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <MdOutlineQuestionAnswer className="text-2xl text-sky-600" />
            <div>
              <div className="font-semibold">پرامپت‌های آماده</div>
              <div className="text-xs text-gray-500">پرامپت‌ برای توضیح بیشتر، خلاصه‌سازی یا مثال‌سازی</div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <MdOutlineSmartDisplay className="text-2xl text-sky-600" />
            <div>
              <div className="font-semibold">تطبیق محتوا با سطح شما</div>
              <div className="text-xs text-gray-500">AI سوالات را بر اساس سطح شما تنظیم می‌کند</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Visual break (big icon + callout) ---------------- */
function VisualBreak() {
  return (
    <section className="border-5 border-dashed border-black/30 rounded-4xl px-6 py-12 max-w-7xl mx-auto mt-12 flex flex-col md:flex-row items-center gap-6">

      <div>
        <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
          <p className="!text-left leading-17 bg-gradient-to-r from-slate-100 via-gray-400 to-slate-100 bg-clip-text text-transparent text-[70px] mt-3">Organizations <span className="text-4xl">achieve great success</span></p>
        </h1>
        <h4 className="text-3xl md:text-4xl mt-6 font-bold text-gray-800 mb-4">
          سازمان‌ها به موفقیت‌های بزرگ دست پیدا می‌کنند
        </h4>
        <p className="text-gray-600 mb-4 leading-8">
          تیم‌های هوشمند با مسیرهای یادگیری ساختارمند و ابزارهای تعاملی ما، توانسته‌اند مهارت‌های خود را سریع‌تر توسعه دهند و در پروژه‌ها پیشرو باشند. شما هم می‌توانید با استفاده از فلش‌کارت‌ها و صوت AI، یادگیری سازمانی خود را متحول کنید.
        </p>
        <Button className="bg-black text-white" variant="flat" endContent={<MdArrowForwardIos className="text-sm scale-x-[-1]" />}>
          مشاهده نمونه ها
        </Button>
      </div>

      <div>
        <img
          src="https://cdn.oreillystatic.com/oreilly/images/raven_awards_2024_443x442.png"
          alt="O'Reilly Awards"
          className="w-[443px] scale-x-[-1]"
        />
      </div>

    </section>
  );
}

/* ---------------- Sample flashcard (no rotation) ---------------- */
function SampleFlashcard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="max-w-4xl mx-auto mt-12 text-right">
      <h3 className="text-2xl font-semibold">نمونه فلش‌کارت</h3>
      <p className="text-gray-600 mt-2">روی دکمهٔ "دیدن پاسخ" کلیک کنید — متن سوال به‌آرامی محو می‌شود و پاسخ جایگزین می‌شود (بدون چرخش). صوت AI و دکمهٔ کپی پرامپت نیز قرار داده شده‌اند.</p>

      <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-2/3">
          <div className="relative p-6 rounded-2xl bg-white shadow-lg overflow-hidden" style={{ minHeight: 160 }}>
            {/* front */}
            <div className={`transition-all duration-300 ease-in-out ${flipped ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
              <h4 className="font-semibold text-lg">سوال: تفاوت بین Monolith و Microservices چیست؟</h4>
              <p className="mt-3 text-sm text-gray-600">کوتاه توضیح بده و یک مثال عملی بزن.</p>
            </div>

            {/* back */}
            <div className={`absolute inset-0 transition-all duration-300 ease-in-out ${flipped ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
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

/* ---------------- Question Box ---------------- */
function QuestionBox() {
  const [q, setQ] = useState('');
  const [ans, setAns] = useState(null);

  function ask() {
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

/* ---------------- FAQ (Persian) ---------------- */
function FAQ() {
  const faqs = [
    { q: 'آیا تمام محتوا کامل و قابل استفاده است؟', a: 'بله. این وبسایت نسخهٔ کامل کتاب‌ها را صفحه‌به‌صفحه پوشش می‌دهد؛ نیازی به خرید PDF یا نسخهٔ فیزیکی نیست.' },
    { q: 'آیا محتوا دقیق است؟', a: 'بله — محتوا توسط مدل‌های پیشرفته و سپس تیمِ محتوایی بازبینی می‌شود تا دقت و کیفیت تضمین شود.' },
    { q: 'نسخهٔ کتاب‌ها چگونه به‌روز می‌شود؟', a: 'ما آخرین نسخه‌های معتبر کتاب‌ها را منتشر می‌کنیم و محتوای سایت با ورژن‌های جدید به‌روز می‌شود.' },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-12 text-right">
      <h3 className="text-2xl font-semibold">سوالات متداول</h3>
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

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    { name: 'Jose — Principal Engineer', text: 'این سرویس دقیقا همونی بود که تیم ما لازم داشت؛ مطالعهٔ هدفمند و سریع.' },
    { name: 'Arianne Dee — Developer', text: 'پرامپت‌های آماده و صوت AI فوق‌العاده‌اند.' },
    { name: 'Neal Ford — Architect', text: 'پوشش صفحه‌به‌صفحه واقعا تسریع یادگیری را ممکن می‌کند.' },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-12 text-right">
      <h3 className="text-2xl font-semibold">نظر کاربران</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((t, i) => (
          <div key={i} className="p-6 bg-white rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-sky-100 grid place-items-center font-semibold text-sky-700">{t.name[0]}</div>
              <div className="font-semibold">{t.name}</div>
            </div>
            <div className="mt-2 text-sm text-gray-600">{t.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA & Footer ---------------- */
function CTA() {
  return (
    <section className="max-w-7xl mx-auto mt-12 text-right">
      <div className="p-8 rounded-2xl text-white flex flex-col md:flex-row items-center gap-6" style={{ background: 'linear-gradient(90deg,#0ea5e9,#fb923c)' }}>
        <div className="flex-1">
          <h4 className="text-2xl font-semibold">شروع کنید — اولین کتاب را انتخاب کنید</h4>
          <p className="mt-2 text-white/90">همین حالا ثبت‌نام کنید و ۷ روز دسترسی آزمایشی رایگان بگیرید. وبسایت در حال توسعه است؛ فیچرهای بیشتری به‌زودی اضافه می‌شوند.</p>
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
    <footer className="max-w-7xl mx-auto mt-12 text-right text-sm text-gray-500">
      <div className="py-8 border-t">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} یادگیری از O'Reilly — کامل، فارسی‌شده، صوت AI</div>
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
