import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Button from '../components/Button';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Works() {
  // Initial number of items to display
  const [visibleItems, setVisibleItems] = useState(6);
  const previousItemsRef = useRef(6);
  
  // References for the hover effect
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Reference for the container
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track when new items are loaded
  const [newItemsLoaded, setNewItemsLoaded] = useState(false);
  
  const works = [
    {
      title: "Honey Sunny Paradise",
      url: "https://www.honeysunnyparadise.com/",
      image: "/source/works_1.webp",
      tech: ""
    },
    {
      title: "Hephestorium(PDPs)",
      url: "https://www.hephestorium.com/",
      image: "/source/works_3.webp",
      tech: ""
    },
    {
      title: "Craft-Minds(PDPs)",
      url: "https://craft-minds.com/",
      image: "/source/6718b31b0e47a451312f3357 1.png",
      tech: ""
    },
   
    {
      title: "Shovavas",
      url: "https://shovavas.org/",
      image: "/source/works_6.webp",
      tech: ""
    },
    {
      title: "Pair Stich",
      url: "https://pairstitch.pl/",
      image: "/source/Pairstich.webp",
      tech: ""
    },
    {
      title: "Kramucci",
      url: "https://kramucci.com/",
      image: "/source/Kramucci - Premium Italian Women Bags.webp",
      tech: ""
    },
    {
      title: "Steppyshoes",
      url: "https://steppyshoes.com/",
      image: "/source/Steppy _ Pour les petits pieds en pleine croissance.webp",
      tech: ""
    },
    {
      title: "Haftx",
      url: "https://haftx.com/",
      image: "/source/HaftX.webp",
      tech: ""
    },
    {
      title: "Canvaswall",
      url: "https://canvaswallartstore.com/",
      image: "/source/TheCanvasWallArt.webp",
      tech: ""
    },
    {
      title: "The Vegan Wellness",
      url: "https://theveganwellnessco.uk/",
      image: "/source/The Vegan Wellness Co. affordable plant-based nutrition.webp",
      tech: ""
    },
    {
      title: "Junofires",
      url: "https://junofires.nl/",
      image: "/source/Bestel de mooiste rustieke ledkaarsen met timer bij JUNOfires.webp",
      tech: ""
    },
    {
      title: "Lerros",
      url: "https://www.lerros.com/",
      image: "/source/Buy fashion for men conveniently online.webp",
      tech: ""
    }
  ];

  // Function to load more items
  const loadMore = () => {
    setVisibleItems(prevVisibleItems => {
      // Increase by 6 at a time, but don't exceed the total count
      const newCount = Math.min(prevVisibleItems + 6, works.length);
      // Set flag to indicate new items were loaded
      setNewItemsLoaded(true);
      return newCount;
    });
  };

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
    
    // Add a slight color shift based on position
    const hue = 200 + xPercent * 20; // Slightly shift the hue based on x position
    
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

  // Check if all items are visible
  const allItemsVisible = visibleItems >= works.length;

  // Run lazy loading when visible items change
  useEffect(() => {
    if (visibleItems > previousItemsRef.current) {
      // Wait a moment for the DOM to update with new images
      setTimeout(() => {
        initLazyLoading();
        previousItemsRef.current = visibleItems;
      }, 100);
    }
    
    // Reset the card refs array to match the visible items
    cardRefs.current = cardRefs.current.slice(0, visibleItems);
  }, [visibleItems]);

  // Initial lazy loading on component mount
  useEffect(() => {
    initLazyLoading();
    
    // Initialize the card refs array
    cardRefs.current = Array(visibleItems).fill(null);
  }, []);

  // Set up GSAP animations for newly loaded items
  useEffect(() => {
    if (!newItemsLoaded || !containerRef.current) return;
    
    // Get only the newly added cards
    const allCards = containerRef.current.querySelectorAll('.item');
    const newCards = Array.from(allCards).slice(previousItemsRef.current);
    
    if (newCards.length === 0) return;
    
    // Set initial state for new cards
    gsap.set(newCards, { 
      y: 50, 
      opacity: 0 
    });
    
    // Animate the new cards
    gsap.to(newCards, { 
      y: 0, 
      opacity: 1, 
      stagger: 0.1, 
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        // Reset the flag after animation completes
        setNewItemsLoaded(false);
        // Update the previous items count
        previousItemsRef.current = visibleItems;
      }
    });
    
  }, [newItemsLoaded, visibleItems]);

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
        <h1 className="mb-8 text-[37px] font-bold primary-gradient primary-shadow">Works</h1>
        
        {/* Desktop Grid */}
        <div ref={containerRef} className="items grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-x-[40px]">
          {[...works].reverse().slice(0, visibleItems).map((work, index) => (
            <div 
              key={index} 
              ref={el => cardRefs.current[index] = el}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="item px-5 py-5 transition-all duration-300 rounded-lg mb-[79px] max-w-[490px] flex-col items-center justify-between flex gap-[15px] backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 hover:scale-105"
              style={{ transition: 'all 0.3s ease' }}
            >
              <a 
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[316px] h-[255px] block overflow-hidden rounded-lg"
              >
                <img 
                  className="object-top rounded-lg lazy w-full h-full object-cover transition-transform duration-700"
                  data-src={work.image}
                  alt={work.title}
                />
              </a>
              <p className="text-[20px] font-semibold">{work.title}</p>
              <span className="opacity-80">{work.tech}</span>
              <button
                onClick={() => window.open(work.url, '_blank')}
                className="bg-white/90 backdrop-blur-sm text-black light-shadow px-12 py-3 rounded-full w-fit hover:bg-white transition-all duration-300"
              >
                Visit Website
              </button>
            </div>
          ))}
        </div>
        
        {/* Load More Button - only show if there are more items to load */}
        {!allItemsVisible && (
          <div className="flex justify-center mt-8 mb-16">
            <button
              onClick={loadMore}
              className="light-shadow flex justify-center items-center px-12 py-3  border-white/50 backdrop-blur-sm bg-white/10 border-[2px] rounded-full hover:bg-white/20 transition-all duration-300 "
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Works;