"use client";

import { useEffect, useState } from "react";

export function TelegramStatus() {
  const [message, setMessage] = useState<string>("Loading...");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("/api/telegram");
        const data = await response.json();

        if (data.status === "success") {
          setMessage(data.message);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err: any) {
        console.log(err)
        setError(true);
      }
    };

    fetchMessage();
    // Refresh every 5 minutes
    const interval = setInterval(fetchMessage, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-black dark:text-white border bg-neutral-100 dark:bg-neutral-900 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium">
      <div
        className={`w-2 h-2 rounded-full mr-2 ${
          error ? "bg-red-500" : "bg-green-500"
        }`}
      />
      <span>{message}</span>
    </div>
  );
}
