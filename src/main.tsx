import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Cal.com integration
declare global {
  interface Window {
    Cal?: any;
  }
}

// Initialize Cal.com
(function(C: any, A: string, L: string) {
  let p = function(a: any, ar: any) {
    a.q.push(ar);
  };
  let d = C.document;
  C.Cal = C.Cal || function() {
    let cal = C.Cal;
    let ar = arguments;
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      d.head.appendChild(d.createElement("script")).src = A;
      cal.loaded = true;
    }
    if (ar[0] === L) {
      const api = function() {
        p(api, arguments);
      };
      const namespace = ar[1];
      api.q = api.q || [];
      if (typeof namespace === "string") {
        cal.ns[namespace] = cal.ns[namespace] || api;
        p(cal.ns[namespace], ar);
        p(cal, ["initNamespace", namespace]);
      } else {
        p(cal, ar);
      }
      return;
    }
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");

// Initialize Cal namespace
window.Cal?.("init", "free-consultation-call", {origin:"https://cal.com"});
window.Cal?.ns?.["free-consultation-call"]?.("ui", {
  "theme": "dark",
  "styles": {
    "branding": {
      "brandColor": "#000000"
    }
  },
  "hideEventTypeDetails": true,
  "layout": "month_view"
});

// Lazy loading images
const lazyLoadImages = () => {
  const lazyImages = document.querySelectorAll('.lazy');
  
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Initialize lazy loading after render
lazyLoadImages();
