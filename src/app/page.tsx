"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { siX, siGithub } from "simple-icons";
import { Linkedin } from "lucide-react";

const projectImages = [
  { src: "/gtavi.png", title: "gtavi.social" },
  { src: "/coatcheck.png", title: "coatcheck.app" },
  { src: "/limemap.png", title: "limemap.app" },
  { src: "/dotenvx.png", title: "dotenvx-gui" },
  { src: "/ollama-chat.png", title: "ollama-chat-gui" },
];

const sponsoredPeople = [
  {
    name: "Marc Rousavy",
    github: "mrousavy",
    url: "https://github.com/mrousavy",
    avatar: "https://avatars.githubusercontent.com/u/15199031?v=4",
    project: "react-native-vision-camera",
    projectUrl: "https://github.com/mrousavy/react-native-vision-camera",
    amount: "$20/month",
  },
  {
    name: "Theo Browne",
    github: "t3dotgg",
    url: "https://github.com/t3dotgg",
    avatar: "https://avatars.githubusercontent.com/u/6751787?v=4",
    amount: "$20/month",
    active: false,
  },
  {
    name: "Gorhom",
    github: "gorhom",
    url: "https://github.com/gorhom",
    avatar: "https://avatars.githubusercontent.com/u/4061838?v=4",
    project: "react-native-bottom-sheet",
    projectUrl: "https://github.com/gorhom/react-native-bottom-sheet",
    amount: "$50 one-time",
  },
];

const socialLinks = [
  {
    href: "https://x.com/twanluttik",
    title: "X",
    icon: (
      <svg
        className="size-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        dangerouslySetInnerHTML={{ __html: siX.svg }}
      />
    ),
  },
  {
    href: "https://github.com/twanluttik",
    title: "GitHub",
    icon: (
      <svg
        className="size-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        dangerouslySetInnerHTML={{ __html: siGithub.svg }}
      />
    ),
  },
  {
    href: "https://linkedin.com/in/twanluttik",
    title: "LinkedIn",
    icon: <Linkedin className="size-4" />,
  },
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
    <main className="page-shell gap-16 md:gap-20">
      {/* Hero */}
      <section className="flex flex-col gap-10 md:flex-row md:items-center md:gap-12">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="section-label">Mobile & Web Developer</p>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
              Hi, I&rsquo;m Twan Luttik
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build mobile apps with React Native and web apps with Next.js.
              I enjoy the startup life and the work ethic mindset.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground">
              From the Netherlands 🇳🇱
            </span>
            <button
              type="button"
              onMouseEnter={() => setShowTattooImage(true)}
              onMouseLeave={() => setShowTattooImage(false)}
              onClick={handleTattooClick}
              className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:bg-secondary hover:text-foreground"
            >
              First startup tattoo
            </button>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.title}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card/40 text-muted-foreground transition-all hover:border-primary/30 hover:bg-secondary hover:text-foreground"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-44 shrink-0 sm:w-52 md:mx-0 md:w-56">
          <div className="absolute -inset-3 rounded-[1.75rem] bg-linear-to-br from-primary/15 via-transparent to-blue-500/10 blur-xl" />
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl shadow-black/40">
            <Image
              src="/twan-profile.jpg"
              alt="Twan Luttik"
              fill
              priority
              className={`object-cover transition-opacity duration-500 ${
                showTattooImage ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src="/notify-tattoo.jpeg"
              alt="First startup tattoo"
              fill
              className={`object-cover transition-opacity duration-500 ${
                showTattooImage ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </section>

      {/* Projects slider (original) */}
      <div className="w-full items-center flex flex-col gap-y-4">
        <button
          onClick={() => setCurrentImageIndex(currentImageIndex)}
          className="text-sm font-semibold text-white text-center hover:opacity-80 transition-opacity cursor-pointer w-fit"
        >
          {projectImages[currentImageIndex].title}
        </button>

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

      {/* Sponsors */}
      <section className="flex w-full flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <p className="section-label">Open source</p>
          <h2 className="text-xl font-semibold sm:text-2xl">
            People I&rsquo;ve sponsored on GitHub
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
          {sponsoredPeople.map((person) => (
            <div
              key={person.github}
              className="card-surface flex items-center gap-4 p-4 transition-all hover:border-primary/20 hover:bg-card"
            >
              <a
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 shrink-0 overflow-hidden rounded-full ring-1 ring-border transition-opacity hover:opacity-80"
              >
                <Image
                  src={person.avatar}
                  alt={person.name}
                  width={48}
                  height={48}
                  className="size-full object-cover"
                />
              </a>
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={person.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate font-semibold text-foreground transition-opacity hover:opacity-70"
                  >
                    {person.name}
                  </a>
                  <div className="flex shrink-0 items-center gap-1.5">
                    {person.amount && (
                      <p
                        className={`text-xs font-medium ${
                          person.active === false
                            ? "text-muted-foreground/60"
                            : "text-emerald-400"
                        }`}
                      >
                        {person.amount}
                      </p>
                    )}
                    {person.active === false && (
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                        inactive
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">@{person.github}</p>
                {person.project && person.projectUrl && (
                  <a
                    href={person.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 w-fit text-xs text-primary/80 transition-colors hover:text-primary"
                  >
                    {person.project}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
