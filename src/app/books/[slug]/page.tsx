import { bookDetail } from "@/lib/data/fundamentals-of-software-architecture_2nd-edition/book";
import {
  TbUser,
  TbCalendarStats,
  TbFileText,
  TbClock,
  TbChevronRight,
  TbTag,
  TbBooks,
  TbStar,
} from "react-icons/tb";

type Props = { params: any };

export default function SpecificOfBook({ params }: Props) {
  // const { slug } = params; // اگر لازم شد استفاده کن
  const b = bookDetail;

  const formatFaDate = (d?: string) => {
    if (!d) return "-";
    try {
      return new Date(d).toLocaleDateString("fa-IR");
    } catch {
      return d;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* COVER */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={b.cover.startsWith("/") ? b.cover : `/${b.cover}`}
              alt={`${b.title || b.title_en} cover`}
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

          {/* badges */}
          <div className="mt-3 flex gap-2 flex-wrap">
            <span className="text-xs bg-white/95 px-3 py-1 rounded-full shadow glass">
              سطح: {b.level ?? "-"}
            </span>
            <span className="text-xs bg-white/95 px-3 py-1 rounded-full shadow glass">
              فصل‌ها: {b.total_chapters ?? (b.chapters?.length ?? "-")}
            </span>
            <span className="text-xs bg-white/95 px-3 py-1 rounded-full shadow glass">
              صفحات : {b.total_pages ?? "-"}
            </span>
          </div>
        </div>

        {/* Meta & controls */}
        <div className="flex-1 flex flex-col justify-between py-1">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight heading-gradient">
              {b.title || b.title_en}
            </h1>
            {b.title_en && (
              <div className="text-sm text-gray-500 mt-1">{b.title_en}</div>
            )}
            {b.edition && (
              <p className="text-sm text-gray-400 mt-2 max-w-3xl">{b.edition}</p>
            )}

            {/* authors */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {(b.authors ?? []).map((a: any) => (
                <div
                  key={a.id ?? a.name}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm"
                >
                  <img
                    src={(a.cover || "").startsWith("/") ? a.cover : `/${a.cover}`}
                    alt={a.name || a.en_name}
                    className="w-11 h-11 rounded-full object-cover border border-white/70"
                  />
                  <div className="text-sm">
                    <div className="font-medium">{a.name}</div>
                    {a.en_name && <div className="text-xs text-gray-400">{a.en_name}</div>}
                  </div>
                </div>
              ))}
            </div>

            {/* categories & tags */}
            <div className="mt-4 flex flex-wrap gap-2 items-center">
              {(b.categories ?? []).map((c: any) => (
                <span
                  key={c.id ?? c.title}
                  className="text-xs px-3 py-1 rounded-full bg-slate-50 border border-slate-100 shadow-sm flex items-center gap-2"
                >
                  <TbTag className="text-sm" />
                  <span className="font-medium">{c.title}</span>
                </span>
              ))}
            </div>

            {/* description */}
            {b.description && (
              <p className="mt-5 text-sm text-gray-600 max-w-3xl leading-relaxed">
                {b.description}
              </p>
            )}

            {/* preface summary */}
            {b.preface && (
              <div className="mt-5 p-4 bg-white rounded-2xl shadow-sm border">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold flex items-center gap-2">
                      <TbBooks /> {b.preface.title || "مقدمه"}
                    </div>
                    {b.preface.title_en && (
                      <div className="text-xs text-gray-400">{b.preface.title_en}</div>
                    )}
                    {b.preface.description && (
                      <p className="mt-2 text-sm text-gray-600 max-w-2xl">
                        {b.preface.description}
                      </p>
                    )}
                  </div>

                  <div className="text-right text-xs text-gray-500">
                    {b.preface.publish_year_ai && (
                      <div>نسخه AI: {b.preface.publish_year_ai}</div>
                    )}
                  </div>
                </div>

                {/* preface sections compact */}
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(b.preface?.sections ?? []).map((s: any, idx: number) => (
                    <div key={s.id ?? idx} className="p-3 bg-slate-50 rounded-xl">
                      <div className="text-sm font-medium">{s.title}</div>
                      {s.title_en && <div className="text-xs text-gray-400">{s.title_en}</div>}
                      {s.description && <div className="mt-1 text-xs text-gray-500">{s.description}</div>}
                      {s.publish_year_ai && (
                        <div className="mt-2 text-xs text-amber-600">AI: {s.publish_year_ai}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* controls */}
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <button className="inline-flex items-center gap-2 bg-sky-600 text-white text-sm px-4 py-2 rounded-2xl shadow">
                مشاهده کتاب <TbChevronRight size={16} />
              </button>

              <a
                className="inline-flex items-center gap-2 border border-slate-200 text-sm px-4 py-2 rounded-2xl hover:shadow transition"
                href="#chapters"
              >
                فصل‌ها ({b.total_chapters ?? b.chapters?.length ?? 0})
              </a>

              <div className="ml-auto flex items-center gap-3">
                <div className="text-sm text-gray-500">امتیاز</div>
                <div className="flex items-center gap-1">
                  <TbStar className="text-amber-500" />
                  <div className="font-medium">{b.rating ?? "-"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* stats */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
              <div className="bg-sky-50 text-sky-600 p-2 rounded-full">
                <TbUser />
              </div>
              <div>
                <div className="text-xs text-gray-400">نویسنده(ها)</div>
                <div className="text-sm font-medium">
                  {(b.authors ?? []).map((a: any) => a.name).join(", ")}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
              <div className="bg-amber-50 text-amber-600 p-2 rounded-full">
                <TbCalendarStats />
              </div>
              <div>
                <div className="text-xs text-gray-400">انتشار</div>
                <div className="text-sm font-medium">
                  {b.publish_year ?? b.publish_year_ai ?? "-"}
                </div>
                {b.publish_chapters_ai !== undefined && (
                  <div className="text-xs text-gray-400">فصول AI: {b.publish_chapters_ai}</div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
              <div className="bg-violet-50 text-violet-600 p-2 rounded-full">
                <TbFileText />
              </div>
              <div>
                <div className="text-xs text-gray-400">صفحات</div>
                <div className="text-sm font-medium">
                  {b.total_pages ?? "-"}
                </div>
                {b.publish_pages_ai !== undefined && (
                  <div className="text-xs text-gray-400">صفحات AI: {b.publish_pages_ai}</div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
              <div className="bg-slate-50 text-slate-700 p-2 rounded-full">
                <TbClock />
              </div>
              <div>
                <div className="text-xs text-gray-400">ایجاد شده</div>
                <div className="text-sm font-medium">{formatFaDate(b.created_at)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapters */}
      <div id="chapters" className="mt-6">
        <h2 className="text-2xl font-bold mb-6">فصل‌ها</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {(b.chapters ?? []).map((ch: any) => (
            <div
              key={ch.id}
              className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-semibold">
                  {ch.id}
                </div>

                <div className="flex-1">
                  <div className="text-sm font-medium">{ch.title}</div>
                  {ch.title_en && <div className="text-xs text-gray-400">{ch.title_en}</div>}

                  <div className="mt-2 text-xs text-gray-500">
                    صفحات: {ch.start_page}-{ch.end_page}
                  </div>

                  <div className="mt-2 text-xs text-gray-500 line-clamp-3">
                    {ch.overview}
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                <div>کل صفحات فصل: {ch.total_pages ?? "-"}</div>
                <div className="flex items-center gap-3">
                  {ch.publish_year_ai && <div>AI: {ch.publish_year_ai}</div>}
                  {ch.publish_pages_ai !== undefined && <div>AI صفحات: {ch.publish_pages_ai}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
