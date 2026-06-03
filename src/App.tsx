import HeroSection from './components/Hero';
import WorldviewSection from './components/Worldview';
import CharactersSection from './components/Characters';
import FeaturesSection from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-deep-black text-white selection:bg-crimson selection:text-white font-sans overflow-x-hidden">
      <main>
        <HeroSection />
        <WorldviewSection />
        <CharactersSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
