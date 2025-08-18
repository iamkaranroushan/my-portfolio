"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { LuConstruction } from "react-icons/lu";

export default function FloatingBot() {
  const constraintsRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Store last position so it persists
  useEffect(() => {
    const saved = localStorage.getItem("bot-position");
    if (saved) setPosition(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("bot-position", JSON.stringify(position));
  }, [position]);

  return (
    <div
      ref={constraintsRef}
      className="fixed inset-0 pointer-events-none z-[9999]" // full screen invisible layer
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        onDragEnd={(e, info) => {
          setPosition({ x: info.point.x, y: info.point.y });
        }}
        className="pointer-events-auto w-56 h-20 rounded-md border bg-white shadow-lg flex items-center justify-around cursor-grab"
        style={{
          x: position.x,
          y: position.y,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-3xl"><LuConstruction /></span>
        <h1 className="text-center text-base">under Development </h1>
      </motion.div>
    </div>
  );
}
