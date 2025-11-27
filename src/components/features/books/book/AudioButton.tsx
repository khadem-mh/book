"use client";

import React, { useRef, useState } from "react";
import { RiVoiceAiLine } from "react-icons/ri";

type AudioButtonProps = {
  src: string;
};

const AudioButton: React.FC<AudioButtonProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      audioRef.current.onended = () => setIsPlaying(false); // وقتی صدا تموم شد
    }
  };

  return (
    <div
      onClick={togglePlay}
      className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-lg bg-slate-100 hover:bg-slate-200 transition-all"
      title={isPlaying ? "Pause audio" : "Play audio"}
    >
      <RiVoiceAiLine className="text-[20px] text-gray-600" />
      <audio ref={audioRef} src={src} />
    </div>
  );
};

export default AudioButton;
