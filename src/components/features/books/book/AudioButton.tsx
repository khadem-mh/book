"use client";

import React, { useRef, useState } from "react";
import { CgPlayStopO, CgPlayStopR } from "react-icons/cg";
import { RiVoiceAiLine, RiPauseLine, RiRepeatLine } from "react-icons/ri";

type AudioButtonProps = {
  src: string;
};

const AudioButton: React.FC<AudioButtonProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      audioRef.current.onended = () => {
        setIsPlaying(false);
        if (isLoop) {
          audioRef.current?.play();
          setIsPlaying(true);
        }
      };
    }
  };

  const toggleLoop = () => {
    setIsLoop(prev => !prev);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Play / Pause Button */}
      <div
        onClick={togglePlay}
        className="flex items-center justify-center w-8 h-8 cursor-pointer rounded-lg bg-slate-100 hover:bg-slate-200 transition-all"
        title={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? (
          <CgPlayStopO className="text-[19px] text-gray-600" />
        ) : (
          <RiVoiceAiLine className="text-[19px] text-gray-600" />
        )}
        <audio ref={audioRef} src={src} />
      </div>

      {/* Loop / Replay Button */}
      {
        isPlaying ?
          <div
            onClick={toggleLoop}
            className={`flex items-center justify-center w-8 h-8 cursor-pointer rounded-lg bg-slate-100 hover:bg-slate-200 transition-all ${isLoop ? "bg-slate-300" : ""
              }`}
            title={isLoop ? "Loop is ON" : "Loop is OFF"}
          >
            <RiRepeatLine className="text-[19px] text-gray-600" />
          </div>
          : ""
      }
    </div>
  );
};

export default AudioButton;
