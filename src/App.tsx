import { useEffect } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Preloader from './sections/Preloader';
import RouteTransitionLoader from './components/RouteTransitionLoader';
import { lazyLoadImages } from './utils/lazyLoad';
import './i18n';
import LanguageSwitcher from './components/LanguageSwitcher';
import Home from './pages/Home';
import WorksPage from './pages/WorksPage';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import CaseStudy from './pages/CaseStudy';

const LegacyProjectRedirect = () => {
  const { slug } = useParams();

  return <Navigate to={slug ? `/projects/${slug}` : '/projects'} replace />;
};

function App() {
  useEffect(() => {
    AOS.init();
    lazyLoadImages();
  }, []);

  return (
    <div className="wrapper">
      <Preloader />
      <RouteTransitionLoader />
      <Header />
      <main>
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<WorksPage />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="/work" element={<Navigate to="/projects" replace />} />
          <Route path="/work/:slug" element={<LegacyProjectRedirect />} />
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
