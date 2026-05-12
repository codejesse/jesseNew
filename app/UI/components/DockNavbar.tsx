"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const navItems = [
    { name: "Home", icon: "🏠" },
    { name: "Projects", icon: "💼" },
    { name: "Blog", icon: "📰" },
    { name: "xplore", icon: "🧪" },
];

interface DockNavbarProps {
    active: string;
    setActive: (tab: string) => void;
}

export default function DockNavbar({ active, setActive }: DockNavbarProps) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            {/* Liquid Glass Container */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-full
                      bg-white/50 dark:bg-[#1e1e1e]/60
                      backdrop-blur-xl border border-white/60 dark:border-white/10
                      shadow-[0_4px_24px_0_rgba(0,0,0,0.1)] dark:shadow-[0_4px_24px_0_rgba(0,0,0,0.4)]">

                {/* Nav Items Container */}
                <div className="flex items-center gap-1">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActive(item.name)}
                            className="relative flex flex-col items-center justify-center w-[60px] h-[52px] rounded-full transition-colors duration-300"
                        >
                            {/* Dark Blob Active Highlight */}
                            {active === item.name && (
                                <motion.div
                                    layoutId="active-pill"
                                    // Dark background for the blob
                                    className="absolute inset-0 bg-[#1a1a1a] rounded-full shadow-sm border border-black/20"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}

                            <span className="relative z-10 text-xl drop-shadow-sm mb-0.5">{item.icon}</span>
                            {/* Text turns white when active */}
                            <span className={`relative z-10 text-[10px] font-medium tracking-wide transition-colors duration-300
                                ${active === item.name ? "text-white" : "text-gray-600 dark:text-gray-400"}
                            `}>
                                {item.name}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Vertical Divider */}
                <div className="w-[1px] h-8 bg-gray-400/30 dark:bg-gray-500/30 mx-1 rounded-full"></div>

                {/* Theme Toggle Button */}
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 hover:bg-black/5 dark:hover:bg-white/10"
                    aria-label="Toggle Dark Mode"
                >
                    {mounted ? (
                        theme === 'dark' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                                <circle cx="12" cy="12" r="5"/>
                                <line x1="12" y1="1" x2="12" y2="3"/>
                                <line x1="12" y1="21" x2="12" y2="23"/>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                <line x1="1" y1="12" x2="3" y2="12"/>
                                <line x1="21" y1="12" x2="23" y2="12"/>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                            </svg>
                        )
                    ) : (
                        <div className="w-5 h-5" />
                    )}
                </button>

                {/* Profile Avatar */}
                <div className="flex items-center justify-center w-11 h-11 duration-300 mr-1 cursor-pointer">
                    <Image
                        src="/jesse-memoji-1.svg"
                        alt="Jesse"
                        width={44}
                        height={44}
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}