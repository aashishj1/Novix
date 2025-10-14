'use client';

import { useState, useEffect, useRef } from 'react';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    name: 'Stephanie Desjardins',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    review: 'Fire Agency creative, down-to-earth team, incredible ideas',
    rating: 5,
  },
  {
    name: 'Moe Dana',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    review: 'An agency that is not afraid to think outside the box! A unique experience, one idea follows another! I recommend this agency to everyone.',
    rating: 5,
  },
  {
    name: 'Emma Novis',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    review: 'A cheerful, engaging, and ambitious team! They can’t be stopped with their ideas.',
    rating: 4,
  },
];

export default function CustomerReviews() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const animationFrameId = useRef();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      // Use requestAnimationFrame to optimize scroll handling and prevent lag
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = requestAnimationFrame(() => {
        const { top, height } = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Only calculate progress when the section is "stuck" at the top
        if (top <= 0 && top > -height + viewportHeight) {
          const progress = -top / (height - viewportHeight);
          setScrollProgress(progress);
        } else if (top > 0) {
          setScrollProgress(0); // Reset progress if we scroll back up
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    // Height is increased to give enough scroll room for the animation
    <div ref={sectionRef} className="relative w-full h-[300vh] bg-[#EA337E]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <h1 className="absolute text-[12vw] font-serif text-white/80 whitespace-nowrap select-none" aria-hidden="true">
          Satisfied Customers
        </h1>
        <div className="relative w-80 h-[22rem] md:w-96 md:h-[24rem]">
          {reviews.map((review, index) => {
            const progressPerCard = 1 / reviews.length;
            const cardStartProgress = index * progressPerCard;
            const cardProgress = Math.max(0, (scrollProgress - cardStartProgress) / progressPerCard);

            const isVisible = scrollProgress >= cardStartProgress;
            
            const translateY = -cardProgress * 500; // Increased distance for a faster "fly away" effect
            const rotation = (index % 2 === 0 ? -1 : 1) * cardProgress * 30;
            const scale = 1 - (index * 0.05) + (scrollProgress * 0.05 * index);

            return (
              <ReviewCard
                key={index}
                {...review}
                isVisible={isVisible}
                style={{
                  transform: `rotate(${rotation}deg) translateY(${translateY}px) scale(${scale})`,
                  zIndex: reviews.length - index,
                  top: `${index * 8}px`,
                  left: `${index * 4}px`,
                  opacity: isVisible ? 1 : 0,
                  transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}