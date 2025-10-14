'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviewsData = [
  {
    name: 'Dr. Ananya',
    review: 'Dr. Ananya is very empathetic and helped me manage my anxiety within a few sessions. Highly recommended!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
  },
  {
    name: 'Stephanie D.',
    review: 'A truly life-changing experience. The tools and support are incredible.',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    rating: 5,
  },
  {
    name: 'Moe Dana',
    review: 'An agency that is not afraid to think outside the box! A unique and helpful experience.',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    rating: 4,
  },
  {
    name: 'Emma Novis',
    review: 'A cheerful, engaging, and ambitious team! They can’t be stopped with their ideas.',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    rating: 5,
  },
  {
    name: 'John Doe',
    review: 'Simple, effective, and very supportive. Highly recommend!',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 4,
  },
];

const StarRating = ({ rating, color = "text-yellow-400" }) => (
  <div className="flex justify-center gap-1 mt-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className={i < rating ? `${color} fill-current` : 'text-gray-300'} />
    ))}
  </div>
);

const Card = ({ data, isCenter }) => (
  <div
    className={`p-5 rounded-2xl shadow-md transition-all duration-800 ${
      isCenter ? 'bg-[#E0F3EC] text-black -translate-y-4 scale-100' : 'bg-[#1A3E2F] text-white opacity-80'
    }`}
  >
    <div className="flex flex-col items-center text-center">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center p-1 ${isCenter ? 'bg-white' : 'bg-pink-500'}`}>
        <Image
          src={data.avatar}
          alt={data.name}
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>
      <p className="mt-4 text-lg leading-relaxed h-35">{data.review}</p>
      <StarRating rating={data.rating} color={isCenter ? 'text-yellow-500' : 'text-yellow-400'} />
    </div>
  </div>
);

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const getVisibleReviews = () => {
    const len = reviewsData.length;
    const prevIndex = (activeIndex - 1 + len) % len;
    const nextIndex = (activeIndex + 1) % len;
    return [
      { position: 'left', data: reviewsData[prevIndex], id: prevIndex },
      { position: 'center', data: reviewsData[activeIndex], id: activeIndex },
      { position: 'right', data: reviewsData[nextIndex], id: nextIndex },
    ];
  };

  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold text-center text-black mb-25">
          Success Stories
        </h2>

        <div className="relative flex items-center justify-center gap-6">
          {getVisibleReviews().map(({ position, data, id }) => (
            <motion.div
              key={id}
              animate={{
                scale: position === 'center' ? 1.2 : 0.9,
                opacity: position === 'center' ? 1 : 0.6,
              }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              onClick={position === 'right' ? handleNext : position === 'left' ? handlePrev : null}
              className={`w-[200px] md:w-[260px] ${position !== 'center' ? 'cursor-pointer' : ''}`}
            >
              <Card data={data} isCenter={position === 'center'} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}