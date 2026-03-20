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

const sponsoredPeople = [
  { name: "Marc Rousavy", github: "mrousavy", url: "https://github.com/mrousavy", avatar: "https://avatars.githubusercontent.com/u/15199031?v=4" },
  { name: "Theo Browne", github: "t3dotgg", url: "https://github.com/t3dotgg", avatar: "https://avatars.githubusercontent.com/u/6751787?v=4" },
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTattooImage, setShowTattooImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleTattooClick = () => {
    setShowTattooImage(true);
    setTimeout(() => {
      setShowTattooImage(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-start justify-between py-16 px-5 gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
          <div className="flex flex-col gap-6 flex-1">
            <h1 className="font-bold text-2xl">Hi, I&rsquo;m Twan Luttik</h1>
            <div className="flex flex-col gap-3">
              <p className="text-lg text-neutral-200">I build mobile apps (React Native) and web apps (Next.js). I enjoy the startup life & the work ethic mindset.</p>
              <div className="w-fit">
                <span className="inline-block bg-white text-black px-4 py-2 rounded-2xl text-sm font-medium">From the Netherlands 🇳🇱</span>
              </div>
            </div>
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
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${showTattooImage ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <Image
                src="/notify-tattoo.jpeg"
                alt="First startup tattoo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <button
            onMouseEnter={() => setShowTattooImage(true)}
            onMouseLeave={() => setShowTattooImage(false)}
            onClick={handleTattooClick}
            className="text-sm font-medium text-white bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg transition-colors"
          >
            First startup tattoo
          </button>
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

        <div className="w-full flex flex-col gap-6">
          <h2 className="font-bold text-xl">People I&rsquo;ve Sponsored</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {sponsoredPeople.map((person) => (
              <a
                key={person.github}
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-all"
              >
                <div className="w-12 h-12 rounded-full shrink-0 overflow-hidden">
                  <Image
                    src={person.avatar}
                    alt={person.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-white">{person.name}</p>
                  <p className="text-sm text-neutral-400">@{person.github}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
