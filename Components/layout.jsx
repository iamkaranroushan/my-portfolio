'use client'

import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/navbar'

const Layout = ({ children }) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollProgress(scrollPercent);
        };

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    // Convert scroll percentage to circle stroke offset
    const radius = 24;
    const stroke = 4;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scrollProgress / 100) * circumference;

    return (
        <div className="w-screen">
            <Navbar />
            {/* Large Screen Vertical Bar */}
            <div className="hidden lg:block bg-stone-200 fixed right-6 top-1/2 transform -translate-y-1/2 h-[200px] w-2 rounded-xl overflow-hidden z-50">
                <div
                    className="bg-primary w-full rounded-xl transition-all duration-200"
                    style={{ height: `${scrollProgress * 2}px` }}
                />
            </div>

            {/* Small Screen Circular Progress */}
            <div className="block lg:hidden fixed top-5 right-6 z-50">
                <svg width="60" height="60" className="transform -rotate-90">
                    <circle
                        cx="30"
                        cy="30"
                        r={radius}
                        stroke="#E5E7EB" // light gray background circle
                        strokeWidth={stroke}
                        fill="transparent"
                    />
                    <circle
                        cx="30"
                        cy="30"
                        r={radius}
                        stroke="#000000" // your primary color
                        strokeWidth={stroke}
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-200"
                    />
                </svg>
            </div>

            <main className="flex-grow justify-center w-full">
                {children}
            </main>
        </div>
    );
};

export default Layout;
