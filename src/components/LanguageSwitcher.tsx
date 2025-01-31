import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher  fixed bottom-4 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg px-4 py-2 rounded-full right-4 flex flex-row gap-4 z-50 hidden">
      <button 
        onClick={() => changeLanguage('en')} 
        className={`text-sm font-medium transition-all duration-300 ${
          i18n.language === 'en' 
            ? 'text-white scale-110' 
            : 'text-white/50 hover:text-white'
        }`}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('uk')} 
        className={`text-sm font-medium transition-all duration-300 ${
          i18n.language === 'uk' 
            ? 'text-white scale-110' 
            : 'text-white/50 hover:text-white'
        }`}
      >
        UA
      </button>
    </div>
  );
}

export default LanguageSwitcher; 