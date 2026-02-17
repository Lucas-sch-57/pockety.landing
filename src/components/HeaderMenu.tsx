import { useState } from 'react';
import useMobile from '../hooks/use-mobile';
import useActiveSection from '../hooks/use-active-section';
import { Menu, X } from 'lucide-react';
import { menu } from '../constants/menu';
import MenuItem from './MenuItem';

const HeaderMenu = () => {
  const { isMobile } = useMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeSection = useActiveSection();
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl flex items-center px-6 py-5">
        {/* Logo */}
        <div className="flex-1">
          <a href="#" className="flex items-center gap-2.5">
            <img
              src="/logo-pockety.svg"
              alt="Pockety logo"
              className="h-auto w-8"
            />
            <span className="text-base font-semibold text-white tracking-tight">
              Pockety
            </span>
          </a>
        </div>

        {/* Navigation desktop */}
        {!isMobile && (
          <nav className="rounded-full border border-white/20 bg-white/10 px-6 py-2.5 backdrop-blur-sm">
            <ul className="flex gap-7 text-sm font-medium">
              {menu.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  isActive={activeSection === item.link}
                />
              ))}
            </ul>
          </nav>
        )}

        {/* Boutons */}
        <div className="flex-1 flex items-center justify-end gap-3">
          {!isMobile && (
            <>
              <a
                href="https://app.pockety.fr/login"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer px-3 py-2"
              >
                Se connecter
              </a>
              <a
                href="https://app.pockety.fr/register"
                className="bg-white text-primary-dark px-5 py-2 rounded-full text-sm font-semibold shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:bg-white/90 active:scale-[0.98]"
              >
                S'inscrire
              </a>
            </>
          )}
          {isMobile && (
            <button
              onClick={toggleSidebar}
              className="cursor-pointer text-white"
            >
              <Menu size={25} />
            </button>
          )}
        </div>
      </div>

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
    </div>
  );
};

export default HeaderMenu;
