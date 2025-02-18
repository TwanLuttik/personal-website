"use client";

import { useEffect, useState } from "react";

interface TelegramState {
  lastMessage: string;
  lastUpdateTime: string;
  status: "online" | "offline" | "away";
  lastActivity: string;
}

export function TelegramStatus() {
  const [state, setState] = useState<TelegramState | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("/api/telegram");
        const data = await response.json();

        if (data.state) {
          setState(data.state);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err: unknown) {
        console.log(err);
        setError(true);
      }
    };

    fetchMessage();
    // Refresh every 5 minutes
    const interval = setInterval(fetchMessage, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const displayMessage = state?.lastMessage || (error ? "Failed to load status" : "Loading...");

  return (
    <div className="text-black dark:text-white border bg-neutral-100 dark:bg-neutral-900 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
      <div
        className={`w-2 h-2 rounded-full mr-2 ${
          error ? "bg-red-500" : state?.status === "online" ? "bg-green-500" : "bg-yellow-500"
        }`}
      />
      <span>{displayMessage}</span>
    </div>
  );
}
