import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import AboutMe from '../sections/AboutMe';
import Works from '../sections/Works';
import FeaturedPosts from '../sections/FeaturedPosts';
import UpworkReviews from '../sections/UpworkReviews';
import Process from '../sections/Process';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <AboutMe />
      <Works />
      <UpworkReviews />
      <FeaturedPosts />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
