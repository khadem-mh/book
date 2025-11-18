"use client";

import { useState, useEffect } from "react";
import { PiHandWaving, PiHandPointingLight } from "react-icons/pi";

export default function AnimatedHands() {
    const [showWaving, setShowWaving] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowWaving(prev => !prev);
        }, 4000); // هر 4 ثانیه تغییر دست
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center text-3xl w-full">
            {showWaving ? (
                <PiHandWaving
                    style={{
                        animation: "shake 2s ease-in-out infinite",
                    }}
                />
            ) : (
                <PiHandPointingLight
                    className="animate-bounce rotate-180"
                />
            )}

            {/* Inline keyframes */}
            <style jsx>{`
              @keyframes shake {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(15deg); }
                50% { transform: rotate(-15deg); }
                75% { transform: rotate(20deg); }
              }
            `}</style>
        </div>
    );
}
