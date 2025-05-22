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

    return (
        <div>
            <Navbar />
            <div className=" bg-stone-200 fixed right-6 top-1/2 transform -translate-y-1/2 h-[200px] w-2 rounded-xl overflow-hidden z-50">
                <div
                    className="bg-primary w-full rounded-xl transition-all duration-200"
                    style={{ height: `${scrollProgress * 2}px` }} // 100% scroll = 200px
                />
            </div>
            {children}
        </div>
    );
};

export default Layout;
