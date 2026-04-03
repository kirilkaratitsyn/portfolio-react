import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import AboutMe from '../sections/AboutMe';
import Services from '../sections/Services';
import FeaturedCaseStudies from '../sections/FeaturedCaseStudies';
import Works from '../sections/Works';
import Process from '../sections/Process';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';

const Home = () => {
  const location = useLocation();
  const previousPathnameRef = useRef(location.pathname);

  useEffect(() => {
    const isCrossPageNavigation = previousPathnameRef.current !== location.pathname;

    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({
          behavior: isCrossPageNavigation ? 'auto' : 'smooth',
          block: 'start',
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    previousPathnameRef.current = location.pathname;
  }, [location.hash, location.pathname]);

  return (
    <>
      <Hero />
      <AboutMe />
      <Services />
      <FeaturedCaseStudies />
      <Works />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
