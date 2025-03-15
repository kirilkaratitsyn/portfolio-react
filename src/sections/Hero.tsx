import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const typeWord = () => {
      const currentFullWord = t(`hero.words.${wordIndex}`);
      
      if (!isDeleting) {
        setCurrentWord(currentFullWord.substring(0, letterIndex + 1));
        setLetterIndex(prev => prev + 1);

        if (letterIndex === currentFullWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentWord(currentFullWord.substring(0, letterIndex - 1));
        setLetterIndex(prev => prev - 1);

        if (letterIndex <= 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % (t('hero.words', { returnObjects: true }) as string[]).length);
        }
      }
    };

    const timer = setTimeout(typeWord, isDeleting ? 100 : 200);
    return () => clearTimeout(timer);
  }, [wordIndex, letterIndex, isDeleting, t]);

  return (
    <section id="hero">
      <video className="back-video" autoPlay loop muted playsInline>
        <source src="source/1028(1).webm" type="video/webm" />
      </video>
      
      <div className="hero__container flex flex-col items-center justify-center font-medium md:py-[70px] py-[35px] bg-transparent" data-aos="fade-up">
        <h1 className="mb-2.5 text-3xl md:text-5xl light-gradient">{t('hero.title')}<br /></h1>
        <div className="min-h-[60px]">
          <span className="text-3xl md:text-5xl primary-gradient primary-shadow mr-2.5 font-bold">{t('hero.web')}</span>
          <h1 className="text-2xl md:text-5xl light-gradient" id="word">{currentWord}</h1>
        </div>
        <div className="slogan text-center md:mt-[37px] text-2xl md:text-[32px] light-gradient">
          {t('hero.subtitle')}
        </div>
        <div className="buttons mt-14 flex justify-center md:flex-row flex-col items-center gap-5 text-sm whitespace-nowrap">
          <button 
            className="light-shadow text-black bg-white/90 backdrop-blur-sm px-12 py-3 rounded-full hover:bg-white transition-all duration-300" 
            data-cal-link="kiril-karatitsyn/free-consultation-call" 
            data-cal-namespace="free-consultation-call" 
            data-cal-config='{"layout":"month_view","theme":"dark"}' 
            id="Button"
          >
            {t('hero.book_call')}
          </button>
          <span className="md:inline-block hidden">{t('hero.or')}</span>
          <a 
            href="mailto:karatitsynkiril@gmail.com?subject=Hi Kiril!" 
            className="light-shadow flex justify-center items-center py-3 px-2 border-white/50 backdrop-blur-sm bg-white/10 border-[2px] rounded-full hover:bg-white/20 transition-all duration-300"
          >
            {t('hero.send_message')} <img className="ml-2" width="16px" src="source/Arrow up-right.png" alt="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;