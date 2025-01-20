"use client";

import { motion } from "framer-motion";
import { BsArrowLeft, BsGithub } from "react-icons/bs";
import PhoneHeader from "@/app/parts/phone-header";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/twanluttik/project1",
    preview: "/path-to-preview-image.png"
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    tech: ["Next.js", "Node.js", "MongoDB"],
    link: "https://github.com/twanluttik/project2",
    preview: "/path-to-preview-image.png"
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    tech: ["React Native", "Firebase", "Redux"],
    link: "https://github.com/twanluttik/project3",
    preview: "/path-to-preview-image.png"
  }
];

interface ProjectsPhoneProps {
  onBack: () => void;
}

export default function ProjectsPhone({ onBack }: ProjectsPhoneProps) {

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -180, scale: 0.9 }}
      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
      exit={{ opacity: 0, rotateY: 180, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="relative w-full max-w-[390px] h-[844px] bg-black rounded-[28px] overflow-hidden shadow-2xl border border-zinc-800"
    >
      {/* Top Status Bar */}
      <PhoneHeader sticky={false} />

      {/* Header */}
      <div className="pt-16 px-6">
        <div className="flex items-center justify-between mb-8">
          <motion.button
            onClick={onBack}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-zinc-400 hover:text-white"
          >
            <BsArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </motion.button>
          <h1 className="text-2xl font-bold text-white">Projects</h1>
          <div className="w-[60px]" /> {/* Spacer for alignment */}
        </div>
      </div>

      {/* Projects List */}
      <div className="px-6 pb-6 overflow-y-auto h-[calc(100%-120px)]">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="block rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 overflow-hidden group"
            >
              {project.preview && (
                <div className="relative h-48 bg-zinc-900">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                    <BsGithub className="w-12 h-12" />
                  </div>
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-zinc-700/50 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
