// components/ResortCard.js
import Link from 'next/link';
import Image from 'next/image';

export interface ResortCardProps  {
  resort: {
    id: string;
    name: string;
    location: string; 
    description: string;
    image: string;
    rating: string;
    tag: string;
  }
}

export default function ResortCard ({ resort } : ResortCardProps) {
  return (
    <Link href={`/${encodeURIComponent(resort.name.replace(/\s+/g, '-').toLowerCase())}`}>
      <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform transform-gpu hover:shadow-2xl">
  {/* Resort Image */}
  <div className="relative w-full h-48 rounded-lg overflow-hidden">
    <Image 
      src={resort.image || '/default-image.jpg'} // Default image if no resort image
      alt={resort.name}
      layout="fill" 
      objectFit="cover" 
      className="transition-transform duration-300 ease-in-out" 
    />
  </div>

  {/* Resort Info */}
  <div className="mt-4">
    <h2 className="text-2xl font-semibold text-primary truncate">{resort.name}</h2>
    <p className="text-sm text-secondary mt-2 truncate">{resort.location}</p>

    {/* Rating (Optional if you have a rating field) */}
    {resort.rating && (
      <div className="mt-3 flex items-center space-x-2">
        <span className="text-yellow-500">⭐</span>
        <span className="text-sm text-gray-600">{resort.rating}</span>
      </div>
    )}
  </div>
</div>

    </Link>
  );
}
