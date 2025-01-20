"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BsGithub,
  BsGeoAlt,
  BsTwitterX,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import PhoneHeader from "@/app/parts/phone-header";
import { RiHome3Fill } from "react-icons/ri";
import { PiProjectorScreenBold } from "react-icons/pi";

const navItems = [
  { icon: RiHome3Fill, label: "Home" },
  { icon: PiProjectorScreenBold, label: "Projects" },
];

const socialLinks = [
  {
    icon: BsGithub,
    label: "GitHub",
    url: "https://github.com/twanluttik",
    color: "hover:text-white",
  },
  {
    icon: BsTwitterX,
    label: "Twitter",
    url: "https://twitter.com/twanluttik",
    color: "hover:text-blue-400",
  },
  {
    icon: BsLinkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/twanluttik",
    color: "hover:text-blue-500",
  },
  {
    icon: BsInstagram,
    label: "Instagram",
    url: "https://instagram.com/twanluttik",
    color: "hover:text-pink-500",
  },
];

export default function Phone({
  onShowProjects,
}: {
  onShowProjects: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="relative w-full max-w-[390px] h-[844px] rounded-[28px] overflow-hidden"
    >
      <div className="h-full w-full flex flex-col">
        <div className="flex-1 overflow-hidden px-1">
          <PhoneHeader />

          <div className="relative h-[calc(100%-60px)]">
            <div className="w-full max-w-md mx-auto space-y-4 py-4">
              {/* Location Map */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-[#1F1F1F] rounded-2xl overflow-hidden border border-zinc-700/50"
              >
                <div className="relative h-40 bg-[#1F1F1F]">
                  <Image
                    src={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-123.1207,49.2827,11,0/400x200@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
                    alt="Vancouver location"
                    fill
                    className="object-cover"
                  />
                  {/* Pulsing Location Dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute w-4 h-4 -left-0.5 -top-0.5 bg-blue-500/20 rounded-full animate-ping" />
                      <div
                        className="absolute w-8 h-8 -left-2.5 -top-2.5 bg-blue-500/20 rounded-full animate-ping"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div className="relative w-3 h-3 bg-blue-500 rounded-full shadow-lg" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center gap-2">
                      <BsGeoAlt className="text-blue-400" />
                      <span className="text-white font-medium">
                        Vancouver, Canada
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Github Activity */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="bg-[#1F1F1F] rounded-2xl p-4 shadow-lg border border-zinc-700/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BsGithub className="text-xl" />
                  <h2 className="text-zinc-100 font-medium">Latest Commit</h2>
                </div>
                <p className="text-zinc-300 text-sm mb-2">
                  feat: implemented new notification system
                </p>
                <p className="text-zinc-400 text-xs">
                  2 hours ago • personal-website
                </p>
              </motion.div> */}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="bg-[#1F1F1F] rounded-2xl p-4 border border-zinc-700/50"
              >
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-xl bg-[#303030] border border-zinc-600/50 ${link.color} transition-colors duration-200`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <link.icon className="text-xl" color="white" />
                      <span className="text-sm text-white font-medium">
                        {link.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Live Activities */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="bg-[#1F1F1F] backdrop-blur-md rounded-2xl p-4 shadow-lg border border-zinc-700/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BsClock className="text-xl" />
                  <h2 className="text-zinc-100 font-medium">Live Activities</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-zinc-300 text-sm">Coding Session</p>
                      <p className="text-zinc-400 text-xs">
                        VS Code • React Development
                      </p>
                    </div>
                    <span className="text-emerald-400 text-xs">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-zinc-300 text-sm">Spotify</p>
                      <p className="text-zinc-400 text-xs">
                        Lo-Fi Beats • Coding Mix
                      </p>
                    </div>
                    <span className="text-zinc-400 text-xs">2h 15m</span>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="relative px-0 pb-8">
          <div className="bg-[#1F1F1F] backdrop-blur-xl shadow-2xl rounded-2xl items-center flex flex-row justify-center px-6 py-3 border border-zinc-700/50">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => {
                    if (item.label === "Projects") onShowProjects()
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white transition-all"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
