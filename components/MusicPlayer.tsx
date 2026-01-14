"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => {
      setProgress(audio.currentTime);
    };
    const handleLoadedMetadata = () => {
      console.log(11, audio);
      setDuration(audio.duration);
    };

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    // Trigger load if not already loaded
    audio.load();

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const progressPercent = duration ? (progress / duration) * 100 : 0;

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = percent * duration;
    }
  };

  return (
    <div className="flex flex-row items-center gap-1 mb-5">
      {/* Compact retro player container */}
      <div className="flex flex-row" style={{ width: "160px" }}>
        {/* Rotating CD with play button overlay */}
        <div className="flex justify-center">
          <button
            onClick={togglePlay}
            className="relative w-16 h-16 flex items-center justify-center cursor-pointer group shrink-0"
          >
            {/* CD outer ring - spins when playing */}
            <div
              className="absolute inset-0 rounded-full border-[1.5px] border-neutral-500 group-hover:border-neutral-300 transition-colors"
              style={{
                animation: isPlaying ? "spin 3s linear infinite" : "none",
              }}
            />

            {/* CD center with album cover - rotates when playing */}
            <div
              className="relative w-14 h-14 rounded-full overflow-hidden flex items-center justify-center border border-white group cursor-pointer"
              style={{
                animation: isPlaying ? "spin 4s linear infinite" : "none",
              }}
            >
              <Image
                src="/twan_burger_cover.jpeg"
                alt="Twan De Burger"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-125"
              />
            </div>

            {/* Play/Pause button - always visible */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-xs font-bold drop-shadow-lg bg-black/40 rounded-full w-full h-full flex items-center justify-center">
                {isPlaying ? "⏸" : "▶"}
              </div>
            </div>
          </button>
        </div>

        {/* Right side */}
        <div className="pl-2.5 w-[150px] items-center flex-col justify-center flex">
          <div
            onClick={handleProgressClick}
            className="w-full h-1.5 mt-2.5 bg-neutral-700 rounded-full overflow-hidden border border-neutral-600 cursor-pointer hover:bg-neutral-600 transition-colors mb-1"
          >
            <div
              className="h-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-100"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex justify-between items-center px-1">
            <span className="font-mono text-xs text-neutral-400">
              {formatTime(progress)}
            </span>
            <span className="text-neutral-400">/</span>
            <span className="font-mono text-xs text-neutral-500">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>

      {/* Audio element */}
      <audio
        ref={audioRef}
        src="/twan_burger.mp3"
        crossOrigin="anonymous"
        preload="metadata"
      />

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
