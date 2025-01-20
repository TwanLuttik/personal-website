"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PhoneHeaderProps {
  className?: string;
  showTime?: boolean;
  showLocation?: boolean;
  showBattery?: boolean;
  sticky?: boolean;
}

export default function PhoneHeader({
  className = "",
  showTime = true,
  showLocation = true,
  showBattery = true,
}: PhoneHeaderProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const vancouverTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Vancouver",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(vancouverTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`mt-1 w-full bg-[#1F1F1F] rounded-full z-30 px-8 py-3 flex items-center justify-between ${className}`}
    >
      <div className="flex items-center gap-2">
        {showTime && (
          <>
            <span className="text-sm font-medium tracking-tighter text-white">
              {time}
            </span>
            {showLocation && (
              <>
                <div className="w-1 h-1 rounded-full bg-zinc-400"></div>
                <span className="text-sm text-zinc-400">Vancouver</span>
              </>
            )}
          </>
        )}
      </div>
      <div className="flex items-center gap-2">
        {showBattery && (
          <div className="flex items-center gap-1">
            <span className="text-[12px] font-medium tracking-tight text-neutral-200">
              52%
            </span>
            <div className="relative w-6 h-[11px]">
              <div className="absolute inset-0 rounded-sm border border-white"></div>
              <div className="absolute inset-y-0 left-0 w-[52%] bg-white rounded-[2px] m-[2px]"></div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
  // return (
  //   <motion.div
  //     initial={{ opacity: 0 }}
  //     animate={{ opacity: 1 }}
  //     transition={{ duration: 0.3 }}
  //     className={`${
  //       sticky ? "sticky" : "absolute"
  //     } top-0 w-full bg-black/80 backdrop-blur-md z-30 px-8 py-3 flex items-center justify-between ${className}`}
  //   >
  //     <div className="flex items-center gap-2">
  //       {showTime && (
  //         <>
  //           <span className="text-sm font-medium tracking-tighter text-white">
  //             {time}
  //           </span>
  //           {showLocation && (
  //             <>
  //               <div className="w-1 h-1 rounded-full bg-zinc-400"></div>
  //               <span className="text-sm text-zinc-400">Vancouver</span>
  //             </>
  //           )}
  //         </>
  //       )}
  //     </div>
  //     <div className="flex items-center gap-2">
  //       {showBattery && (
  //         <div className="flex items-center gap-1">
  //           <span className="text-sm font-medium tracking-tight text-white">
  //             52%
  //           </span>
  //           <div className="relative w-6 h-3">
  //             <div className="absolute inset-0 rounded-sm border border-white"></div>
  //             <div className="absolute inset-y-0 left-0 w-[52%] bg-white rounded-[2px] m-[2px]"></div>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </motion.div>
  // );
}
