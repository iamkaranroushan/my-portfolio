"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
        className="pointer-events-auto w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 shadow-lg flex items-center justify-center cursor-grab"
        style={{
          x: position.x,
          y: position.y,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🤖
      </motion.div>
    </div>
  );
}
