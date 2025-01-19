import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="wrapper">
      <Preloader />
      <CustomCursor />
      <Header />
      <main>
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