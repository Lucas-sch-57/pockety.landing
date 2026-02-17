import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../Footer';

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/logo-pockety.svg"
              alt="Pockety logo"
              className="h-auto w-7"
            />
            <span className="text-base font-semibold text-gray-900 tracking-tight">
              Pockety
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
