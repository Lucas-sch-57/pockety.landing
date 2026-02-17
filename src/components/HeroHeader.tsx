import HeaderMenu from './HeaderMenu';
import HeroHeaderTitle from './HeroHeaderTitle';

const HeroHeader = () => {
  return (
    <section id="hero" className="relative bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-150 h-150 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-100 h-100 bg-white/5 rounded-full blur-2xl" />
      </div>
      <div className="relative z-10">
        <HeaderMenu />
        <HeroHeaderTitle />
      </div>
    </section>
  );
};

export default HeroHeader;
