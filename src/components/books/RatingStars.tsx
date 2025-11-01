"use client";

import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";

type RatingProps = {
    rating: number;     // 0–5 (ex: 4.5)
    max?: number;       // default = 5
    label?: string;     // ex: "امتیاز"
};

export default function RatingStars({ rating, max = 5, label = "امتیاز" }: RatingProps) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    return (
        <div className="flex items-center justify-between mt-2">
            <p className="text-slate-600 text-sm font-[Lalezar]">{label}</p>
            <div className="flex items-center gap-1.5">
                <div className="w-fit flex items-center gap-1 mb-1">
                    {[...Array(max - fullStars - (hasHalf ? 1 : 0))].map((_, i) => (
                        <FaStar key={`empty-${i}`} className="text-gray-300" />
                    ))}

                    {hasHalf && <FaStarHalfStroke className="text-yellow-500" />}

                    {[...Array(fullStars)].map((_, i) => (
                        <FaStar key={`full-${i}`} className="text-yellow-500" />
                    ))}
                </div>
                <p className="text-slate-600 text-sm font-[Lalezar]">{rating}</p>
            </div>
        </div>
    );
}
