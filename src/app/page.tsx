"use client";

import { Accordion, AccordionItem, Button } from "@heroui/react";
import {
  MdArrowForwardIos,
  MdOutlineLibraryBooks,
  MdArrowOutward,
} from "react-icons/md";
import { LuBookOpenText, LuUserSearch } from "react-icons/lu";
import { TbBrandAmongUs, TbMessageCode, TbPrompt, TbUserCode } from "react-icons/tb";
import { FaCodeBranch } from "react-icons/fa6";
import { SiOpenai, SiWikibooks } from "react-icons/si";
import { RiMusicAiLine } from "react-icons/ri";
import { LiaBookReaderSolid } from "react-icons/lia";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import AnimatedHands from "@/components/books/AnimatedHands";

export default function HomePage() {
  return (
    <main dir="rtl" lang="fa" className="relative px-4 md:px-12 py-12 text-gray-800">
      <BackgroundBubbles />
      <Hero />
      <ProcessStory />
      <WhyDifferent />
      <VisualBreak />
      <Features />
      <FAQ />
      <Testimonials />
      <CTA />
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
            <span className="bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent">مطالعهٔ کاملِ کتاب‌های</span> مهندسی کامپیوتر با فلش‌کارت‌های هوشمند  AI
          </p>
        </h1>

        <p className="mt-4 text-gray-600 leading-8">
          ما کتاب‌ها را صفحه‌به‌صفحه، فصل‌به‌فصل پوشش می‌دهیم — تمام مفاهیم، مثال‌ها و تمرین‌ها دقیقاً مطابق با نسخهٔ اصلی انگلیسی و در قالبی کاملاً تعاملی و فارسی‌شده ارائه می‌شوند.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="bordered">ورود / ثبت‌نام</Button>

          <Button color="primary" variant="light" endContent={<MdArrowForwardIos className="text-sm scale-x-[-1]" />}>
            همه کتاب‌ها
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-3 text-sm">
          <div className="flex flex-col gap-1.5 text-[13px] shadow-md rounded-2xl p-2 xl items-center text-center 
                  transition transform duration-300 hover:scale-105 hover:shadow-xl">
            <img src="/images/home/review-book-with-ai.png" alt="AI book review" className="w-20" />
            <p> همهٔ مفاهیم تحلیل و ساختاردهی شده‌اند.</p>
          </div>

          <div className="flex flex-col gap-1.5 text-[13px] shadow-md rounded-2xl p-2 xl items-center text-center 
                  transition transform duration-300 hover:scale-105 hover:shadow-xl">
            <img src="/images/home/card.png" alt="Flashcards" className="w-20" />
            <p>فلش‌کارت‌های دقیق برای هر صفحه از فصل کتاب.</p>
          </div>

          <div className="flex flex-col gap-1.5 text-[13px] shadow-md rounded-2xl p-2 xl items-center text-center 
                  transition transform duration-300 hover:scale-105 hover:shadow-xl">
            <img src="/images/home/sound-ai.png" alt="AI audio" className="w-20" />
            <p>صوت های آماده و قابل استفاده برای هر کارت.</p>
          </div>

          <div className="flex flex-col gap-1.5 text-[13px] shadow-md rounded-2xl p-2 xl items-center text-center 
                  transition transform duration-300 hover:scale-105 hover:shadow-xl">
            <img src="/images/home/prompt.png" alt="Copyable prompt" className="w-20" />
            <p>پرامپت‌های آماده و قابل استفاده برای هر کارت.</p>
          </div>
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
                <MdOutlineLibraryBooks className="text-lg text-gray-600 bg-slate-200 ml-2 cursor-pointer hover:text-gray-900 transition" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStory() {
  const steps = [
    {
      id: 1,
      img: "/images/home/story/book.png",
      title: "کتاب فیزیکی",
      desc: "منبع اصلی و پایهٔ همهٔ یادگیری‌ها. با نسخه چاپی",
      accent: "bg-green-300"
    },
    {
      id: 2,
      img: "/images/home/story/book-digital.png",
      title: "کتاب دیجیتالی",
      desc: "دسترسی سریع به کتاب همه جا با دستگاه هوشمند.",
      accent: "bg-purple-300"
    },
    {
      id: 3,
      img: "/images/home/story/video-learning.png",
      title: "ویدیوهای آموزشی",
      desc: "نمایش عملی و توضیحات مفاهیم، ولی زمان‌بر و طولانی.",
      accent: "bg-red-300"
    },
    {
      id: 4,
      img: "/images/home/story/ai.png",
      title: "تحلیل با AI",
      desc: "AI نکات مهم را جدا و ساختار آموزشی می‌سازد.",
      accent: "bg-yellow-300"
    },
    {
      id: 5,
      img: "/images/home/story/flashcard.png",
      title: "فلش‌کارت‌ها و صوت آماده",
      desc: "همه آماده است؛ فقط یاد بگیر و جلو برو!",
      systemBase: true,
      accent: "bg-sky-300"
    },
    {
      id: 6,
      img: "/images/home/story/cheep.png",
      title: "تراشهٔ هوشمند در مغز",
      desc: "دانش و کارت‌ها مستقیم در مغز، همیشه در دسترس.",
      btnText: "یکم صبر!",
      accent: "bg-orange-300"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto mt-24">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold">دیگه وقتشه مسیرت رو عوض کنی!!</h3>
        <p className="text-gray-600 mt-2">
          راهی سریع، تعاملی و قابل اعتماد برای یادگیری کامل و کاربردی.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {steps.map((s) => (
          <div>
            {
              s?.systemBase &&
              <div className="flex justify-center text-3xl w-full -mt-9.5 mb-2">
                <AnimatedHands />
              </div>
            }
            <div
              key={s.id}
              className={`relative flex flex-col gap-1.5 text-[13px] shadow-md rounded-2xl p-2 xl items-center text-center 
              transition transform duration-300 hover:scale-105 hover:shadow-xl`}
            >
              {/* دایرهٔ رنگی پشت تصویر */}
              <div
                className={`absolute top-4 w-12 h-12 blur-2xl rounded-full pointer-events-none
                ${s?.accent || ""}`}
              ></div>

              {s?.btnText && (
                <p className="absolute top-2 left-2 text-white bg-black px-2 text-xs rounded-full animate-pulse">
                  {s.btnText}
                </p>
              )}
              <img src={s.img} alt={s.title} className="w-20 relative z-10" />
              <h4 className="font-semibold text-gray-900">{s.title}</h4>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyDifferent() {
  return (
    <section className="max-w-7xl mx-auto mt-24 text-right relative">
      {/* Title + background bubbles */}
      <div className="relative inline-block mb-6">
        <h3 className="text-2xl font-semibold relative z-10">ویژگی های متمایز پلتفرم</h3>
        <p className="mt-1 text-sm relative z-10 text-gray-950">
          تحلیل عمیق، پوشش کامل و تجربهٔ یادگیریِ قابل اتکا برای فارسی‌زبانان.
        </p>
      </div>

      <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardWithIcon
          src="/images/home/why-different/prompt-library-ai.png"
          title="کتابخانه پرامپت AI برای هرفصل"
          desc="هر صفحه، هر فصل، هر اصطلاح — تمام محتوا به‌صورت ساختاریافته پوشش داده می‌شود."
        />
        <CardWithIcon
          src="/images/home/why-different/sound-library-ai.png"
          title="کتابخانه صوت AI برای هرفصل"
          desc="گوش دهید در محل کار یا مسیر؛ صوت اختصاصی با صدای AI برای هر فلش‌کارت فراهم است."
        />
        <CardWithIcon
          src="/images/home/why-different/12303690.png"
          title="امتحان AI از شما"
          desc="پرامپت‌های آماده کنار هر کارت تا بتوانید از AI بخواهید آن بخش را کاملاً برایتان شرح دهد."
          textBtn="به زودی!"
        />
      </div>
    </section>
  );
}

function CardWithIcon({ src, title, desc, textBtn }: any) {
  return (
    <div className="relative p-5 rounded-3xl bg-transparent shadow border-2 border-dashed border-black/40 transition-transform hover:scale-105 flex gap-4 items-start overflow-hidden">
      <div className="absolute -right-8 top-8 w-28 h-28 rounded-full bg-gradient-to-tr from-white to-black -z-10 pointer-events-none"></div>

      <div className="flex items-center gap-3">
        <img src={src} alt={title} className="w-24 bg-white rounded-full p-1" />
        {textBtn && (
          <p className="absolute top-2 left-2 text-white bg-black px-2 text-xs rounded-full animate-pulse">
            {textBtn}
          </p>
        )}
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
    {
      title: 'فلش‌کارت‌های فصل‌به‌فصل',
      desc: 'نکات کلیدی، تعاریف و مثال‌ها برای مرور سریع هر فصل.',
      src: "/images/home/card.png",
    },
    {
      title: 'پخش صوت AI',
      desc: 'هر کارت همراه با فایل صوتی طبیعی برای مرور در حرکت.',
      src: "/images/home/sound-ai.png",
    },
    {
      title: 'پرامپت‌های آماده',
      desc: 'پرامپت‌ها را کپی کنید و برای توضیح، خلاصه‌سازی یا مثال‌سازی به AI بدهید.',
      src: "/images/home/prompt.png",
    },
    {
      title: 'دروس کوتاه و کاربردی',
      desc: 'هر کارت در ۱–۳ دقیقه مرور می‌شود و تمام نکات کلیدی و مثال‌ها را پوشش می‌دهد',
      src: "/images/home/specific-flashcard/small-content.png",
    },
    {
      title: 'تمرین و تست‌های چندسطحی',
      desc: 'سوالات هدفمند برای سنجش و تثبیت یادگیری هر فصل.',
      src: "/images/home/specific-flashcard/test-ai.png",
    },
    {
      title: 'تطبیق محتوا با سطح شما',
      desc: 'AI سوالات و توضیحات را بر اساس سطح شما شخصی‌سازی می‌کند.',
      src: "/images/home/specific-flashcard/level-ai.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-12 px-4 text-right">
      <h3 className="text-2xl font-bold mb-8">ویژگی‌های فلش‌کارت‌ها</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="relative flex items-start gap-4 p-4 rounded-3xl bg-white hover:shadow-md transition-shadow duration-300 overflow-hidden"
          >
            {/* subtle background bubble with Tailwind gradient */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl pointer-events-none bg-gradient-to-bl from-white via-orange-200 to-transparent"></div>

            <div className="flex-shrink-0 grid place-items-center">
              <img src={f.src} alt={"img"} className="w-24"/>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold text-base">{f.title}</h4>
              <p className="mt-1 text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Visual break (big icon + callout) ---------------- */
function VisualBreak() {
  return (
    <section className="border-5 border-dashed border-black/30 rounded-4xl px-6 py-12 max-w-7xl mx-auto mt-12 flex flex-col md:flex-row items-center gap-6
                        transition-colors duration-300 hover:bg-black/80 group">

      <div className="transition-colors duration-300 group-hover:text-gray-300">
        <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
          <p className="!text-left leading-17 bg-gradient-to-r from-slate-100 via-gray-400 to-slate-100 bg-clip-text text-transparent text-[70px] mt-3
                        group-hover:text-white transition-colors duration-300">
            Organizations <span className="text-4xl">achieve great success</span>
          </p>
        </h1>
        <h4 className="text-3xl md:text-4xl mt-6 font-bold mb-4
                       transition-colors duration-300 group-hover:text-white">
          سازمان‌ها به موفقیت‌های بزرگ دست پیدا می‌کنند
        </h4>
        <p className="text-gray-600 mb-4 leading-8 transition-colors duration-300 group-hover:text-gray-300">
          تیم‌های هوشمند با مسیرهای یادگیری ساختارمند و ابزارهای تعاملی ما، توانسته‌اند مهارت‌های خود را سریع‌تر توسعه دهند و در پروژه‌ها پیشرو باشند. شما هم می‌توانید با استفاده از فلش‌کارت‌ها و صوت AI، یادگیری سازمانی خود را متحول کنید.
        </p>
        <Button className="bg-black text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black" variant="flat" endContent={<MdArrowForwardIos className="text-sm scale-x-[-1]" />}>
          مشاهده نمونه ها
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
}

function FAQ() {
  const faqs = [
    {
      q: "آیا تمامِ محتوای کتاب‌ها به‌صورت کامل در سایت وجود دارد؟",
      a: "بله — هر کتاب به‌صورت صفحه‌به‌صفحه و فصل‌به‌فصل پوشش داده می‌شود: تعاریف، مثال‌ها، نمودارها، الگوریتم‌ها و تمرین‌ها. هدف ما این است که کاربر دیگر نیازی به خرید PDF یا نسخهٔ فیزیکی نداشته باشد و بتواند همهٔ محتوای آموزشی را در همین پلتفرم مطالعه، جستجو و گوش دهد."
    },
    {
      q: "محتوا چگونه تولید و تضمینِ کیفیت می‌شود؟",
      a: "محتوا ابتدا توسط مدل‌های پیشرفتهٔ زبانی استخراج و ساختاربندی می‌شود، سپس تیم محتوایی ما آن را بازبینی، ویرایش و اعتبارسنجی می‌کند تا از دقت مفاهیم و تطابق با منبع اصلی اطمینان حاصل شود. برای موارد حساس یا پیچیده، توضیحات کمکی و مثال‌های عملی اضافه می‌شوند."
    },
    {
      q: "نسخهٔ کتاب‌ها چگونه به‌روزرسانی می‌شود؟",
      a: "ما همواره آخرین نسخه‌ها و ادیشن‌های رسمی را منتشر می‌کنیم. هنگام انتشار ورژن جدید کتاب، محتوای سایت به‌روزرسانی می‌شود (به‌صورت فصل‌به‌فصل). هدف‌مان این است که هر کتاب در جدیدترین ورژن خود نگهداری شود و در صورت عرضه ادیشن جدید، سریعاً جایگزین شود."
    },
    {
      q: "پرامپت‌ها و صوت AI دقیقاً چطور کار می‌کنند؟",
      a: "برای هر فلش‌کارت یک پرامپت آماده ارائه می‌دهیم که کاربر می‌تواند آن را کپی کرده و مستقیماً به AI ارسال کند تا توضیح بیشتری دریافت کند. همچنین هر کارت یک فایل صوتی تولیدشده توسط TTS هوشمند دارد تا بتوانید در مسیر، سر کار یا هنگام مرور صوتی، محتوا را گوش کنید."
    },
    /* {
      q: "آیا می‌توانم فلش‌کارت‌ها را برای دورهٔ تیمی اختصاص دهم یا مسیر یادگیری بسازم؟",
      a: "بله — قابلیت ساختِ مسیرهای آموزشی، انتساب کارت/فصل به اعضای تیم و پیگیری پیشرفت در داشبورد تیمی وجود دارد (برای سطوح تیم و سازمان). رهبران می‌توانند محتوا تخصیص دهند، نمرات و گزارش‌ها را بررسی کنند و مسیرها را براساس هدف سازمانی تنظیم کنند."
    }, */
    {
      q: "چقدر می‌توانم به پاسخ‌های AI اعتماد کنم؟ (دقت و محدودیت‌ها)",
      a: "محتوای پاسخ‌ها دقیقاً بر اساس نسخهٔ کامل و معتبر کتاب تولید می‌شود و سپس توسط تیم محتوایی بازبینی و استانداردسازی می‌گردد تا مطمئن شویم هیچ نکته‌ای حذف یا جابه‌جا نشده است."
    },
    {
      q: "آیا می‌توانم پرامپت‌ها و کارت‌ها را دانلود یا صادر (export) کنم؟",
      a: "در حال حاضر گزینهٔ کپی پرامپت و دانلود صوت برای هر کارت فعال است. قابلیت‌های کاملِ خروجی‌گیری (CSV/JSON/Anki export) و همگام‌سازی با ابزارهای دیگر در حال توسعه هستند و به‌زودی اضافه می‌شوند."
    },
    {
      q: "قیمت‌گذاری، آزمایشی رایگان و امکانات سازمانی چگونه است؟",
      a: "ما طرح‌های متنوعی برای افراد و سازمان‌ها داریم؛ معمولاً ثبت‌نام با دورهٔ آزمایشی (مثلاً ۷ روز) آغاز می‌شود و سپس می‌توانید طرح مناسب تیم خود را انتخاب کنید. قابلیت‌های سازمانی مانند داشبوردِ تیمی، انتساب مسیر و گزارش‌های تحلیلی در طرح‌های سازمانی موجود یا به‌صورت افزونه ارائه می‌شوند."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto mt-16">
      <h3 className="text-3xl font-bold text-right mb-8">سوالات متداول</h3>

      <Accordion
        variant="splitted"
        className="rtl"
        itemClasses={{
          base: "rounded-2xl my-0.5 shadow-sm border border-gray-200",
          title: "font-bold text-right cursor-pointer",
          content: "text-right text-gray-600 leading-7",
        }}
      >
        {faqs.map((item, index) => (
          <AccordionItem
            key={index + 1}
            aria-label={`faq-${index}`}
            title={item.q}
          >
            {item.a}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    {
      name: "Jose — Principal Engineer",
      icon: <TbUserCode className="text-sky-600 text-2xl" />,
      text: "فلش‌کارت‌های این پلتفرم دقیقاً همان چیزی است که تیم مهندسی ما به آن نیاز داشت. سرعت مرور فصل‌ها فوق‌العاده بالاست و ساختار کارت‌ها اجازه می‌دهد در چند دقیقه مغز مطلب را کاملاً بگیرد. این حجم بهینه‌سازی زمان برای تیم ما بی‌نظیر بوده.",
    },
    {
      name: "Arianne Dee — Developer",
      icon: <TbUserCode className="text-orange-500 text-2xl" />,
      text: "حس می‌کنم مطالعه برای من تازه ساده شده! پرامپت‌های آماده کنار هر کارت باعث می‌شود هر بخش را به شکل عمیق‌تری بفهمم و صوت AI هم مرور را خیلی راحت‌تر کرده. یک تجربه‌ی یادگیری سریع، تمیز و بدون دردسر.",
    },
    {
      name: "Neal Ford — Architect",
      icon: <TbUserCode className="text-purple-600 text-2xl" />,
      text: "به‌ندرت سیستمی دیدم که *صفحه‌به‌صفحهٔ* یک کتاب فنی را این‌قدر تمیز و استاندارد ارائه کند. برای معماران نرم‌افزار، سرعت درک مفاهیم حیاتی است و این فلش‌کارت‌ها دقیقاً همین را تضمین می‌کنند.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-16 text-right">
      <h3 className="text-3xl font-bold">دیدگاه کاربران</h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <div
            key={i}
            className="
              p-6 rounded-3xl bg-white shadow-sm hover:shadow-lg
              border border-gray-100 transition-all duration-300
              hover:-translate-y-1 hover:bg-gradient-to-br
              hover:from-sky-50 hover:to-orange-50
            "
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gray-50 grid place-items-center shadow-inner">
                {t.icon}
              </div>
              <div className="font-semibold text-gray-800">{t.name}</div>
            </div>

            <p className="text-sm text-gray-600 leading-7">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA & Footer ---------------- */

function CTA() {
  const bookImages = [
    "/images/books/covers/building-micro-frontends_2nd-edition.jpg",
    "/images/books/covers/fundamentals-of-software-architecture_2nd-edition.jpg",
    "/images/books/covers/practical-lakehouse-architecture.jpg",
  ];

  return (
    <section className="max-w-4xl mx-auto mt-12 text-right">
      <div
        className="flex flex-col md:flex-row-reverse items-center gap-6 border border-slate-200 shadow-lg rounded-3xl p-6 bg-gradient-to-br from-white/90 via-sky-50/50 to-orange-50/50 backdrop-blur-md"
        role="region"
        aria-label="call-to-action"
      >
        {/* تصاویر کتاب */}
        <div className="flex-shrink-0 flex -space-x-6">
          {bookImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Book ${idx + 1}`}
              className="w-36 rounded-xl shadow-lg border border-gray-100 object-cover cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-rotate-2 hover:z-10"
              style={{ filter: `drop-shadow(0 4px 8px rgba(0,0,0,0.1))` }}
            />
          ))}
        </div>

        {/* محتوا */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-3 flex-wrap">
            <span className="text-xs px-4 py-1 rounded-xl w-fit text-gray-500 bg-gradient-to-r from-sky-50 to-orange-50">
              313 ساعت دسترسی رایگان به فلش‌کارت‌ها و صوت AI
            </span>
            <h4 className="text-lg font-bold text-gray-900 leading-tight">
              شروع کنید — اولین کتاب را انتخاب کنید
            </h4>
          </div>

          <p className="mt-2 text-sm text-gray-600">
            فلش‌کارت‌های دقیق، خلاصه‌های فصل‌به‌فصل و صوت AI برای یادگیری سریع‌تر و عمیق‌تر — مناسب افراد و تیم‌ها. تجربه‌ای متفاوت و موثر در هر مطالعه.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 items-center">
            <div className="ml-auto text-xs text-gray-500 hidden sm:inline">
              برنامه‌نویسای دیگه همین حالاشم شروع کردند ها! خلاصه گفتم که عقب نمونی!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}