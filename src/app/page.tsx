"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { siX, siGithub } from "simple-icons";
import { Linkedin } from "lucide-react";

const projectImages = [
  { src: "/coatcheck.png", title: "coatcheck.app" },
  { src: "/limemap.png", title: "limemap.app" },
  { src: "/dotenvx.png", title: "dotenvx-gui" },
  { src: "/ollama-chat.png", title: "ollama-chat-gui" },
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-start justify-between py-16 px-5 gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
          <div className="flex flex-col gap-6 flex-1">
            <h1 className="font-bold text-2xl">Hi, I&rsquo;m Twan Luttik</h1>
            <p className="text-lg text-neutral-200">I build mobile apps (React Native) and web apps (Next.js), I enjoy the startup life & the work ethic mindset</p>
            <div className="flex gap-4">
              <a href="https://x.com/twanluttik" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors" title="X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: siX.svg }} />
              </a>
              <a href="https://github.com/twanluttik" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors" title="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: siGithub.svg }} />
              </a>
              <a href="https://linkedin.com/in/twanluttik" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors" title="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="relative w-48 h-48 rounded-lg overflow-hidden shrink-0">
            <Image
              src="/twan-profile.jpg"
              alt="Twan Luttik"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full items-center flex flex-col gap-y-4">
          {/* Project Title */}
          <button
            onClick={() => setCurrentImageIndex(currentImageIndex)}
            className="text-sm font-semibold text-white text-center hover:opacity-80 transition-opacity cursor-pointer w-fit"
          >
            {projectImages[currentImageIndex].title}
          </button>

          {/* Image Slider */}
          <div className="relative aspect-video rounded-lg overflow-hidden flex items-center justify-center self-start w-full">
            {projectImages.map((project, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Slider Indicators */}
          <div className="flex gap-2 justify-center h-3 items-center">
            {projectImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`rounded-full transition-all cursor-pointer h-2 ${
                  index === currentImageIndex
                    ? "bg-white w-6"
                    : "bg-neutral-500 w-2 hover:w-3 hover:h-3 hover:bg-neutral-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
         
        </div>
      </main>
    </div>
  );
}
