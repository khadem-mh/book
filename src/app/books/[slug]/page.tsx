// app/books/[slug]/page.tsx
import Link from "next/link";
import { books } from "@/lib/books";

type Props = { params: any };

export default async function SpecificOfBook({ params }: Props) {
    const { slug } = await params;
    const book = books.find((b: any) => b.slug === slug);

    if (!book) {
        return (
            <div className="p-6">
                <h1 className="text-xl font-bold">کتاب یافت نشد</h1>
                <p className="text-sm text-gray-500 mt-2">ممکن است slug اشتباه باشد یا کتاب هنوز اضافه نشده باشد.</p>
            </div>
        );
    }

    return (
        <div className="p-6 space-y-6">
            {/* Header: cover + basic meta */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                <img src={book.cover} alt={`${book.titleFa || book.title} cover`} className="w-72 rounded-xl object-cover shadow-lg animate-appearance-in" />

                <div className="h-96 flex flex-col justify-between py-4">
                    <div>
                        <h1 className="text-2xl font-bold">{book.titleFa || book.title}</h1>
                        {book.subTitle && <p className="text-sm text-gray-500 mt-1">{book.subTitle}</p>}
                        {book.description && <p className="text-sm text-gray-600 mt-4 line-clamp-4">{book.description}</p>}
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-slate-50 rounded-xl p-2 flex flex-col gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">نویسندگان:</span>
                                <div className="flex items-center gap-6">
                                    {book.authors?.map((a: any) => (
                                        <div key={a.name} className="flex items-center gap-2">
                                            <img src={a.cover} alt={a.name} className="w-8 h-8 rounded-lg object-cover border border-slate-200" />
                                            <span className="text-gray-700">{a.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">سال:</span>
                                <span className="font-medium text-gray-700">{book.publishedYear ?? "-"}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">صفحات (منتشر):</span>
                                <span className="font-medium text-gray-700">{book.publishedPages ?? book.pages ?? "-"}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">سطح:</span>
                                <span className="font-medium text-gray-700">{book.level ?? "-"}</span>
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-2 flex flex-col gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">نویسندگان:</span>
                                <div className="flex items-center gap-6">
                                    {book.authors?.map((a: any) => (
                                        <div key={a.name} className="flex items-center gap-2">
                                            <img src={a.cover} alt={a.name} className="w-8 h-8 rounded-lg object-cover border border-slate-200" />
                                            <span className="text-gray-700">{a.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">سال:</span>
                                <span className="font-medium text-gray-700">{book.publishedYear ?? "-"}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">صفحات (منتشر):</span>
                                <span className="font-medium text-gray-700">{book.publishedPages ?? book.pages ?? "-"}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">سطح:</span>
                                <span className="font-medium text-gray-700">{book.level ?? "-"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Two action cards: Preface & Pages overview */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Preface card */}
                <Link href={`/books/${slug}/preface`} className="no-underline">
                    <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">مقدمه کتاب</h3>
                            <span className="text-xs text-sky-600">مشاهده</span>
                        </div>

                        <p className="mt-3 text-sm text-gray-600 line-clamp-4">
                            {/* اگر می‌خوای خلاصهٔ مقدمه رو اینجا نشون بدی می‌تونی مقدارش رو از preface بخونی.
                  چون گفتی الان فقط meta لازم داریم، اینجا یک متن کوتاه از meta یا placeholder میذاریم */}
                            {book.prefaceSummary ?? "مقدمه و نکات کلیدی کتاب در این بخش قرار می‌گیرد."}
                        </p>

                        <div className="mt-4">
                            <span className="text-xs text-gray-500">تعداد بلوک‌ها: {book.prefaceBlocksCount ?? "-"}</span>
                        </div>
                    </div>
                </Link>

                {/* Pages overview card */}
                <Link href={`/books/${slug}/page/1`} className="no-underline">
                    <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">نمای کلی صفحات</h3>
                            <span className="text-xs text-sky-600">شروع از صفحه ۱</span>
                        </div>

                        <p className="mt-3 text-sm text-gray-600">
                            {`در این کتاب ${book.publishedPages ?? book.pages ?? "—"} صفحه برای نمایش آماده شده است. با کلیک روی "شروع" می‌توانید فلش‌کارت‌های صفحه‌به‌صفحه را ببینید.`}
                        </p>

                        <div className="mt-4 flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-700">{book.publishedPages ?? book.pages ?? "-"}</span>
                            <span className="text-xs text-gray-500">صفحه منتشر شده</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
