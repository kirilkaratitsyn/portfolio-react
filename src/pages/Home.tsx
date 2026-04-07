import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import AboutMe from '../sections/AboutMe';
import Services from '../sections/Services';
import FeaturedCaseStudies from '../sections/FeaturedCaseStudies';
import Works from '../sections/Works';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
import { useSeo } from '../hooks/useSeo';

const Home = () => {
  const location = useLocation();
  const previousPathnameRef = useRef(location.pathname);

  useSeo({
    title: 'Kiril Karatitsyn | Shopify Developer',
    description:
      'Shopify developer focused on custom themes, Online Store 2.0 migrations, storefront UX, performance optimization, and long-term support for growing brands.',
    path: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Kiril Karatitsyn',
      url: 'https://www.karatitsyn.com/',
      image: 'https://www.karatitsyn.com/android-chrome-512x512.png',
      jobTitle: 'Shopify Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Independent',
      },
      sameAs: [
        'https://www.upwork.com/freelancers/~0165dda3529105e6f3',
        'https://www.linkedin.com/in/kiril-karatitsyn-bb278b332/',
        'https://github.com/kirilwallstreetreserv',
      ],
      knowsAbout: [
        'Shopify',
        'Shopify theme development',
        'Online Store 2.0',
        'Liquid',
        'Storefront UX',
        'Performance optimization',
      ],
    },
  });

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
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
