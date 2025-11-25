import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import CopyButton from "@/components/shared/CopyButton";
import HeroClient from "./HeroClient";
import FeatureBox,{ FeatureBoxProps } from "./FeatureBox";
import BackgroundBubbles from "../components/BackgroundBubbles";

type HeroProps = {
    cards: FeatureBoxProps[];
    bookTitle: string;
    officialSourceText: string;   // منبع رسمی
    subtitleText: string;         // پوشش کامل کتاب‌ها — صوت AI — پرامپت‌های آماده
    titleMain: string;            // Build
    titleHighlight: string;       // the skills your teams need
    descriptionLine1: string;     // مطالعهٔ کاملِ کتاب‌های
    descriptionLine2: string;     // مهندسی کامپیوتر با فلش‌کارت‌های هوشمند AI
    paragraph: string;            // توضیح طولانی زیر تیتر
    slugBookTitle: string
}

const Hero = ({
    cards,
    bookTitle,
    slugBookTitle,
    officialSourceText,
    subtitleText,
    titleMain,
    titleHighlight,
    descriptionLine1,
    descriptionLine2,
    paragraph,
}: HeroProps) => {

    return (
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-right">
                <div className="inline-flex items-center justify-between w-full gap-3 mb-2">
                    <span className="text-xs bg-gradient-to-r from-sky-100 to-white px-3 py-0.5 rounded-full shadow-sm">
                        {officialSourceText}
                    </span>
                    <span className="text-xs text-gray-500">{subtitleText}</span>
                </div>

                <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
                    <p className="!text-left leading-17 bg-gradient-to-r from-slate-100 via-gray-400 to-slate-100 bg-clip-text text-transparent text-[70px] mt-3">
                        {titleMain} <span className="text-4xl">{titleHighlight}</span>
                    </p>
                    <p className="leading-15 mt-8">
                        <span className="bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent">
                            {descriptionLine1}
                        </span>{" "}
                        {descriptionLine2}
                    </p>
                </h1>

                <p className="mt-4 text-gray-600 leading-8">{paragraph}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <HeroClient />
                </div>

                <div className="mt-10 grid grid-cols-4 gap-3 text-sm">
                    {cards.map((f, i) => (
                        <FeatureBox key={i} {...f} />
                    ))}
                </div>
            </div>

            <div className="relative">
                <BackgroundBubbles />

                <img
                    src="/images/home/effective.png"
                    alt="illustration"
                    className="w-full select-none animate-spin"
                    style={{ animationDuration: "25000ms" }}
                />

                <div className="absolute -bottom-6 left-6 bg-white/50 rounded-2xl shadow-lg p-4 w-64">
                    <div className="flex flex-col items-center">
                        <div className="text-sm font-semibold">کتاب برجسته امروز</div>
                        <div>
                            <div className="text-xs text-gray-500 text-left leading-5">
                                {bookTitle}
                            </div>
                            <div className="flex items-center justify-between w-full bg-slate-100 p-1 rounded-lg mt-1">
                                <Link href={`/books/${slugBookTitle}`}>
                                    <div className="flex items-center gap-1 cursor-pointer text-xs border rounded-lg px-2 border-slate-300">
                                        <MdArrowOutward />
                                        <span>مطاله</span>
                                    </div>
                                </Link>
                                <CopyButton textToCopy={bookTitle} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
