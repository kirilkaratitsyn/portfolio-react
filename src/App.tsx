import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './sections/Header';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import Process from './sections/Process';
import FAQ from './sections/FAQ';
import Testimonials from './sections/Testimonials';
import Works from './sections/Works';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Preloader from './sections/Preloader';
import CustomCursor from './components/CustomCursor';
import { lazyLoadImages } from './utils/lazyLoad';
import './i18n';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  useEffect(() => {
    AOS.init();
    lazyLoadImages();
  }, []);

  return (
    <div className="wrapper">
      <Preloader />
      
      <Header />
      <main>
        <LanguageSwitcher />
        <CustomCursor />
        <Hero />
        <AboutMe />
        <Works />
        <Process />
        
        <FAQ />
       
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;