import { useEffect, useState } from 'react';

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
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
        transition: 'transform 1s, opacity 1s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <span className="loader">
        <span className="loader-inner"></span>
      </span>
    </div>
  );
}

export default Preloader;