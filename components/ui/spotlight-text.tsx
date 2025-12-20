"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const SpotlightText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn("relative inline-block cursor-default select-none group", className)}
        >
            {/* Base Text - Dimmed/Ghost */}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/10 dark:from-white/20 dark:to-white/10 blur-[1px] transition-all duration-500 group-hover:blur-0 group-hover:first:text-white/50">
                {children}
            </span>

            {/* Spotlight Text - Revealed on Hover */}
            <span
                className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-cyan-300 pointer-events-none"
                style={{
                    maskImage: `radial-gradient(150px circle at ${position.x}px ${position.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(150px circle at ${position.x}px ${position.y}px, black, transparent)`,
                    opacity: opacity,
                    transition: "opacity 0.3s ease",
                    textShadow: "0 0 30px rgba(255,255,255,0.5)"
                }}
            >
                {children}
            </span>
        </div>
    );
};
