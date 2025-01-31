"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-125 transition-transform duration-200 ease-out"
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      {/* Fixed background container */}
      <div className="absolute inset-0 rounded-[18px] overflow-hidden">
        {/* Fixed background image */}
        <div
          className="absolute inset-0 -z-30 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2387d087' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Static gradient background */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(135, 208, 135, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 0% 0%, rgba(135, 208, 135, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 100% 100%, rgba(135, 208, 135, 0.1) 0%, transparent 50%)
            `
          }}
        />

        {/* Static mesh grid */}
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(135, 208, 135, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(135, 208, 135, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Card container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#101a10]/60 text-[#87d087] border border-[#264724] p-5 rounded-[18px]
                  relative backdrop-blur-md shadow-xl"
      >
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen w-full p-4 md:p-8 relative overflow-hidden bg-[#080d08]">
      <div className="max-w-[420px] h-[844px] mx-auto items-center space-y-2.5">
        <AnimatePresence mode="wait">
          <Card>
            <p className="tracking-tight text-xl mb-4">Twan Luttik</p>
            <div className="flex flex-row items-center gap-x-4 justify-center">
              <SocialIcon href="https://instagram.com/yourusername">
                <FaInstagram color="#dcf7dc" size={22} className="hover:text-[#E1306C] transition-colors duration-300" />
              </SocialIcon>
              <SocialIcon href="https://twitter.com/yourusername">
                <FaXTwitter color="#dcf7dc" size={22} className="hover:text-[#1DA1F2] transition-colors duration-300" />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com/in/yourusername">
                <FaLinkedin color="#dcf7dc" size={22} className="hover:text-[#0077B5] transition-colors duration-300" />
              </SocialIcon>
            </div>
          </Card>
        </AnimatePresence>
      </div>
    </div>
  );
}
