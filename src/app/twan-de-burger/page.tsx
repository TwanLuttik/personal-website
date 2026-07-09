"use client";

import { RetroPlayer } from "@/components/retro-player";

export default function TwanDeBurger() {
  return (
    <main className="page-shell items-center gap-8">
      <header className="flex flex-col items-center gap-2 text-center">
        <p className="section-label">Music</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Twan de Burger
        </h1>
        <p className="text-sm text-muted-foreground">
          Served hot, straight out of Windows 95
        </p>
      </header>

      <RetroPlayer
        track={{
          title: "Twan de Burger",
          artist: "Twan Luttik",
          src: "/twan_burger.mp3",
          cover: "/twan_burger_cover.jpeg",
        }}
      />

      <p className="max-w-md text-center text-xs leading-relaxed text-muted-foreground/80">
        Windows 95–style Media Player recreation. Trophy designed by{" "}
        <a
          href="https://www.youtube.com/@twomad"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-border underline-offset-2 transition-colors hover:text-foreground"
        >
          Twomad
        </a>
        .
      </p>
    </main>
  );
}
