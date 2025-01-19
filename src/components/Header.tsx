import { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky w-full top-0 left-0">
      <div className="header flex flex-row justify-between items-center p-[15px]">
        <h1 className={`primary-gradient name ${isMenuOpen ? 'invisible' : ''}`}>
          <a href="#hero">KARATITSYN</a>
        </h1>
        <ul className={`nav md:flex md:flex-row gap-[25px] ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#about_me" onClick={() => setIsMenuOpen(false)}>About Me</a></li>
          <li><a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a></li>
          <li><a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a></li>
          <li><a href="#work" onClick={() => setIsMenuOpen(false)}>Works</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Me</a></li>
          <li><a href="source/Resume.pdf" download onClick={() => setIsMenuOpen(false)}>Resume</a></li>
          <div className="mobile-time-location md:hidden">
            <span>{currentTime}</span> Berlin, DE
          </div>
        </ul>
        <div className="md:flex hidden">
          <span className="mr-1">{currentTime}</span> Berlin, DE
        </div>
        <div 
          className={`burger flex relative z-50 items-center justify-end w-[30px] h-[18px] md:hidden ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;