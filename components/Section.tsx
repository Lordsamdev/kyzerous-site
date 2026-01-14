import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark';
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, background = 'white' }) => {
  const bgClasses = {
    white: 'bg-transparent',
    light: 'bg-neutral-50/80 backdrop-blur-sm',
    dark: 'bg-neutral-900 text-white',
  };

  return (
    <section id={id} className={`py-20 md:py-28 px-6 md:px-12 ${bgClasses[background]} ${className}`}>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;