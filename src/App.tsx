import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Preloader from './sections/Preloader';
import CustomCursor from './components/CustomCursor';
import { lazyLoadImages } from './utils/lazyLoad';
import './i18n';
import LanguageSwitcher from './components/LanguageSwitcher';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
