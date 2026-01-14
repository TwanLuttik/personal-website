"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

interface SocialLink {
  icon: React.ReactNode;
  username: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <FaGithub className="w-4 h-4" />,
    username: "@twanluttik",
    href: "https://github.com/twanluttik",
  },
  {
    icon: <FaLinkedin className="w-4 h-4" />,
    username: "Twan Luttik",
    href: "https://linkedin.com/in/twanluttik",
  },
  {
    icon: <RiTwitterXFill className="w-4 h-4" />,
    username: "@twanluttik",
    href: "https://twitter.com/twanluttik",
  },
  {
    icon: <Mail className="w-4 h-4" />,
    username: "contact@twan.dev",
    href: "mailto:contact@twan.dev",
  },
];

export default function SocialMediaList() {
  return (
    <div className="flex flex-col gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group relative overflow-hidden"
        >
          <div
            className="p-1 transition-all duration-300"
            style={{
              animation: `colorCycle 3s ease-in-out infinite`,
              animationDelay: `${index * 0.2}s`,
              mixBlendMode: "screen",
              color: "#ffffff",
            }}
          >
            {link.icon}
          </div>
          <style jsx>{`
            @keyframes colorCycle {
              0% {
                color: #a78bfa;
              }
              33% {
                color: #60a5fa;
              }
              66% {
                color: #ffffff;
              }
              100% {
                color: #a78bfa;
              }
            }
          `}</style>
        </a>
      ))}
    </div>
  );
}
