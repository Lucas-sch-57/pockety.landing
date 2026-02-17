import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import useMobile from '../hooks/use-mobile';
import useActiveSection from '../hooks/use-active-section';
import { menu } from '../constants/menu';
import MenuItem from './MenuItem';

const FloatingHeader = () => {
  const { isMobile } = useMobile();
  const activeSection = useActiveSection();
  const [isVisible, setIsVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-4 left-4 right-4 z-40 mx-auto max-w-6xl rounded-2xl border border-white/20 bg-white/70 px-6 py-3 shadow-lg backdrop-blur-xl"
          >
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex-1">
                <a href="#" className="flex items-center gap-2">
                  <img
                    src="/logo-pockety.svg"
                    alt="Pockety logo"
                    className="h-auto w-7"
                  />
                  <span className="text-sm font-semibold text-gray-900">
                    Pockety
                  </span>
                </a>
              </div>

              {/* Navigation desktop */}
              {!isMobile && (
                <ul className="flex gap-6 text-sm font-medium">
                  {menu.map((item, index) => (
                    <MenuItem key={index} item={item} variant="dark" isActive={activeSection === item.link} />
                  ))}
                </ul>
              )}

              {/* Boutons */}
              <div className="flex-1 flex items-center justify-end gap-4">
                {!isMobile && (
                  <div className="flex items-center gap-2">
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer">
                      Se connecter
                    </a>
                    <a href="https://app.pockety.fr/register" className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:bg-primary-dark active:scale-[0.98]">
                      S'inscrire
                    </a>
                  </div>
                )}
                {isMobile && (
                  <button onClick={toggleSidebar} className="cursor-pointer">
                    <Menu size={22} className="text-gray-900" />
                  </button>
                )}
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Sidebar mobile */}
      {isMobile && (
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full transform bg-[#F1F8EC] shadow-xl transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex flex-col h-full">
            <X
              size={25}
              className="absolute top-3 right-3 cursor-pointer"
              onClick={toggleSidebar}
            />
            <ul className="flex flex-col gap-4 text-xl text-center flex-1 justify-center">
              {menu.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className={`cursor-pointer transition-colors duration-200 ${activeSection === item.link ? 'text-primary font-semibold' : 'hover:text-primary'}`}
                    onClick={toggleSidebar}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pb-6 text-center">
              <a
                href="#"
                className="text-lg font-medium transition-colors cursor-pointer hover:text-primary"
                onClick={toggleSidebar}
              >
                Se connecter
              </a>
              <a
                href="https://app.pockety.fr/register"
                className="bg-primary text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:bg-primary-dark active:scale-[0.98]"
                onClick={toggleSidebar}
              >
                S'inscrire
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingHeader;
