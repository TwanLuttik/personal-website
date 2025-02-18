"use client";

import { TelegramStatus } from "@/components/TelegramStatus";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface TelegramState {
  lastMessage: string;
  lastUpdateTime: string;
  status: "online" | "offline" | "away";
  lastActivity: string;
}

const projects = [
  {
    name: "CoatCheck App",
    description: "Digital coat check system for venues and events",
    url: "https://coatcheck.app",
  },
  {
    name: "RavePort App",
    description: "Event discovery and community platform for ravers",
    url: "https://raveport.net",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/TwanLuttik",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/twanluttik",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/twanluttik",
    icon: FaXTwitter,
  },
];

export default function Home() {
  const [state, setState] = useState<TelegramState | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("/api/telegram");
        const data = await response.json();

        if (data.state) {
          setState(data.state);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err: unknown) {
        console.log(err);
        setError(true);
      }
    };

    fetchMessage();
    // Refresh every 5 minutes
    const interval = setInterval(fetchMessage, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full p-4 md:p-8 relative overflow-hidden">
      <div className="max-w-[600px] mx-auto space-y-8">
        {/* Status Section */}
        <section className="bg-gray-50 dark:bg-black/20 p-4 rounded-lg border border-gray-200 dark:border-white/10">
          <div className="mb-2 text-sm text-gray-600 dark:text-white/60">
            Current Status
          </div>
          <TelegramStatus state={state} error={error} />
          <div className="mt-2 text-xs text-gray-500 dark:text-white/40">
            Last updated: {state ? new Date(state.lastUpdateTime).toLocaleString() : "Never"}
          </div>
        </section>

        {/* Matrix Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/20 to-transparent" />

        {/* Social Links Section */}
        <section className="bg-gray-50 dark:bg-black/20 p-4 rounded-lg border border-gray-200 dark:border-white/10">
          <h2 className="text-lg font-medium mb-4 text-gray-900 dark:text-white/90">
            Connect with me
          </h2>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-200/50 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-md transition-colors flex items-center gap-2"
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </a>
            ))}
          </div>
        </section>

        {/* Matrix Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/20 to-transparent" />

        {/* Projects Section */}
        <section className="bg-gray-50 dark:bg-black/20 p-4 rounded-lg border border-gray-200 dark:border-white/10">
          <h2 className="text-lg font-medium mb-4 text-gray-900 dark:text-white/90">
            Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-gray-200/50 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-md transition-colors"
              >
                <h3 className="font-medium">{project.name}</h3>
                <p className="text-sm text-gray-600 dark:text-white/60 mt-1">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Matrix Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/20 to-transparent" />

        {/* Booking Section */}
        <section className="bg-gray-50 dark:bg-black/20 p-4 rounded-lg border border-gray-200 dark:border-white/10">
          <h2 className="text-lg font-medium mb-4 text-gray-900 dark:text-white/90">
            Schedule a Meeting
          </h2>
          <a
            href="https://cal.com/twanluttik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-200/50 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-md transition-colors text-center w-full"
          >
            Book a time with me
          </a>
        </section>
      </div>
    </div>
  );
}
