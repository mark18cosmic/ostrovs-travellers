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
    <Link href={`/${resort.name.toLowerCase()}`}>
      <div className="p-4 bg-highlight rounded-lg shadow-md hover:scale-105 transition-transform">
        <div>
            <Image src={resort.image} alt="image" width={50} height={100}/>
        </div>
        <h2 className="text-lg font-bold text-primary">{resort.name}</h2>
        <p className="text-sm text-secondary">{resort.location}</p>
      </div>
    </Link>
  );
}
