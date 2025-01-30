import { useEffect, useState } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-mobile devices
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    setIsVisible(!isMobile);

    if (isMobile) return;

    let cursorX = 0;
    let cursorY = 0;
    let frameId: number;

    const animateCursor = () => {
      const diffX = position.x - cursorX;
      const diffY = position.y - cursorY;

      cursorX += diffX * 0.08;
      cursorY += diffY * 0.08;

      setPosition({ x: cursorX, y: cursorY });
      frameId = requestAnimationFrame(animateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const targetX = e.clientX + window.scrollX;
      const targetY = e.clientY + window.scrollY;
      setPosition({ x: targetX, y: targetY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    frameId = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'white',
        position: 'absolute',
        pointerEvents: 'none',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 9999,
        transition: 'transform 0.1s ease-out'
      }}
    />
  );
}

export default CustomCursor;