import Button from "../components/Button";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Process() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Set up GSAP animations
  useEffect(() => {
    if (!containerRef.current) return;
    
    const processItems = containerRef.current.querySelectorAll('.item');
    
    gsap.fromTo(
      processItems,
      { 
        scale: 0.9, 
        opacity: 0 
      },
      { 
        scale: 1, 
        opacity: 1, 
        stagger: 0.15, 
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="process">
      <div className="process__container">
        <h1 className="mb-8 text-[37px] font-bold primary-gradient primary-shadow">{t('process.title')}</h1>
        <div ref={containerRef} className="items md:grid grid-cols-2 gap-x-[40px]">
          <div data-aos="fade-up" className="item mb-[79px] max-w-[490px] px-[20px] py-[15px] backdrop-blur-md bg-white/5 border border-white/10 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white/10">
            <p className="text-[20px] font-semibold">{t('process.steps.step1.title')}</p>
            <span className="opacity-80">{t('process.steps.step1.description')}</span>
          </div>
          <div data-aos="fade-up" className="item mb-[79px] max-w-[490px] px-[20px] py-[15px] backdrop-blur-md bg-white/5 border border-white/10 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white/10">
            <p className="text-[20px] font-semibold">{t('process.steps.step2.title')}</p>
            <span className="opacity-80">{t('process.steps.step2.description')}</span>
          </div>
          <div data-aos="fade-up" className="item mb-[79px] max-w-[490px] px-[20px] py-[15px] backdrop-blur-md bg-white/5 border border-white/10 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white/10">
            <p className="text-[20px] font-semibold">{t('process.steps.step3.title')}</p>
            <span className="opacity-80">{t('process.steps.step3.description')}</span>
          </div>
          <div data-aos="fade-up" className="item mb-[79px] max-w-[490px] px-[20px] py-[15px] backdrop-blur-md bg-white/5 border border-white/10 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white/10">
            <p className="text-[20px] font-semibold">{t('process.steps.step4.title')}</p>
            <span className="opacity-80">{t('process.steps.step4.description')}</span>
          </div>
          <div data-aos="fade-up" className="item mb-[79px] max-w-[490px] px-[20px] py-[15px] backdrop-blur-md bg-white/5 border border-white/10 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white/10">
            <p className="text-[20px] font-semibold">{t('process.steps.step5.title')}</p>
            <span className="opacity-80">{t('process.steps.step5.description')}</span>
          </div>
          <div data-aos="fade-up" className="item mb-[79px] max-w-[490px] px-[20px] py-[15px] backdrop-blur-md bg-white/5 border border-white/10 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white/10">
            <p className="text-[20px] font-semibold">{t('process.steps.step6.title')}</p>
            <span className="opacity-80">{t('process.steps.step6.description')}</span>
          </div>
        </div>
        <div className="flex justify-center items-center" data-aos="fade-up">
          <Button size="large">
            <span>{t('process.book_call')}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Process;