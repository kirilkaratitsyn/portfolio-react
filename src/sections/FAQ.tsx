import Button from "../components/Button";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function FAQ() {
  const { t } = useTranslation();
  const faqs = t('faq.questions', { returnObjects: true }) as Array<{ question: string, answer: string }>;
  const containerRef = useRef<HTMLDivElement>(null);

  // Set up GSAP animations
  useEffect(() => {
    if (!containerRef.current) return;
    
    const faqItems = containerRef.current.querySelectorAll('.item');
    
    gsap.fromTo(
      faqItems,
      { 
        x: -30, 
        opacity: 0 
      },
      { 
        x: 0, 
        opacity: 1, 
        stagger: 0.15, 
        duration: 0.7,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [faqs.length]);

  return (
    <section id="faq">
      <div className="faq__container" data-aos="fade-up">
        <h1 className="mb-8 text-[37px] font-bold primary-gradient primary-shadow">
          {t('faq.title')}
        </h1>
        <div ref={containerRef} className="items md:grid grid-cols-2 gap-x-[50px]">
          {faqs.map((faq: { question: string, answer: string }, index: number) => (
            <div 
              key={index}
              data-aos="fade-up" 
              className="item mb-[40px] max-w-[490px] px-[20px] py-[15px] backdrop-blur-md bg-white/5 border border-white/10 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white/10"
            >
              <p className="text-[20px] mb-[24px] font-semibold">{faq.question}</p>
              <span className="opacity-80">{faq.answer}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center" data-aos="fade-up">
          <Button size="large">
            <span>{t('faq.book_call')}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;