"use client";

import Image from "next/image";
import { useState, useRef } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  stars?: number;
}

const projects: Project[] = [
  {
    id: "1",
    title: "coatcheck.app",
    description: "A digital ticket solution for the claok room (aka. coat check) service and soon event ticketing.",
    url: "https://coatcheck.app",
    thumbnail: "/coatcheck.png",
  },
  {
    id: "2",
    title: "limemap.app",
    description: "A web based interactive map for lime scooter availability and locations for Canada, Vancouver",
    url: "https://limemap.app",
    thumbnail: "/limemap.png",
  },
  {
    id: "3",
    title: "dotenvx-gui",
    description: "A GUI app for dotenvx for easy encrypt/decrypt and backups for env files",
    url: "https://github.com/TwanLuttik/dotenvx-gui",
    thumbnail: "/dotenvx.png",
  },
  {
    id: "4",
    title: "ollama-chat-gui",
    description: "A GUI interface for ollama AI models when this was early days.",
    url: "https://github.com/ollama-interface/Ollama-Gui",
    thumbnail: "/ollama-chat.png",
    stars: 346,
  },
];

export default function Projects() {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-start">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-start justify-start py-16 px-5">
        <div className="mb-12">
          <h1 className="font-bold text-4xl mb-2">Projects</h1>
          <p className="text-lg text-neutral-400">A collection of my recent work</p>
        </div>

        <div className="w-full space-y-6 relative" ref={containerRef} onMouseMove={handleMouseMove}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex gap-6 pb-6 border-b border-neutral-700 hover:border-neutral-500 transition-colors"
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              {/* Website Preview */}
              <div className="relative w-48 h-32 bg-neutral-800 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-contain group-hover:animate-wiggle"
                  />
                ) : (
                  <iframe
                    src={project.url}
                    className="w-full h-full scale-50 origin-top-left pointer-events-none group-hover:animate-wiggle"
                    title={project.title}
                    sandbox="allow-same-origin"
                  />
                )}
              </div>

              {/* Project Info */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    {project.stars && (
                      <span className="text-xs font-bold bg-neutral-700 text-neutral-300 px-2 py-1 rounded">
                        ⭐ {project.stars}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-400">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors w-fit px-3 py-2 pointer-events-auto relative z-10"
                  onMouseEnter={() => setHoveredProjectId(null)}
                >
                  Visit Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {/* Floating Preview */}
          {hoveredProjectId && (
            <div
              className="absolute pointer-events-none z-50"
              style={{
                left: `${mousePos.x + 20}px`,
                top: `${mousePos.y + 20}px`,
              }}
            >
              {projects.find((p) => p.id === hoveredProjectId)?.thumbnail && (
                <div className="relative w-80 h-60 bg-neutral-800 rounded-lg overflow-hidden shadow-2xl border border-neutral-600">
                  <Image
                    src={
                      projects.find((p) => p.id === hoveredProjectId)?.thumbnail ||
                      ""
                    }
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-neutral-900/40 pointer-events-none" />
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}