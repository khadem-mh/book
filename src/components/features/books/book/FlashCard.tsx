"use client"

import AudioButton from "./AudioButton";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TbBrandAmongUs, TbHandClick, TbPrompt } from "react-icons/tb";
import CopyButtonFlashCard from "./CopyButtonFlashCard";
import { IoMdMore } from "react-icons/io";
import { LuGalleryHorizontalEnd } from "react-icons/lu";

export type FlashCardData = {
    id: number;
    title: string;
    title_en: string;
    description: string;
    examples: string[];
    conclusion: string;
    images?: { id: number; path: string }[];
    audioUrl: string;
    prompt: string;
};

type FlashCardProps = {
    data: FlashCardData;
};

const FlashCard: React.FC<FlashCardProps> = ({ data }) => {
    return (
        <div className="group">
            <div className="relative max-w-[400px] w-full bg-white shadow-md group-hover:shadow-lg rounded-2xl p-6 transition-all">
                <div className="relative space-y-4">

                    <div className="w-full absolute p-1 px-2 -top-12 rounded-xl bg-slate-50 shadow-md group-hover:shadow-lg transition-all">
                        <h3 className="text-gray-500 animated-text text-center truncate text-sm">{data.title_en}</h3>
                    </div>

                    <div className="relative flex items-center justify-start">
                        <div className="w-10 h-10 absolute top-2 -left-2 rounded-full bg-orange-100"></div>
                        <h2 className="text-sm font-bold truncate pt-3">{data.title}</h2>
                        <img src="/images/flashcard/12303690.png" alt="title" className="w-16 absolute top-2 left-0 animate-float-x" />
                    </div>
                    <div className="mx-20 text-gray-200 -mt-2 mb-5">
                        <hr />
                    </div>
                    {/* توضیح */}
                    <p className="text-gray-700 text-sm">{data.description}</p>
                    {/* مثال‌ها */}
                    {data.examples && data.examples.length > 0 && (
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            {data.examples.map((ex, idx) => (
                                <li key={idx}>{ex}</li>
                            ))}
                        </ul>
                    )}

                    <div className="relative flex items-center justify-start">
                        <div className="w-10 h-10 absolute top-0 rounded-full -left-2 bg-sky-100"></div>
                        <h2 className="text-md font-bold text-sm">نتیجه گیری</h2>
                        <img
                            src="/images/flashcard/12303685.png"
                            alt="title"
                            className="w-16 absolute -top-3 left-0 animate-float-y"
                        />
                    </div>
                    <div className="mx-20 text-gray-200 -mt-2 mb-5">
                        <hr />
                    </div>
                    {/* نتیجه‌گیری */}
                    <p className="text-sm text-sky-700">{data.conclusion}</p>

                    <div className="relative flex items-center justify-start">
                        <div className="w-10 h-10 absolute top-0 rounded-full -left-2 bg-black/10"></div>
                        {data.images && data.images.length > 0 && (
                            <div className="flex cursor-pointer items-center justify-center -space-x-4">
                                {data.images.slice(0, 3).map((img) => (
                                    <img
                                        key={img.id}
                                        src={img.path}
                                        alt={`image-${img.id}`}
                                        className="w-13 h-13 object-cover hover:scale-105 transition-all rounded-xl border-2 border-white"
                                    />
                                ))}
                                {data.images.length > 1 && (
                                    <div className="w-13 h-13 flex items-center hover:scale-105 transition-all justify-center rounded-xl text-sm font-medium border-2 border-slate-200 bg-slate-50/80">
                                        {data.images.length - 1} +
                                    </div>
                                )}
                            </div>
                        )}
                        <img
                            src="/images/flashcard/12303771.png"
                            alt="title"
                            className="w-16 absolute animate-swing -top-3 left-0 animate-float-x"
                        />
                    </div>

                </div>
                <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2">
                    {/* absolute -bottom-8 left-1/2 transform -translate-x-1/2 */}
                    <div className="group-hover:shadow-lg transition-all bg-white shadow-md p-1.5 rounded-xl flex items-center gap-2">
                        <div
                            onClick={() => { }}
                            className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-lg bg-slate-100 hover:bg-slate-200 transition-all"
                        >
                            <IoMdMore className="text-md text-gray-600" />
                        </div>
                        <div className="border border-slate-300 p-1 rounded-xl flex items-center gap-2">
                            <AudioButton src={data.audioUrl} />
                        </div>
                        <CopyButtonFlashCard textToCopy={data.prompt} Icon={TbPrompt} />
                       {/*  <CopyButtonFlashCard textToCopy={data.prompt} Icon={MdOutlineLibraryBooks} /> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FlashCard;
