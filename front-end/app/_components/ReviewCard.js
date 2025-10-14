import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

// Wrap the component in React.memo for performance optimization
const ReviewCard = React.memo(function ReviewCard({ name, avatar, review, rating, style, isVisible }) {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-6 transition-all duration-500 ease-out bg-cover origin-bottom"
      style={{
        ...style,
        backgroundImage: "url('\paper.png')", // Assumes you have paper-bg.png in /public
        opacity: isVisible ? 1 : 0,
        transform: style.transform + (isVisible ? ' scale(1)' : ' scale(0.95)'),
      }}
    >
      {/* Lined paper effect */}
      <div className="absolute inset-x-6 top-16 bottom-20 bg-repeat-y bg-[length:100%_24px]" style={{ backgroundImage: 'linear-gradient(to bottom, transparent 23px, #E0D9CD 24px)' }}></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-center mb-4 gap-1">
          <span className="text-gray-400 font-mono text-sm">-</span>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              strokeWidth={1.5}
              className={i < rating ? 'text-pink-400 fill-pink-400' : 'text-pink-300'}
            />
          ))}
          <span className="text-gray-400 font-mono text-sm">-</span>
        </div>
        
        <p className="text-center text-gray-800 text-lg leading-relaxed flex-grow font-serif px-4">
          {review} 🔥
        </p>

        <div className="flex items-center justify-end gap-3 mt-4 pr-4">
          <Image
            src={avatar}
            alt={name}
            width={40}
            height={40}
            className="rounded-lg border-2 border-white shadow-sm bg-gray-200"
          />
          <span className="font-semibold text-[#D3A985] text-lg italic">{name}</span>
        </div>
      </div>
    </div>
  );
});

export default ReviewCard;