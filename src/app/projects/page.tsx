"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { Download, ExternalLink, Star } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  stars?: number;
}

interface MinecraftPlugin {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  category: string;
  version: string;
  downloads: number;
  rating: number | null;
  ratingsCount: number;
  updated: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "gtavi.social",
    description:
      "The social network for Grand Theft Auto VI — forums, crews, clips, and community built for Vice City.",
    url: "https://gtavi.social",
    thumbnail: "/gtavi.png",
  },
  {
    id: "2",
    title: "coatcheck.app",
    description: "A digital ticket solution for the claok room (aka. coat check) service and soon event ticketing.",
    url: "https://coatcheck.app",
    thumbnail: "/coatcheck.png",
  },
  {
    id: "3",
    title: "limemap.app",
    description: "A web based interactive map for lime scooter availability and locations for Canada, Vancouver",
    url: "https://limemap.app",
    thumbnail: "/limemap.png",
  },
  {
    id: "4",
    title: "dotenvx-gui",
    description: "A GUI app for dotenvx for easy encrypt/decrypt and backups for env files",
    url: "https://github.com/TwanLuttik/dotenvx-gui",
    thumbnail: "/dotenvx.png",
  },
  {
    id: "5",
    title: "ollama-chat-gui",
    description: "A GUI interface for ollama AI models when this was early days.",
    url: "https://github.com/ollama-interface/Ollama-Gui",
    thumbnail: "/ollama-chat.png",
    stars: 346,
  },
];

/** Stats from SpigotMC author page: https://www.spigotmc.org/resources/authors/twan040.289263/ */
const minecraftPlugins: MinecraftPlugin[] = [
  {
    id: "53944",
    title: "Tokens Economy",
    description:
      "Token-based economy with bank system, database support, and API. Supports Minecraft 1.20.x–1.21.4.",
    url: "https://www.spigotmc.org/resources/tokens-economy-1-20-x-1-21-4-bank-system-db-support-api.53944/",
    icon: "/minecraft/tokens-economy.png",
    category: "Economy",
    version: "3.0.0-PRE-v1",
    downloads: 8274,
    rating: 4.8,
    ratingsCount: 11,
    updated: "Apr 10, 2025",
  },
  {
    id: "61288",
    title: "RealTimeSupport",
    description: "In-game support ticket system with SQL. Supports Minecraft 1.8.x–1.14.x.",
    url: "https://www.spigotmc.org/resources/realtimesupport-1-8-x-1-14-x-sql.61288/",
    icon: "/minecraft/realtimesupport.png",
    category: "Tools & Utilities",
    version: "1.7.2",
    downloads: 1530,
    rating: 4.7,
    ratingsCount: 7,
    updated: "Jun 16, 2019",
  },
  {
    id: "52758",
    title: "PlayerCount",
    description:
      "Show players how many others are online with SQL backing. Supports Minecraft 1.8.x–1.13.x.",
    url: "https://www.spigotmc.org/resources/playercount-1-8-x-1-13-x-sql.52758/",
    icon: "/minecraft/playercount.png",
    category: "Tools & Utilities",
    version: "3.2.0",
    downloads: 2056,
    rating: 4.8,
    ratingsCount: 5,
    updated: "Jan 24, 2019",
  },
  {
    id: "53787",
    title: "Announcer (Broadcaster)",
    description: "Broadcast custom messages to the server on a schedule or command.",
    url: "https://www.spigotmc.org/resources/announcer-broadcaster.53787/",
    icon: "/minecraft/announcer.png",
    category: "Chat",
    version: "1.2.1",
    downloads: 396,
    rating: null,
    ratingsCount: 0,
    updated: "Feb 26, 2018",
  },
  {
    id: "51121",
    title: "OreGenReloaded",
    description: "Cobblestone generator that can produce ores — classic skyblock utility.",
    url: "https://www.spigotmc.org/resources/oregenreloaded.51121/",
    icon: "/minecraft/oregenreloaded.png",
    category: "Spigot",
    version: "1.4.0",
    downloads: 583,
    rating: null,
    ratingsCount: 0,
    updated: "Feb 16, 2018",
  },
];

