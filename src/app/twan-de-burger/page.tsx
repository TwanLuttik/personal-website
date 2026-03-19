"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function TwanDeBurger() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

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

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-2xl flex-col items-center justify-center py-16 px-5 gap-8">
        <div className="text-center mb-4">
          <h1 className="font-bold text-4xl mb-2">Twan de Burger</h1>
          <p className="text-neutral-400">A musical journey</p>
        </div>

        {/* Album Cover */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-2xl border border-neutral-700 group">
            <Image
              src="/twan_burger_cover.jpeg"
              alt="Twan de Burger"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <p className="text-xs text-neutral-500">Trophy designed by <a href="https://www.youtube.com/@twomad" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-300 underline">Twomad</a></p>
        </div>

        {/* Player Controls */}
        <audio
          ref={audioRef}
          src="/twan_burger.mp3"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />

        <div className="w-full max-w-sm space-y-4">
          {/* Play Button */}
          <div className="flex justify-center">
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-white hover:bg-neutral-200 transition-colors flex items-center justify-center"
            >
              {isPlaying ? (
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full h-1.5 bg-neutral-700 rounded appearance-none cursor-pointer accent-white transition-all duration-100"
              style={{
                background: `linear-gradient(to right, rgb(255 255 255) 0%, rgb(255 255 255) ${(currentTime / duration) * 100}%, rgb(55 65 81) ${(currentTime / duration) * 100}%, rgb(55 65 81) 100%)`,
                backgroundSize: '100% 100%'
              }}
            />
            <div className="flex justify-between text-md text-neutral-400">
              <span className="font-bold ">{formatTime(currentTime)}</span>
              <span className="font-bold ">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-3">
            <svg className="w-4 h-4 text-neutral-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="flex-1 h-1.5 bg-neutral-700 rounded appearance-none cursor-pointer accent-white"
              style={{
                background: `linear-gradient(to right, rgb(255 255 255) 0%, rgb(255 255 255) ${volume * 100}%, rgb(55 65 81) ${volume * 100}%, rgb(55 65 81) 100%)`
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
