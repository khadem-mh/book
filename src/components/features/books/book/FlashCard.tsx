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
        <div className="max-w-[420px] w-full bg-white shadow-[0_0_8px_lightgray] rounded-2xl p-6">
            <div className="relative space-y-4">
                <div className="w-full absolute pt-0.5 -top-10 rounded-2xl bg-slate-50 border border-black/15 text-center">
                    <h3 className="text-gray-500 animated-text truncate">{data.title_en}</h3>
                </div>
                <div className="relative flex items-center justify-start">
                    <h2 className="text-md font-bold truncate pt-3">{data.title}</h2>
                    <img src="/images/flashcard/12303690.png" alt="title" className="w-16 absolute top-0 left-0 animate-float-x" />
                </div>
                <div className="mx-12 text-gray-300 -mt-2 mb-5">
                    <hr />
                </div>
                {/* توضیح */}
                <p className="text-gray-600">{data.description}</p>
                {/* مثال‌ها */}
                {data.examples && data.examples.length > 0 && (
                    <ul className="list-disc list-inside space-y-1">
                        {data.examples.map((ex, idx) => (
                            <li key={idx}>{ex}</li>
                        ))}
                    </ul>
                )}
                <div className="relative flex items-center justify-start">
                    <h2 className="text-md font-bold truncate">نتیجه گیری</h2>
                    <img
                        src="/images/flashcard/12303685.png"
                        alt="title"
                        className="w-16 absolute -top-3 left-0 animate-float-y"
                    />
                </div>
                <div className="mx-12 text-gray-300 -mt-2 mb-5">
                    <hr />
                </div>
                {/* نتیجه‌گیری */}
                {data.conclusion && (
                    <p className="text-blue-600 font-semibold">{data.conclusion}</p>
                )}

                {/* تصاویر */}
                {data.images && data.images.length > 0 && (
                    <div className="flex gap-2 overflow-x-auto">
                        {data.images.map((img) => (
                            <img
                                key={img.id}
                                src={img.path}
                                alt={`image-${img.id}`}
                                className="w-24 h-24 object-cover rounded"
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
    );
};

export default FlashCard;
