import React, { useState, useEffect } from 'react';

/**
 * A custom hook to track the mouse position.
 * @returns An object with the x and y coordinates of the mouse.
 */
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: globalThis.MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

const MouseTorch = () => {
  const { x, y } = useMousePosition();

  return (
    <div className="pointer-events-none fixed inset-0 z-30 transition duration-300" style={{ background: `radial-gradient(300px at ${x}px ${y}px, rgba(0, 240, 255, 0.10), transparent 80%)` }} />
  );
};

export default MouseTorch;