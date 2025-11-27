import Hero from "@/components/features/landing/Hero/Hero";
import LearningJourney from "@/components/features/landing/LearningJourney/LearningJourney";
import CTA from "@/components/features/landing/CTA";
import FAQ from "@/components/features/landing/FAQ";
import FlashcardFeatures from "@/components/features/landing/FlashcardFeatures/FlashcardFeatures";
import Testimonials from "@/components/features/landing/Testimonials/Testimonials";
import VisualBreak from "@/components/features/landing/VisualBreak";
import WhyDifferent from "@/components/features/landing/WhyDifferent/WhyDifferent";
import { TbUserCode } from "react-icons/tb";
import { TestimonialCardProps } from "@/components/features/landing/Testimonials/TestimonialCard";
import FlashCard, { FlashCardData } from "@/components/features/books/book/FlashCard";

export default function HomePage() {

  const Herofeatures = [
    { imgSrc: "/images/home/review-book-with-ai.png", text: "همهٔ مفاهیم تحلیل و ساختاردهی شده‌اند." },
    { imgSrc: "/images/home/card.png", text: "فلش‌کارت‌های دقیق برای هر صفحه از فصل کتاب." },
    { imgSrc: "/images/home/sound-ai.png", text: "صوت های آماده و قابل استفاده برای هر کارت." },
    { imgSrc: "/images/home/prompt.png", text: "پرامپت‌های آماده و قابل استفاده برای هر کارت." },
  ];

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

  const WhyDifferentCards = [
    {
      src: "/images/home/why-different/prompt-library-ai.png",
      title: "کتابخانه پرامپت AI برای هرفصل",
      desc: "هر صفحه، هر فصل، هر اصطلاح — تمام محتوا به‌صورت ساختاریافته پوشش داده می‌شود."
    },
    {
      src: "/images/home/why-different/sound-library-ai.png",
      title: "کتابخانه صوت AI برای هرفصل",
      desc: "گوش دهید در محل کار یا مسیر؛ صوت اختصاصی با صدای AI برای هر فلش‌کارت فراهم است."
    },
    {
      src: "/images/home/why-different/12303690.png",
      title: "امتحان AI از شما",
      desc: "پرامپت‌های آماده کنار هر کارت تا بتوانید از AI بخواهید آن بخش را کاملاً برایتان شرح دهد.",
      textBtn: "به زودی!"
    }
  ]

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

  const sampleFlashCard: FlashCardData = {
    id: 5,
    title: "Axiom در معماری نرم‌افزار",
    title_en: "Axiom in Software Architecture",
    description: "Axiom یا اصول بنیادین در معماری نرم‌افزار یعنی اون چیزهایی که بدون بحث و استدلال، پایه و ستون تصمیم‌گیری‌های معماری هستن. مثل یه قانون نانوشته که همه معماری‌ها روی اون متکی هستن.",
    examples: [
      "در طراحی microservices، یک اصل بنیادین اینه که هر سرویس باید مستقل باشه و داده خودش رو مدیریت کنه. این یک Axiom محسوب میشه.",
      "در سیستم‌های frontend، یک axiom می‌تونه این باشه که UI باید همیشه responsive باشه و تجربه کاربری رو خراب نکنه."
    ],
    conclusion: "آگاهی از axiomها باعث میشه تصمیمات معماری منطقی‌تر باشن و تغییرات آینده کمترین تاثیر منفی رو روی سیستم بذارن.",
    images: [
      { id: 1, path: "/images/flashcard/axiom-architecture.png" },
      { id: 2, path: "/images/flashcard/axiom-architecture-2.png" },
    ],
    audioUrl: "/audio/flashcard_axiom.mp3",
    prompt: `Explain the concept of "Axiom" in software architecture. 
      Describe it in simple, approachable language as if teaching a smart junior developer. 
      Include real-world examples from software projects, like microservices, frontend frameworks, or DevOps practices. 
      Provide a key architectural insight explaining why understanding axioms is crucial for making sustainable design decisions. 
      Keep the tone friendly, slightly humorous, and relatable.`
  };

  const faqs = [
    {
      q: "آیا تمام محتوای کتاب‌ها در سایت موجود است؟",
      a: "بله — هر کتاب صفحه‌به‌صفحه و فصل‌به‌فصل پوشش داده می‌شود: تعاریف، مثال‌ها، نمودارها و تمرین‌ها. هدف این است که کاربر نیازی به PDF یا نسخهٔ فیزیکی نداشته باشد و همهٔ محتوای آموزشی را در سایت مطالعه، جستجو و گوش دهد."
    },
    {
      q: "محتوا چگونه تولید و کیفیت آن تضمین می‌شود؟",
      a: "محتوا ابتدا توسط مدل‌های پیشرفتهٔ زبانی استخراج و ساختاربندی می‌شود، سپس تیم محتوایی آن را بازبینی و اعتبارسنجی می‌کند. برای موارد حساس یا پیچیده، توضیحات کمکی و مثال‌های عملی اضافه می‌شوند."
    },
    {
      q: "نسخهٔ کتاب‌ها چگونه به‌روزرسانی می‌شود و پاسخ‌های AI چقدر قابل اعتمادند؟",
      a: "ما همیشه آخرین نسخه‌ها و ادیشن‌های رسمی را منتشر می‌کنیم و محتوای سایت به‌صورت فصل‌به‌فصل به‌روزرسانی می‌شود. پاسخ‌های AI بر اساس نسخهٔ کامل کتاب تولید شده و توسط تیم ما بازبینی می‌شوند تا هیچ نکته‌ای حذف یا جابه‌جا نشود."
    },
    {
      q: "پرامپت‌ها و کارت‌ها چگونه کار می‌کنند و قابل دانلود هستند؟",
      a: "برای هر فلش‌کارت یک پرامپت آماده ارائه می‌کنیم تا کاربر بتواند آن را به AI بدهد. هر کارت همچنین دارای فایل صوتی تولیدشده توسط TTS هوشمند است. هم‌اکنون گزینهٔ کپی پرامپت و دانلود صوت فعال است و قابلیت‌های کامل خروجی‌گیری به زودی اضافه می‌شوند."
    },
    {
      q: "قیمت‌گذاری، دورهٔ آزمایشی و امکانات سازمانی چگونه است؟",
      a: "طرح‌های متنوعی برای افراد و سازمان‌ها داریم. ثبت‌نام معمولاً با دورهٔ آزمایشی (مثلاً ۷ روز) آغاز می‌شود و سپس می‌توانید طرح مناسب خود را انتخاب کنید. امکانات سازمانی مانند داشبورد تیمی و گزارش‌های تحلیلی نیز موجود هستند."
    }
  ];

  const testimonialItems: TestimonialCardProps[] = [
    {
      name: "مهدی عباسی",
      job: "برنامه نویس فول استک",
      src: "senior.png",
      text: "فلش‌کارت‌های این پلتفرم دقیقاً همان چیزی است که تیم مهندسی ما به آن نیاز داشت. سرعت مرور فصل‌ها فوق‌العاده بالاست و ساختار کارت‌ها اجازه می‌دهد در چند دقیقه مغز مطلب را کاملاً بگیرد. این حجم بهینه‌سازی زمان برای تیم ما بی‌نظیر بوده.",
      level: "senior",
    },
    {
      name: "رضا ولی پور",
      job: "برنامه نویس فرانت اند",
      src: "middlevel.png",
      text: "به‌ندرت سیستمی دیدم که *صفحه‌به‌صفحهٔ* یک کتاب فنی را این‌قدر تمیز و استاندارد ارائه کند. برای معماران نرم‌افزار، سرعت درک مفاهیم حیاتی است و این فلش‌کارت‌ها دقیقاً همین را تضمین می‌کنند.",
      level: "mid",
    },
    {
      name: "احمد براتی",
      job: "برنامه نویس بک اند",
      src: "junior.png",
      text: "حس می‌کنم مطالعه برای من تازه ساده شده! پرامپت‌های آماده کنار هر کارت باعث می‌شود هر بخش را به شکل عمیق‌تری بفهمم و صوت AI هم مرور را خیلی راحت‌تر کرده. یک تجربه‌ی یادگیری سریع، تمیز و بدون دردسر.",
      level: "junior",
    },
  ];

  const bookImages = [
    "/images/books/covers/fundamentals-of-data-visualization.jpg",
    "/images/books/covers/fundamentals-of-devOps-and-software-delivery.jpg",
    "/images/books/covers/fundamentals-of-software-engineering.jpg",
    "/images/books/covers/practical-lakehouse-architecture.jpg",
    "/images/books/covers/fundamentals-of-software-architecture_2nd-edition.jpg",
  ];

  return (
    <main dir="rtl" lang="fa" className="flex flex-col gap-24 px-2 py-12 text-gray-800">
      <Hero
        officialSourceText="منبع رسمی: O'Reilly"
        subtitleText="پوشش کامل کتاب‌ها — صوت AI — پرامپت‌های آماده"
        titleMain="Build"
        titleHighlight="the skills your teams need"
        descriptionLine1="مطالعهٔ کاملِ کتاب‌های"
        descriptionLine2="مهندسی کامپیوتر با فلش‌کارت‌های هوشمند AI"
        paragraph="ما کتاب‌ها را صفحه‌به‌صفحه، فصل‌به‌فصل پوشش می‌دهیم — تمام مفاهیم، مثال‌ها و تمرین‌ها دقیقاً مطابق با نسخهٔ اصلی انگلیسی و در قالبی کاملاً تعاملی و فارسی‌شده ارائه می‌شوند."
        cards={Herofeatures}
        bookTitle="Fundamentals of Software Architecture — Edit in 2025"
        slugBookTitle="fundamentals-of-software-architecture_2nd-edition"
      />
      <LearningJourney
        title="دیگه وقتشه مسیرت رو عوض کنی!!"
        subTitle="راهی سریع، تعاملی و قابل اعتماد برای یادگیری کامل و کاربردی."
        cards={steps}
      />
      <div className="flex flex-col gap-8">
        <WhyDifferent
          title="ویژگی های متمایز پلتفرم"
          subTitle="تحلیل عمیق، پوشش کامل و تجربهٔ یادگیریِ قابل اتکا برای فارسی‌زبانان."
          cards={WhyDifferentCards}
        />
        <VisualBreak />
      </div>
      <FlashcardFeatures title="ویژگی‌های فلش‌کارت‌ها" subTitle="همه‌چیز برای یادگیری کامل هر فصل—از صوت و پرامپت تا تست و مرور سریع." items={features} />
      <FlashCard data={sampleFlashCard} />
      <FAQ items={faqs} />
      <Testimonials items={testimonialItems} />
      <CTA
        title="شروع کنید — اولین کتاب را انتخاب کنید"
        description="فلش‌کارت‌های دقیق، خلاصه‌های فصل‌به‌فصل و صوت AI برای یادگیری سریع‌تر و عمیق‌تر — مناسب افراد و تیم‌ها. تجربه‌ای متفاوت و موثر در هر مطالعه."
        badge="240 ساعت دسترسی رایگان به فلش‌کارت‌ها و صوت AI"
        note="برنامه‌نویسای دیگه همین حالاشم شروع کردند ها! خلاصه گفتم که عقب نمونی!"
        bookImages={bookImages}
      />
    </main>
  );
}