import { useEffect, useState } from 'react';

export const useMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fonction pour vérifier la taille
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Check initial
    checkMobile();

    // Écouter les changements de taille
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return { isMobile };
};

export default useMobile;
