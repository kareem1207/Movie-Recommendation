"use client";
import { useEffect, useState } from "react";
import RockPaperScissors from "@/components/RockPaperScissors";

export default function ErrorPage({ error, reset }) {
  const [isOnline, setIsOnline] = useState(true);
  const [errorType, setErrorType] = useState("unknown");

  useEffect(() => {
    setIsOnline(navigator.onLine);
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));

    // Enhanced error type detection
    if (!isOnline) {
      setErrorType("offline");
    } else if (error?.message?.includes("404") || error?.statusCode === 404) {
      setErrorType("notFound");
    } else if (
      error?.message?.includes("fetch") ||
      error?.message?.includes("Failed to fetch")
    ) {
      setErrorType("api");
    } else {
      setErrorType("unknown");
    }

    return () => {
      window.removeEventListener("online", () => setIsOnline(true));
      window.removeEventListener("offline", () => setIsOnline(false));
    };
  }, [error, isOnline]);

  const errorMessages = {
    notFound:
      "404 - Page not found. Play Rock paper scissors with the browser while you navigate!",
    offline:
      "You're offline. Play Rock paper scissors with the browser until connection returns!",
    api: "API error occurred. Enjoy Rock paper scissors with the browser while we fix it!",
    unknown:
      "Something went wrong. Have fun with Rock paper scissors with the browser meanwhile!",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-8">
        {errorMessages[errorType]}
      </h1>
      <RockPaperScissors />
      <button
        onClick={reset}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
