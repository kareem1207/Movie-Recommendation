"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function SearchPage() {
  const params = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get movie title from URL path parameter and decode it
  const movieTitle = params.id ? decodeURIComponent(params.id) : '';
  
  useEffect(() => {
    if (movieTitle) {
      searchGoogle();
    }
  }, [movieTitle]);

  const searchGoogle = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_SEARCH_ENGINE_ID}&q=${movieTitle} movie`
      );
      const data = await response.json();
      setResults(data.items || []);
    } catch (error) {
      console.error("Error searching:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl mb-4">Search results for: {movieTitle}</h1>
      {loading && <div>Loading...</div>}
      <div className="space-y-4">
        {results.map((result) => (
          <div key={result.link} className="border-b pb-4">
            <a href={result.link} className="text-xl text-blue-600 hover:underline">
              {result.title}
            </a>
            <p className="text-green-700 text-sm">{result.link}</p>
            <p>{result.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}