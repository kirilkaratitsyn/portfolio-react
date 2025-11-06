import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const targetElement = document.elementFromPoint(e.clientX, e.clientY);
      const isOverDarkSection = targetElement?.closest('#contact, #footer');
      setIsDarkMode(!!isOverDarkSection);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="language-switcher fixed bottom-4 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg px-4 py-2 rounded-full right-4 flex flex-row gap-4 z-50">
      <button 
        onClick={() => changeLanguage('en')} 
        className={`text-sm font-medium transition-all duration-300 ${
          i18n.language === 'en' 
            ? isDarkMode ? 'text-black scale-110' : 'text-white scale-110'
            : isDarkMode ? 'text-black/50 hover:text-black' : 'text-white/50 hover:text-white'
        }`}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('uk')} 
        className={`text-sm font-medium transition-all duration-300 ${
          i18n.language === 'uk' 
            ? isDarkMode ? 'text-black scale-110' : 'text-white scale-110'
            : isDarkMode ? 'text-black/50 hover:text-black' : 'text-white/50 hover:text-white'
        }`}
      >
        UA
      </button>
      <button 
        onClick={() => changeLanguage('de')} 
        className={`text-sm font-medium transition-all duration-300 ${
          i18n.language === 'de' 
            ? isDarkMode ? 'text-black scale-110' : 'text-white scale-110'
            : isDarkMode ? 'text-black/50 hover:text-black' : 'text-white/50 hover:text-white'
        }`}
      >
        DE
      </button>
    </div>
  );
}

export default LanguageSwitcher; 