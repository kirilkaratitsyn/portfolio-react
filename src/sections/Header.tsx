import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import TransitionLink from '../components/TransitionLink';

type NavigationLink = {
  name: string;
  to: string;
};

function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isCompact, setIsCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    setIsCompact(lastScrollY.current > 8);

    const handleScroll = () => {
      const nextScrollY = window.scrollY;
      const distance = nextScrollY - lastScrollY.current;

      if (nextScrollY <= 8) {
        setIsCompact(false);
      } else if (distance > 4) {
        setIsCompact(true);
      } else if (distance < -4) {
        setIsCompact(false);
      }

      lastScrollY.current = nextScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links: NavigationLink[] = [
    { name: t('header.services'), to: '/#services' },
    { name: t('header.cases'), to: '/#case-studies' },
    { name: t('header.works'), to: '/projects' },
    { name: t('header.experience'), to: '/#experience' },
    { name: t('header.contact'), to: '/#contact' },
  ];

  const handleNavigationClick = (to: string) => {
    if (to === '/projects' && location.pathname === '/projects') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="portfolio-header">
      <nav
        aria-label="Primary navigation"
        className={`capsule-nav ${isCompact ? 'capsule-nav--compact' : 'capsule-nav--expanded'}`}
      >
        <div className="capsule-nav__top">
          <TransitionLink
            to="/#hero"
            className="capsule-nav__identity"
            onClick={() => handleNavigationClick('/#hero')}
          >
            <span className="capsule-nav__portrait">
              <img src="/source/profile/kiril-karatitsyn-portrait.jpeg" alt="" />
            </span>
            <span className="capsule-nav__name">karatitsyn</span>
          </TransitionLink>

          <div className="capsule-nav__actions" aria-hidden={isCompact}>
            <ul className="capsule-nav__links">
              {links.map((link) => (
                <li key={link.to}>
                  <TransitionLink
                    to={link.to}
                    tabIndex={isCompact ? -1 : undefined}
                    onClick={() => handleNavigationClick(link.to)}
                  >
                    {link.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>

            <Button
              size="compact"
              className="capsule-nav__contact"
              aria-label={t('header.bookCall')}
              tabIndex={isCompact ? -1 : undefined}
            >
              {t('header.bookCall')}
            </Button>
          </div>

          <span className="capsule-nav__dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
