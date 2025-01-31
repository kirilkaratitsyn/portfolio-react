import { useEffect, useState } from 'react';

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsLoading(false), 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      id="preloader"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        zIndex: 9999,
        transition: 'opacity 1s ease-out',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isFadingOut ? 0 : 1
      }}
    >
      <span className="loader">
        <span className="loader-inner"></span>
      </span>
    </div>
  );
}

export default Preloader;