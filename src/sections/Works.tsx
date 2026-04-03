import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import { useWorksContent, type WorkProject } from '../hooks/useWorks';
import WorkCard from '../components/WorkCard';
import TransitionLink from '../components/TransitionLink';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Works() {
  const { t } = useTranslation();
  const worksContent = useWorksContent();
  
  const visibleItems = 6;
  const previousItemsRef = useRef(6);
  
  // References for the hover effect
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Reference for the container
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get works from translation
  const works = worksContent.projects as WorkProject[];

  // Function to initialize lazy loading for images
  const initLazyLoading = () => {
    const lazyImages = document.querySelectorAll('.lazy:not(.loaded)');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  };

  // Mouse move effect for cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    // Calculate the percentage position
    const xPercent = x / rect.width;
    const yPercent = y / rect.height;
    
    // Calculate the tilt rotation (max 5 degrees)
    const tiltX = (0.5 - yPercent) * 5;
    const tiltY = (xPercent - 0.5) * 5;
    
    // Apply the transforms
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.01, 1.01, 1.01)`;
    card.style.background = `linear-gradient(120deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, ${0.05 + xPercent * 0.05}))`;
    card.style.boxShadow = `0 4px 20px rgba(0,0,0,0.2), 
                           0 0 20px rgba(255,255,255,${0.1 + xPercent * 0.1})`;
  };
  
  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    
    // Reset the transforms
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    card.style.background = 'rgba(255, 255, 255, 0.05)';
    card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
  };

  // Initial lazy loading on component mount
  useEffect(() => {
    initLazyLoading();
    
    // Initialize the card refs array
    cardRefs.current = Array(visibleItems).fill(null);
  }, []);

  // Initial animation on component mount
  useEffect(() => {
    if (!containerRef.current) return;
    
    const initialCards = containerRef.current.querySelectorAll('.item');
    
    gsap.fromTo(
      initialCards,
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.8,
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <section id="work" className="work__container">
      <div data-aos="fade-up">
        <div className="mb-8 max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
            {t('works.eyebrow')}
          </p>
          <h2 className="text-[37px] font-bold primary-gradient primary-shadow">{t('works.title')}</h2>
          <p className="text-lg leading-relaxed text-white/75 md:text-xl">
            {t('works.subtitle')}
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div ref={containerRef} className="items grid grid-cols-1 gap-x-[40px] gap-y-[40px] justify-items-center lg:grid-cols-2 xl:grid-cols-3">
          {works.slice(0, visibleItems).map((work, index) => (
            <WorkCard
              key={index} 
              work={work}
              viewCaseLabel={t('works.viewCase')}
              visitWebsiteLabel={t('works.visitWebsite')}
              cardRef={(el) => {
                cardRefs.current[index] = el;
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              lazyImage
            />
          ))}
          
        </div>
        
        <div className="mb-16 mt-8 flex justify-center">
          <TransitionLink
            to="/projects"
            className="transition-all duration-500 whitespace-nowrap font-medium bg-white text-black light-shadow px-12 py-3 text-lg rounded-full"
          >
            {t('works.loadMore')}
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}

export default Works;
