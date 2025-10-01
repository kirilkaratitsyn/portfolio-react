import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  type NavigationLink =
    | { name: string; to: string }
    | { name: string; href: string; download?: boolean };

  const links: NavigationLink[] = [
    { name: t('header.about'), to: '/#about_me' },
    { name: t('header.process'), to: '/#process' },
    { name: t('header.faq'), to: '/#faq' },
    { name: t('header.works'), to: '/#work' },
    { name: t('header.blog'), to: '/blog' },
    { name: t('header.contact'), to: '/#contact' },
    { name: t('header.resume'), href: 'source/Resume.pdf', download: true },
  ];

  return (
    <>
      <header className="sticky w-full top-0 left-0 z-50">
        <div className="header flex flex-row justify-between items-center p-[15px] backdrop-blur-md bg-black/30 border-b border-white/10">
          <h1 className={`primary-gradient name ${isMenuOpen ? 'invisible' : ''}`}>
            <Link to="/#hero" onClick={() => setIsMenuOpen(false)}>
              KARATITSYN
            </Link>
          </h1>
          <ul className="nav md:flex md:flex-row text-[14px] md:text-[16px] gap-[25px] text-center">
            {links.map((link, index) => (
              <li key={link.name} className="w-full md:w-auto text-center hover:text-[#C2BFBD] transition-all duration-100">
                {'href' in link ? (
                  <a href={link.href} onClick={() => setIsMenuOpen(false)} download={link.download}>
                    {link.name}
                  </a>
                ) : (
                  <Link to={link.to} onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </Link>
                )}
                {index < links.length - 1 && <div className="h-[1px] bg-white opacity-20 my-4 md:hidden" />}
              </li>
            ))}
            <div className="mobile-time-location md:hidden w-full text-center">
              <div className="h-[1px] bg-white opacity-20 my-4" />
              <span>{currentTime}</span> Berlin, DE
            </div>
          </ul>
          <div className="md:flex hidden ">
            <span className="mr-1">{currentTime}</span> Berlin, DE
          </div>
          <div 
            className={`burger flex relative z-[60] items-center justify-end w-[30px] h-[18px] md:hidden ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Menu - positioned outside header */}
      <ul className={`nav md:hidden text-[14px] md:text-[16px] gap-[25px] text-center ${isMenuOpen ? 'open backdrop-blur-md bg-black/80' : ''}`}>
        {links.map((link, index) => (
          <li key={link.name} className="w-full md:w-auto text-center hover:text-[#C2BFBD] transition-all duration-100">
            {'href' in link ? (
              <a href={link.href} onClick={() => setIsMenuOpen(false)} download={link.download}>
                {link.name}
              </a>
            ) : (
              <Link to={link.to} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            )}
            {index < links.length - 1 && <div className="h-[1px] bg-white opacity-20 my-4 md:hidden" />}
          </li>
        ))}
        <div className="mobile-time-location md:hidden w-full text-center">
          <div className="h-[1px] bg-white opacity-20 my-4" />
          <span>{currentTime}</span> Berlin, DE
        </div>
      </ul>
    </>
  );
}

export default Header;
