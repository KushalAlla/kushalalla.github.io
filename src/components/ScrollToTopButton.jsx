import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = ({ containerRef }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scrollEl = containerRef?.current || window;

    const toggleVisibility = () => {
      const scrollTop = containerRef?.current?.scrollTop ?? window.scrollY;
      setVisible(scrollTop > 100);
    };

    scrollEl.addEventListener('scroll', toggleVisibility);
    return () => scrollEl.removeEventListener('scroll', toggleVisibility);
  }, [containerRef]);

  const scrollToTop = () => {
    if (containerRef?.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-opacity duration-300"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
