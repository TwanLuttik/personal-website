"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SocialMediaList from "@/components/SocialMediaList";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <div className="--font-crimson-text flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex items-center gap-8">
        <div className="flex flex-col gap-y-5 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <MusicPlayer />
            </motion.div>
            <motion.span
              className="font-mono text-sm uppercase tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                animation: "textColorCycle 3s ease-in-out infinite",
                mixBlendMode: "screen",
                color: "#ffffff",
              }}
            >
              Twan De Burger
            </motion.span>
            <style jsx>{`
              @keyframes textColorCycle {
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
          </div>
          <motion.div
            className="flex flex-row items-center gap-x-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Image
                src="/twan-profile.jpg"
                alt="Twan Luttik"
                className="absolute inset-0 rounded-[20px] blur-2xl opacity-60 scale-105"
                width={250}
                height={250}
                aria-hidden="true"
              />
              <Image
                src="/twan-profile.jpg"
                alt="Twan Luttik"
                className="relative rounded-[20px] hover:scale-105 transition-all duration-500"
                width={250}
                height={250}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <SocialMediaList />
            </motion.div>
          </motion.div>
          <motion.h1
            className="font-semibold text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Twan Luttik
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
