"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import "./win95-player.css";

type Track = {
  title: string;
  artist: string;
  src: string;
  cover?: string;
};

type RetroPlayerProps = {
  track: Track;
  className?: string;
};

type MenuItem =
  | { type: "item"; label: string; action: () => void; disabled?: boolean }
  | { type: "divider" };

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function IconPlay() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M2 1 L9 5 L2 9 Z" fill="currentColor" />
    </svg>
  );
}
function IconPause() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <rect x="1.5" y="1" width="2.5" height="8" fill="currentColor" />
      <rect x="6" y="1" width="2.5" height="8" fill="currentColor" />
    </svg>
  );
}
function IconStop() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <rect x="1.5" y="1.5" width="7" height="7" fill="currentColor" />
    </svg>
  );
}
function IconPrev() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" aria-hidden="true">
      <rect x="1" y="1" width="2" height="8" fill="currentColor" />
      <path d="M10 1 L4 5 L10 9 Z" fill="currentColor" />
    </svg>
  );
}
function IconNext() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" aria-hidden="true">
      <path d="M2 1 L8 5 L2 9 Z" fill="currentColor" />
      <rect x="9" y="1" width="2" height="8" fill="currentColor" />
    </svg>
  );
}

export function RetroPlayer({ track, className }: RetroPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const seekBarRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const ensureAudioGraph = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return null;

    if (!audioCtxRef.current) {
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      audioCtxRef.current = new Ctx();
    }

    const ctx = audioCtxRef.current;

    if (!sourceRef.current) {
      sourceRef.current = ctx.createMediaElementSource(audio);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      analyser.smoothingTimeConstant = 0.75;
      sourceRef.current.connect(analyser);
      analyser.connect(ctx.destination);
      analyserRef.current = analyser;
    }

    return ctx;
  }, []);

  const drawVisualizer = useCallback(() => {
    const canvas = canvasRef.current;
    const analyser = analyserRef.current;
    if (!canvas) {
      rafRef.current = requestAnimationFrame(drawVisualizer);
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth || 300;
    const height = canvas.clientHeight || 150;
    if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    if (analyser) {
      const bufferLength = analyser.frequencyBinCount;
      const data = new Uint8Array(bufferLength);
      analyser.getByteFrequencyData(data);

      const barCount = 28;
      const gap = 1;
      const barWidth = (width - gap * (barCount - 1)) / barCount;

      for (let i = 0; i < barCount; i++) {
        const dataIndex = Math.floor((i / barCount) * bufferLength);
        const value = data[dataIndex] / 255;
        const barHeight = Math.max(1, value * (height - 10));
        const x = i * (barWidth + gap);
        const y = height - barHeight - 3;
        ctx.fillStyle =
          value > 0.72 ? "#ffff00" : value > 0.38 ? "#00ff00" : "#008000";
        ctx.fillRect(x, y, Math.max(1, barWidth - 0.5), barHeight);
      }
    } else {
      ctx.strokeStyle = "#003300";
      ctx.lineWidth = 1;
      for (let y = 2; y < height; y += 3) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }

    rafRef.current = requestAnimationFrame(drawVisualizer);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(drawVisualizer);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [drawVisualizer]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = repeat;
  }, [repeat]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => {
      if (!isSeeking) setCurrentTime(audio.currentTime);
    };
    const onMeta = () => setDuration(audio.duration || 0);
    const onEnded = () => {
      if (!repeat) setIsPlaying(false);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("durationchange", onMeta);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("durationchange", onMeta);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [isSeeking, repeat]);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      void audioCtxRef.current?.close();
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    const ctx = ensureAudioGraph();
    if (ctx?.state === "suspended") await ctx.resume();

    if (audio.paused) {
      try {
        await audio.play();
      } catch (err) {
        console.error("Playback failed", err);
      }
    } else {
      audio.pause();
    }
  };

  const stop = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const seekFromClientX = (clientX: number) => {
    const audio = audioRef.current;
    const bar = seekBarRef.current;
    if (!audio || !bar || !duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const next = ratio * duration;
    audio.currentTime = next;
    setCurrentTime(next);
  };

  const onSeekPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsSeeking(true);
    seekFromClientX(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onSeekPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isSeeking) return;
    seekFromClientX(e.clientX);
  };

  const onSeekPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isSeeking) return;
    setIsSeeking(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const displayVolume = isMuted ? 0 : volume;

  const menus: Record<string, MenuItem[]> = {
    File: [
      { type: "item", label: "Open...", action: () => undefined, disabled: true },
      { type: "item", label: "Close", action: stop },
      { type: "divider" },
      { type: "item", label: "Exit", action: () => undefined, disabled: true },
    ],
    View: [
      {
        type: "item",
        label: "Statistics",
        action: () => undefined,
        disabled: true,
      },
      {
        type: "item",
        label: repeat ? "✓ Repeat" : "Repeat",
        action: () => setRepeat((r) => !r),
      },
    ],
    Play: [
      {
        type: "item",
        label: isPlaying ? "Pause" : "Play",
        action: () => void togglePlay(),
      },
      { type: "item", label: "Stop", action: stop },
      { type: "divider" },
      {
        type: "item",
        label: "Volume Up",
        action: () => setVolume((v) => Math.min(1, v + 0.1)),
      },
      {
        type: "item",
        label: "Volume Down",
        action: () => setVolume((v) => Math.max(0, v - 0.1)),
      },
      {
        type: "item",
        label: isMuted ? "Unmute" : "Mute",
        action: () => setIsMuted((m) => !m),
      },
    ],
    Help: [
      {
        type: "item",
        label: "About Media Player...",
        action: () =>
          window.alert(
            "Windows 95 Media Player\nTwan de Burger\n\nNot affiliated with Microsoft."
          ),
      },
    ],
  };

  return (
    <div className={cn("win95-root", className)}>
      <audio ref={audioRef} src={track.src} preload="metadata" />

      <div className="win95-window">
        <div className="win95-title-bar">
          <div className="win95-title-bar-text">
            <span className="win95-app-icon" aria-hidden="true" />
            <span>Media Player - [{track.title}]</span>
          </div>
          <div className="win95-title-bar-controls">
            <button type="button" className="win95-title-button" aria-label="Minimize">
              <span className="win95-icon-min" />
            </button>
            <button type="button" className="win95-title-button" aria-label="Maximize">
              <span className="win95-icon-max" />
            </button>
            <button type="button" className="win95-title-button" aria-label="Close">
              <span className="win95-icon-close" />
            </button>
          </div>
        </div>

        <div
          className="win95-menu-bar"
          onClick={(e) => e.stopPropagation()}
        >
          {Object.entries(menus).map(([name, items]) => (
            <div key={name} className="win95-menu-item-wrap">
              <button
                type="button"
                className={cn("win95-menu-item", menuOpen === name && "is-open")}
                onClick={() =>
                  setMenuOpen((open) => (open === name ? null : name))
                }
              >
                <span className="underline">{name[0]}</span>
                {name.slice(1)}
              </button>
              {menuOpen === name && (
                <div className="win95-dropdown">
                  {items.map((item, i) =>
                    item.type === "divider" ? (
                      <div key={i} className="win95-dropdown-divider" />
                    ) : (
                      <button
                        key={i}
                        type="button"
                        className="win95-dropdown-item"
                        disabled={item.disabled}
                        onClick={() => {
                          item.action();
                          setMenuOpen(null);
                        }}
                      >
                        {item.label}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="win95-body">
          <div className="win95-viewport">
            <canvas ref={canvasRef} />
            {track.cover && !isPlaying && (
              <div className="win95-viewport-cover">
                <div className="win95-viewport-cover-img">
                  <Image
                    src={track.cover}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="88px"
                  />
                </div>
              </div>
            )}
          </div>

          <fieldset className="win95-group">
            <legend>Track</legend>
            <div className="win95-field win95-track-field">
              {track.artist} - {track.title}
            </div>
            <div className="win95-meta-row">
              <span>
                Position: {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              <span>{isPlaying ? "Playing" : "Stopped"}</span>
            </div>
          </fieldset>

          <div className="win95-control-row">
            <span className="win95-label">Seek</span>
            <div
              ref={seekBarRef}
              role="slider"
              aria-label="Seek"
              aria-valuemin={0}
              aria-valuemax={Math.floor(duration || 0)}
              aria-valuenow={Math.floor(currentTime)}
              tabIndex={0}
              onPointerDown={onSeekPointerDown}
              onPointerMove={onSeekPointerMove}
              onPointerUp={onSeekPointerUp}
              onPointerCancel={onSeekPointerUp}
              onKeyDown={(e) => {
                const audio = audioRef.current;
                if (!audio || !duration) return;
                if (e.key === "ArrowRight") {
                  audio.currentTime = Math.min(duration, audio.currentTime + 5);
                } else if (e.key === "ArrowLeft") {
                  audio.currentTime = Math.max(0, audio.currentTime - 5);
                }
              }}
              className="win95-slider-track"
            >
              <div
                className="win95-slider-fill"
                style={{ width: `calc(${progress}% - 2px)` }}
              />
              <div
                className="win95-slider-thumb"
                style={{ left: `calc(${progress}% - 6px)` }}
              />
            </div>
          </div>

          <div className="win95-control-row">
            <button
              type="button"
              className="win95-btn win95-btn-sm"
              onClick={() => setIsMuted((m) => !m)}
            >
              {isMuted || volume === 0 ? "Mute" : "Vol"}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={displayVolume}
              onChange={(e) => {
                const v = Number(e.target.value);
                setVolume(v);
                if (v > 0) setIsMuted(false);
              }}
              className="win95-range"
              aria-label="Volume"
            />
            <span className="win95-label" style={{ width: 28, textAlign: "right" }}>
              {Math.round(displayVolume * 100)}
            </span>
          </div>

          <div className="win95-transport">
            <button
              type="button"
              className="win95-btn win95-btn-icon"
              aria-label="Start"
              title="Start"
              onClick={() => {
                const audio = audioRef.current;
                if (audio) audio.currentTime = 0;
              }}
            >
              <IconPrev />
            </button>
            <button
              type="button"
              className="win95-btn win95-btn-icon win95-btn-play"
              aria-label={isPlaying ? "Pause" : "Play"}
              onClick={() => void togglePlay()}
            >
              {isPlaying ? <IconPause /> : <IconPlay />}
            </button>
            <button
              type="button"
              className="win95-btn win95-btn-icon"
              aria-label="Stop"
              onClick={stop}
            >
              <IconStop />
            </button>
            <button
              type="button"
              className="win95-btn win95-btn-icon"
              aria-label="End"
              title="End"
              onClick={() => {
                const audio = audioRef.current;
                if (audio && duration) audio.currentTime = duration;
              }}
            >
              <IconNext />
            </button>

            <label className="win95-checkbox">
              <input
                type="checkbox"
                checked={repeat}
                onChange={(e) => setRepeat(e.target.checked)}
              />
              <span>Repeat</span>
            </label>
          </div>
        </div>

        <div className="win95-status-bar">
          <div className="win95-status-field">
            {isPlaying ? "Playing" : "Ready"}
          </div>
          <div className="win95-status-field win95-status-field-sm">
            {formatTime(currentTime)}
          </div>
          <div className="win95-status-field win95-status-field-sm">1 file</div>
        </div>
      </div>
    </div>
  );
}
