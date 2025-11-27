"use client"

import { LuScrollText } from "react-icons/lu";
import AudioButton from "./AudioButton";
import PromptButton from "./PromptButton";

export type FlashCardData = {
    id: number;
    title: string;
    title_en?: string;
    description?: string;
    examples?: string[];
    conclusion?: string;
    images?: { id: number; path: string }[];
    audioUrl?: string;
    prompt?: string;
};

type FlashCardProps = {
    data: FlashCardData;
};

const FlashCard: React.FC<FlashCardProps> = ({ data }) => {
    return (
        <div className="group">
            <div className="max-w-[400px] w-full bg-white shadow-md group-hover:shadow-lg rounded-2xl p-6 transition-all">
                <div className="relative space-y-4">
                    <div className="w-full absolute pt-0.5 -top-10 rounded-xl bg-slate-50 shadow-md group-hover:shadow-lg transition-all text-center">
                        <h3 className="text-gray-500 animated-text truncate">{data.title_en}</h3>
                    </div>
                    <div className="relative flex items-center justify-start">
                        <div className="w-10 h-10 absolute top-0 -left-2 rounded-full bg-orange-200"></div>
                        <h2 className="text-sm font-bold truncate pt-3">{data.title}</h2>
                        <img src="/images/flashcard/12303690.png" alt="title" className="w-16 absolute top-0 left-0 animate-float-x" />
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

                    {/* تصاویر */}
                    {data.images && data.images.length > 0 && (
                        <div className="relative flex items-center justify-between gap-2">
                            <div className="w-10 h-10 absolute top-0 rounded-full -right-2 bg-red-200"></div>
                            <div className="relative">
                                <img src="/images/flashcard/images-gallery.png" alt="gallery" className="w-16 h-16 animate-float-x" />
                            </div>
                            {data.images.map((img) => (
                                <img
                                    key={img.id}
                                    src={img.path}
                                    alt={`image-${img.id}`}
                                    className="w-14 h-14 object-cover rounded-xl"
                                />
                            ))}
                        </div>
                    )}

                    <div className="flex items-center gap-3 justify-end">
                        {/* صوت */}
                        {data.audioUrl && (
                            <div className="flex justify-end mt-2">
                                <AudioButton src={data.audioUrl} />
                            </div>
                        )}

                        {/* دکمه کپی پرامپت */}
                        {data.prompt && (
                            <div className="flex justify-end mt-2">
                                <PromptButton textToCopy={data.prompt} />
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FlashCard;
