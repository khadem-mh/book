import { bookDetail } from "@/lib/data/fundamentals-of-software-architecture_2nd-edition/book";
import {
    TbUser,
    TbCalendarStats,
    TbFileText,
    TbClock,
    TbChevronRight,
} from "react-icons/tb";

type Props = { params: any };

export default function SpecificOfBook({ params }: Props) {
    const { slug } = params;
    console.log(bookDetail);
    
    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* COVER - static */}
                <div className="relative w-full md:w-64 flex-shrink-0">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={bookDetail.cover}
                            alt={`${bookDetail.titleFa || bookDetail.title} cover`}
                            className="w-full h-auto object-cover"
                            style={{ borderRadius: 24 }}
                        />
                        <div className="absolute inset-0 pointer-events-none z-30">
                            <svg
                                className="w-full h-full"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="gCover" x1="0" x2="1">
                                        <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                                        <stop offset="60%" stopColor="rgba(255,255,255,0)" />
                                    </linearGradient>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#gCover)" />
                            </svg>
                        </div>
                    </div>

                    {/* small badges */}
                    <div className="mt-3 flex gap-2">
                        <span className="text-xs bg-white/95 px-3 py-1 rounded-full shadow glass">
                            language
                        </span>
                        <span className="text-xs bg-white/95 px-3 py-1 rounded-full shadow glass">
                            {bookDetail.level ?? "—"}
                        </span>
                    </div>
                </div>

                {/* meta & controls */}
                <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight heading-gradient">
                            {bookDetail.titleFa || bookDetail.title}
                        </h1>
                        {bookDetail.subTitle && (
                            <p className="text-sm text-gray-400 mt-2 max-w-3xl">{bookDetail.subTitle}</p>
                        )}

                        {/* authors with avatars */}
                        <div className="mt-4 flex items-center gap-3 flex-wrap">
                            {(bookDetail.authors ?? []).map((a: any) => (
                                <div
                                    key={a.name}
                                    className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm"
                                >
                                    <img
                                        src={a.cover}
                                        alt={a.name}
                                        className="w-11 h-11 rounded-full object-cover border border-white/70"
                                    />
                                    <div className="text-sm font-medium">{a.name}</div>
                                </div>
                            ))}
                        </div>

                        {bookDetail.description && (
                            <p className="mt-5 text-sm text-gray-600 max-w-3xl leading-relaxed">
                                {bookDetail.description}
                            </p>
                        )}

                        <div className="mt-6 flex flex-wrap gap-3 items-center">
                            <button className="inline-flex items-center gap-2 bg-sky-600 text-white text-sm px-4 py-2 rounded-2xl shadow">
                                مشاهده کتاب <TbChevronRight size={16} />
                            </button>

                            <a
                                className="inline-flex items-center gap-2 border border-slate-200 text-sm px-4 py-2 rounded-2xl hover:shadow transition"
                                href="#tags"
                            >
                                تگ‌ها ({(bookDetail.tags ?? []).length})
                            </a>
                        </div>
                    </div>

                    {/* stats row */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                        <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
                            <div className={`bg-sky-50 text-sky-600`}>
                                <TbUser />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400">نویسنده(ها)</div>
                                <div className="text-sm font-medium">
                                    {(bookDetail.authors ?? []).map((a: any) => a.name).join(", ")}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
                            <div className={`bg-amber-50 text-amber-600`}>
                                <TbCalendarStats />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400">انتشار</div>
                                <div className="text-sm font-medium">{bookDetail.publishedYear ?? "-"}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
                            <div className={`bg-violet-50 text-violet-600`}>
                                <TbFileText />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400">صفحات</div>
                                <div className="text-sm font-medium">
                                    {bookDetail.publishedPages ?? bookDetail.pages ?? "-"}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
                            <div className={`bg-slate-50 text-slate-700`}>
                                <TbClock />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400">ایجاد شده</div>
                                <div className="text-sm font-medium">{new Date(bookDetail.createdAt).toLocaleDateString("fa-IR")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
