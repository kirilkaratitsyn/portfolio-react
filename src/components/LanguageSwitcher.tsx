import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOnLightSection, setIsOnLightSection] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const updateSectionState = () => {
      const switcher = switcherRef.current;
      if (!switcher) return;

      const rect = switcher.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const elements = document.elementsFromPoint(centerX, centerY);
      const relevantElement = elements.find((element) => element !== switcher && !switcher.contains(element));
      const isOverLightSection = relevantElement?.closest('#contact, #footer');

      setIsOnLightSection(!!isOverLightSection);
    };

    updateSectionState();

    const handleViewportChange = () => {
      requestAnimationFrame(updateSectionState);
    };

    window.addEventListener('scroll', handleViewportChange, { passive: true });
    window.addEventListener('resize', handleViewportChange);

    return () => {
      window.removeEventListener('scroll', handleViewportChange);
      window.removeEventListener('resize', handleViewportChange);
    };
  }, []);

  return (
    <div
      ref={switcherRef}
      className="language-switcher fixed bottom-3 right-5 z-50 flex flex-row items-center gap-3 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 shadow-lg backdrop-blur-md md:bottom-4 md:right-5"
    >
      <button 
        onClick={() => changeLanguage('en')} 
        className={`text-xs font-medium transition-all duration-300 ${
          i18n.language === 'en' 
            ? isOnLightSection ? 'text-black scale-110' : 'text-white scale-110'
            : isOnLightSection ? 'text-black/40 hover:text-black/60' : 'text-white/50 hover:text-white'
        }`}
      >
        EN
      </button>
      <span
        aria-hidden="true"
        className="relative block h-5 w-px"
      >
        <span
          className={`absolute inset-y-[-6px] left-0 w-px ${isOnLightSection ? 'bg-black/20' : 'bg-white/20'}`}
        />
      </span>
      <button 
        onClick={() => changeLanguage('uk')} 
        className={`text-xs font-medium transition-all duration-300 ${
          i18n.language === 'uk' 
            ? isOnLightSection ? 'text-black scale-110' : 'text-white scale-110'
            : isOnLightSection ? 'text-black/40 hover:text-black/60' : 'text-white/50 hover:text-white'
        }`}
      >
        UA
      </button>
      <span
        aria-hidden="true"
        className="relative block h-5 w-px"
      >
        <span
          className={`absolute inset-y-[-6px] left-0 w-px ${isOnLightSection ? 'bg-black/20' : 'bg-white/20'}`}
        />
      </span>
      <button 
        onClick={() => changeLanguage('de')} 
        className={`text-xs font-medium transition-all duration-300 ${
          i18n.language === 'de' 
            ? isOnLightSection ? 'text-black scale-110' : 'text-white scale-110'
            : isOnLightSection ? 'text-black/40 hover:text-black/60' : 'text-white/50 hover:text-white'
        }`}
      >
        DE
      </button>
    </div>
  );
}

export default LanguageSwitcher; 
