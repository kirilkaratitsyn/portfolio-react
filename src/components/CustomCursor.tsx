import { useEffect, useState } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-mobile devices
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    setIsVisible(!isMobile);

    if (isMobile) return;

    let frameId: number;

    const animateCursor = () => {
      const diffX = targetPosition.x - position.x;
      const diffY = targetPosition.y - position.y;

      // Update position with easing
      setPosition({
        x: position.x + diffX * 0.5,
        y: position.y + diffY * 0.5
      });

      frameId = requestAnimationFrame(animateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const targetX = e.clientX + window.scrollX;
      const targetY = e.clientY + window.scrollY;
      setTargetPosition({ x: targetX, y: targetY });

      // Check if cursor is over contact or footer sections
      const targetElement = document.elementFromPoint(e.clientX, e.clientY);
      const isOverDarkSection = targetElement?.closest('#contact, #footer');
      setIsDarkMode(!!isOverDarkSection);
    };

    document.addEventListener('mousemove', handleMouseMove);
    frameId = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, [position, targetPosition]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: isDarkMode ? 'black' : 'white',
        position: 'absolute',
        pointerEvents: 'none',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 9999,
        transition: 'transform 0.1s ease-out',
        transform: 'translate(-50%, -50%)' // Center the cursor on the position
      }}
    />
  );
}

export default CustomCursor;