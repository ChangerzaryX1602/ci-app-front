'use client';

import { useState, useEffect } from 'react';

export const useIntersectionObserver = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'help'];
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      threshold: 0.5, // At least 50% of the section must be visible
      rootMargin: '0px 0px -200px 0px' // Adjust this to fine-tune detection
    };

    sections.forEach(section => {
      const element = document.getElementById(section);
      
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setActiveSection(section);
                // Optional: Update URL hash
                window.history.replaceState(null, '', `#${section}`);
              }
            });
          },
          observerOptions
        );

        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return activeSection;
};