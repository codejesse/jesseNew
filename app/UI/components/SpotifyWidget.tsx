"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SiSpotify } from "react-icons/si";

type SpotifyData = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
  message?: string;
};

export default function SpotifyWidget() {
  const [data, setData] = useState<SpotifyData>({ isPlaying: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch("/api/spotify");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch Spotify status", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyData();
    const interval = setInterval(fetchSpotifyData, 30000); // Polling every 30s
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 mt-4 text-xs font-clash text-gray-500 animate-pulse">
        <SiSpotify className="w-4 h-4" />
        Loading Spotify status...
      </div>
    );
  }

  if (!data.isPlaying || !data.title) {
    return (
      <div className="flex flex-col items-center md:items-start lg:items-start mt-4">
        <p className="text-[10px] md:text-xs font-clash text-gray-400 mb-1">
          Jesse is listening to...
        </p>
        <div className="flex items-center gap-2 border border-gray-200 dark:border-white/10 rounded-full py-1.5 px-3 bg-gray-50 dark:bg-[#1a1a1a]">
          <SiSpotify className="w-4 h-4 text-gray-400" />
          <span className="text-xs font-clash text-gray-500">Not listening to music</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center md:items-end mt-4">
      <p className="text-[10px] md:text-xs font-clash text-gray-400 mb-1 flex items-center gap-1.5">
        Jesse is listening to...
        {/* Playing Pulse Animation */}
        <span className="flex gap-0.5 items-end h-2.5">
            <span className="w-0.5 bg-green-500 h-[30%] animate-[bounce_1s_infinite_100ms]"></span>
            <span className="w-0.5 bg-green-500 h-[100%] animate-[bounce_1s_infinite_0s]"></span>
            <span className="w-0.5 bg-green-500 h-[60%] animate-[bounce_1s_infinite_200ms]"></span>
        </span>
      </p>
      <a 
        href={data.songUrl} 
        target="_blank" 
        rel="noreferrer"
        className="flex items-center gap-2 border border-gray-200 dark:border-white/10 rounded-full p-1 pr-3 bg-gray-50 dark:bg-[#1a1a1a] hover:bg-white dark:hover:bg-[#2a2a2a] transition-colors group max-w-[200px]"
      >
        {data.albumImageUrl ? (
          <Image 
            src={data.albumImageUrl} 
            alt="Album Art" 
            width={24} 
            height={24} 
            className="rounded-full animate-[spin_10s_linear_infinite]" 
          />
        ) : (
          <SiSpotify className="w-5 h-5 text-green-500 ml-1" />
        )}
        <div className="flex flex-col overflow-hidden">
          <span className="text-[11px] font-clash font-medium text-black dark:text-white truncate group-hover:text-green-500 transition-colors">
            {data.title}
          </span>
          <span className="text-[9px] font-clash text-gray-500 truncate">
            {data.artist}
          </span>
        </div>
      </a>
    </div>
  );
}