const SPIGOT_AUTHOR_URL =
  "https://www.spigotmc.org/resources/authors/twan040.289263/";

const ratedPlugins = minecraftPlugins.filter(
  (p) => p.rating != null && p.ratingsCount > 0
);

const minecraftStats = {
  resources: minecraftPlugins.length,
  totalDownloads: minecraftPlugins.reduce((sum, p) => sum + p.downloads, 0),
  // Weighted average by number of ratings (plugins with no ratings excluded)
  averageRating:
    ratedPlugins.reduce((sum, p) => sum + (p.rating ?? 0) * p.ratingsCount, 0) /
    ratedPlugins.reduce((sum, p) => sum + p.ratingsCount, 0),
};

function formatNumber(n: number) {
  return n.toLocaleString("en-US");
}

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

        {/* Minecraft plugins */}
        <section className="mt-16 w-full">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
                Minecraft plugins
              </h2>
              <p className="text-neutral-400">
                Spigot / Paper plugins published as{" "}
                <a
                  href={SPIGOT_AUTHOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 transition-colors hover:text-blue-300"
                >
                  Twan040
                </a>{" "}
                on SpigotMC.
              </p>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-3 gap-3">
            <div className="rounded-xl py-3">
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Resources
              </p>
              <p className="mt-1 text-2xl font-semibold tabular-nums">
                {minecraftStats.resources}
              </p>
            </div>
            <div className="rounded-xl py-3">
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Total downloads
              </p>
              <p className="mt-1 text-2xl font-semibold tabular-nums">
                {formatNumber(minecraftStats.totalDownloads)}
              </p>
            </div>
            <div className="rounded-xl py-3">
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Avg. rating
              </p>
              <p className="mt-1 flex items-baseline gap-1.5 text-2xl font-semibold tabular-nums">
                {minecraftStats.averageRating.toFixed(1)}
                <Star className="size-4 fill-amber-400 text-amber-400" />
              </p>
            </div>
          </div>

          <ul className="flex w-full flex-col gap-3">
            {minecraftPlugins.map((plugin) => (
              <li key={plugin.id}>
                <a
                  href={plugin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 rounded-xl bg-neutral-900/50 p-4 transition-colors hover:bg-neutral-900"
                >
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-neutral-800 sm:size-16">
                    <Image
                      src={plugin.icon}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-white group-hover:text-white">
                            {plugin.title}
                          </h3>
                          <span className="rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-[11px] text-neutral-400">
                            v{plugin.version}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs text-neutral-500">
                          {plugin.category}
                          <span className="mx-1.5 text-neutral-700">·</span>
                          Updated {plugin.updated}
                        </p>
                      </div>
                      <ExternalLink className="mt-0.5 size-4 shrink-0 text-neutral-600 transition-colors group-hover:text-neutral-400" />
                    </div>

                    <p className="text-sm text-neutral-400">
                      {plugin.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
                      <span className="inline-flex items-center gap-1.5">
                        <Download className="size-3.5" />
                        {formatNumber(plugin.downloads)} downloads
                      </span>
                      {plugin.rating != null && plugin.ratingsCount > 0 && (
                        <span className="inline-flex items-center gap-1.5">
                          <Star className="size-3.5 fill-amber-400/90 text-amber-400" />
                          {plugin.rating.toFixed(1)}
                          <span className="text-neutral-600">
                            ({plugin.ratingsCount} ratings)
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-center text-xs text-neutral-600">
            Stats from{" "}
            <a
              href={SPIGOT_AUTHOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-neutral-700 underline-offset-2 hover:text-neutral-400"
            >
              SpigotMC author page
            </a>
            . Not an official Minecraft product.
          </p>
        </section>
      </main>
    </div>
  );
}