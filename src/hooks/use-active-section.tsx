import { useEffect, useState } from 'react';
import { menu } from '../constants/menu';

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sectionIds = menu
      .map((item) => item.link.replace('#', ''))
      .filter(Boolean);

    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      }
    };

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(handleIntersect, {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      });

      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const observer of observers) {
        observer.disconnect();
      }
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
