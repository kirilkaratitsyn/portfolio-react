export const lazyLoadImages = () => {
  const lazyImages = document.querySelectorAll('img.lazy');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '0px 0px 200px 0px'
  });

  lazyImages.forEach(img => {
    observer.observe(img);
  });
}; 