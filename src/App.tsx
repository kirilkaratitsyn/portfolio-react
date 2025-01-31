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
        <CustomCursor />
        <Hero />
        <AboutMe />
        <Process />
        <FAQ />
        <Testimonials />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;