import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TransitionLink from '../components/TransitionLink';

function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  type NavigationLink =
    | { name: string; to: string };

  const links: NavigationLink[] = [
    { name: t('header.services'), to: '/#services' },
    { name: t('header.cases'), to: '/#case-studies' },
    { name: t('header.works'), to: '/projects' },
    { name: t('header.experience'), to: '/#experience' },
    { name: t('header.contact'), to: '/#contact' }
  ];

  const handleNavigationClick = (to: string) => {
    setIsMenuOpen(false);

    if (to === '/projects' && location.pathname === '/projects') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky w-full top-0 left-0 z-50">
        <div className="header flex flex-row items-center justify-between gap-4 px-5 py-3 backdrop-blur-md bg-black/30 border-b border-white/10">
          <h1 className={`primary-gradient name ${isMenuOpen ? 'invisible' : ''}`}>
            <TransitionLink to="/#hero" onClick={() => setIsMenuOpen(false)}>
              KARATITSYN
            </TransitionLink>
          </h1>

          <ul className="nav hidden text-center text-[14px] gap-[25px] md:flex md:flex-row md:text-[16px]">
            {links.map((link, index) => (
              <li key={link.name} className="w-full md:w-auto text-center hover:text-[#C2BFBD] transition-all duration-100">
                <TransitionLink to={link.to} onClick={() => handleNavigationClick(link.to)}>
                  {link.name}
                </TransitionLink>
                {index < links.length - 1 && <div className="h-[1px] bg-white opacity-20 my-4 md:hidden" />}
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <button
              className="transition-all duration-500 whitespace-nowrap font-medium mt-0 bg-white text-black light-shadow px-12 py-3 text-lg rounded-full"
              data-cal-link="kiril-karatitsyn/free-consultation-call"
              data-cal-namespace="free-consultation-call"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              id="Button"
            >
              {t('header.bookCall')}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              className={`whitespace-nowrap font-medium mt-0 bg-white text-black light-shadow px-5 py-2 text-sm rounded-full ${
                isMenuOpen
                  ? 'opacity-0 pointer-events-none transition-none'
                  : 'opacity-100 transition-all duration-500'
              }`}
              data-cal-link="kiril-karatitsyn/free-consultation-call"
              data-cal-namespace="free-consultation-call"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              id="Button"
            >
              {t('header.bookCall')}
            </button>
            <div
              className={`burger flex relative z-[60] items-center justify-end w-[30px] h-[18px] md:hidden ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Menu - positioned outside header */}
      <ul className={`nav md:hidden text-[14px] md:text-[16px] gap-[25px] text-center ${isMenuOpen ? 'open backdrop-blur-md bg-black/80' : ''}`}>
        {links.map((link, index) => (
          <li key={link.name} className="w-full md:w-auto text-center hover:text-[#C2BFBD] transition-all duration-100">
            <TransitionLink to={link.to} onClick={() => handleNavigationClick(link.to)}>
              {link.name}
            </TransitionLink>
            {index < links.length - 1 && <div className="h-[1px] bg-white opacity-20 my-4 md:hidden" />}
          </li>
        ))}
        <button
          className="transition-all duration-500 whitespace-nowrap font-medium mt-4 bg-white text-black light-shadow px-12 py-3 text-lg rounded-full"
          data-cal-link="kiril-karatitsyn/free-consultation-call"
          data-cal-namespace="free-consultation-call"
          data-cal-config='{"layout":"month_view","theme":"dark"}'
          id="Button"
        >
          {t('header.bookCall')}
        </button>
      </ul>
    </>
  );
}

export default Header;
