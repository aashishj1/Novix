import { Caveat } from 'next/font/google';

// Initialize a font for the quote
const caveat = Caveat({
  subsets: ['latin'],
  weight: '400',
});

// This component accepts a 'quote' and an 'author' as props
export default function QuoteSection({ quote, author }) {
  // A default quote in case none is provided
  const defaultQuote = "Therapy is the gentle art of helping yourself by accepting help from others.";

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className={`${caveat.className} text-black text-5xl font-extralight`}>
          {quote || defaultQuote}
        </p>
        {author && (
          <p className="mt-4 text-gray-500 text-lg">- {author}</p>
        )}
      </div>
    </section>
  );
}