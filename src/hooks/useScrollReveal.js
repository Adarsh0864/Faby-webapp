/**
 * useScrollReveal — Custom hook that triggers CSS reveal animations
 * on elements as they scroll into view using IntersectionObserver.
 */
import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all elements with reveal classes
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default useScrollReveal;
