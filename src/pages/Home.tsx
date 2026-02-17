import AccessToBetaSection from '../components/AccessToBetaSection';
import CtaSection from '../components/CtaSection';
import FaqSection from '../components/FaqSection';
import FeaturesSection from '../components/FeaturesSection';
import FloatingHeader from '../components/FloatingHeader';
import Footer from '../components/Footer';
import HeroHeader from '../components/HeroHeader';
import HowItWorksSection from '../components/HowItWorksSection';

const Home = () => {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 h-24 bg-linear-to-t from-primary/15 to-transparent" />
      <FloatingHeader />
      <HeroHeader />
      <FeaturesSection />
      <HowItWorksSection />
      <AccessToBetaSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;
