"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Phone from "./parts/phone";
import ProjectsPhone from "./parts/projects-phone";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="min-h-screen w-full p-4 md:p-8 relative overflow-hidden">
      <div className="max-w-[420px] h-[844px] mx-auto grid grid-cols-1 items-center">
        <AnimatePresence mode="wait">
          {!showProjects ? (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-start-1 col-end-2 row-start-1 row-end-2 w-full"
            >
              <Phone onShowProjects={() => setShowProjects(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-start-1 col-end-2 row-start-1 row-end-2 w-full"
            >
              <ProjectsPhone onBack={() => setShowProjects(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
