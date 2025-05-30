import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import ScrollToTopButton from './components/ScrollToTopButton';
import { useEffect, useRef } from 'react';

function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="scroll-smooth overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="container mx-auto px-8 snap-y snap-mandatory overflow-y-scroll h-screen"
      >
        <Navbar />
        <Hero />
        <Experience />
        <TechStack />
        <Education />
        <ScrollToTopButton containerRef={scrollContainerRef} />
      </div>
    </div>
  );
}

export default App;
