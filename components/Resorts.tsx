"use client"

import { useState, useEffect } from "react";
import ResortCard from "./ResortCard"; // Assuming you have this component for resort cards
import { fetchResorts } from "@/firebase/fetchResorts"; // Fetch resorts data from Firebase

export interface ResortProps {
  tag: string;
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  rating: string;
}

interface PopularResortsProps {
  label: string;
}

const Resorts: React.FC<PopularResortsProps> = ({ label }) => {
  const [resorts, setResorts] = useState<ResortProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResortsData = async () => {
      try {
        const data = await fetchResorts(); // Assuming this function fetches resorts from Firebase
        setResorts(data);
      } catch (error) {
        console.error("Error fetching resorts data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResortsData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-7 md:p-10 text-black">
      <div>
        <h2 className="font-semibold text-xl md:text-3xl">{label}</h2>
      </div>
      <div className="flex overflow-x-scroll w-full scrollbar-hide gap-4">
        <div className="flex flex-row gap-4">
          {resorts.map((resort) => (
            <ResortCard
              key={resort.id}
              name={resort.name}
              location={resort.location} 
              description={resort.description}
              image={resort.image}
              rating={resort.rating}
              tag={resort.tag}
            />
          ))}
        </div>
      </div>
      </div>
  );
};

export default Resorts;
