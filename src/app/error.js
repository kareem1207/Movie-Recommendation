"use client";
import React, { useState } from "react";

const ErrorPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        searchQuery
      )}`;
      window.open(googleSearchUrl, "_blank");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        Something went wrong. Please try again later.
      </h1>

      <form onSubmit={handleSearch} className="w-full max-w-md">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Google..."
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      <button
        onClick={() => window.location.reload()}
        className="mt-6 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
