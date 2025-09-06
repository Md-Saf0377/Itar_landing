
'use client';

import { useState, useEffect } from 'react';

export function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(true);
  let timeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, 200); // User has stopped scrolling for 200ms
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return isVisible;
}
