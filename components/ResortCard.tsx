// components/ResortCard.js
import Link from 'next/link';
import Image from 'next/image';

export interface ResortCardProps {
    resort: {
        id: string;
        name: string;
        location: string;
        description: string;
        image: string;
        rating?: string;
        tag?: string;
    }
}

export default function ResortCard({ resort }: ResortCardProps) {
    return (
        <Link href={`/${encodeURIComponent(resort.name.replace(/\s+/g, '-').toLowerCase())}`}>
            <div className="w-60 h-80 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                {/* Resort Image */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-200">
                    <Image
                        src={resort.image || '/default-image.jpg'} // Default image if no resort image
                        alt={resort.name}
                        layout="fill"
                        objectFit="cover"
                        className=""
                    />
                </div>

                {/* Resort Info */}
                <div className="mt-4 flex flex-col justify-between ">
                    {/* Resort Name */}
                    <h2 className="text-xl font-semibold text-primary leading-tight truncate">{resort.name}</h2>

                    {/* Resort Location */}
                    <p className="text-sm text-gray-600 flex mt-2 items-center gap-1 truncate">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-secondary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.657 16.657L13.414 12 17.657 7.343a8 8 0 10-11.314 0L10.586 12l-4.243 4.657a8 8 0 1011.314 0z"
                            />
                        </svg>
                        {resort.location}
                    </p>
                </div>
            </div>



        </Link>
    );
}
