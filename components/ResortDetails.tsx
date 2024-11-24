'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { fetchResorts } from '@/firebase/fetchResorts'; // Fetch resorts from Firestore

// Define the type for params
interface ResortParams {
    id: string;
}

export default function ResortDetail({ params }: { params: ResortParams }) {
    const [resort, setResort] = useState<any | null>(null);
    const [error, setError] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const fetchResort = async () => {
            const { id } = params;
            const formattedName = decodeURIComponent(id.replace(/-/g, ' ')); // Decode the resort name

            try {
                const resorts = await fetchResorts(); // Fetch resort data from Firestore
                const foundResort = resorts.find(
                    (res) => res.name.toLowerCase() === formattedName.toLowerCase()
                );

                if (!foundResort) {
                    setError(true);
                    router.push('/404'); // Redirect to 404 page if not found
                } else {
                    setResort(foundResort);
                }
            } catch (error) {
                setError(true);
                router.push('/404'); // Handle fetch error
            }
        };

        fetchResort();
    }, [params, router]);

    // If an error occurred, display the error message
    if (error) return <div>Resort not found</div>;

    // Display the resort content
    return (
        <main className="m-4 md:m-6 flex flex-col gap-5 md:gap-8 text-black">
            <div className="flex items-center justify-center">
                <Image
                    src={resort!.image}
                    alt={resort!.name}
                    width={500}
                    height={500}
                    className="rounded-lg object-cover hover:scale-105"
                />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-semibold">{resort!.name}</h3>
                </div>
                <div>
                    <p className="font-light">{resort!.description}</p>
                </div>
            </div>
            <div>
                <p className="flex items-center gap-1 flex-row">
                    Location: {resort!.location}
                </p>
            </div>
        </main>
    );
}
