"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchResorts } from "@/firebase/fetchResorts"; // Ensure this function fetches resorts from Firebase

export default function ResortDetail() {
  const router = useRouter();
  const [resort, setResort] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Destructure `name` from `router.query` only if `router.query` is defined
  const { name } = router.query || {};

  useEffect(() => {
    // Ensure the router is ready before fetching data
    if (router.isReady && name) {
      setIsLoading(false); // Now router is ready

      const fetchResortData = async () => {
        try {
          // Fetch all resorts or query Firestore for the resort using its name
          const resorts = await fetchResorts();
          const searchName = Array.isArray(name) ? name[0] : name;

          // Search for the resort by its name
          const foundResort = resorts.find(
            (resort) => resort.name.toLowerCase() === searchName.toLowerCase()
          );

          if (foundResort) {
            setResort(foundResort);
          } else {
            // Resort not found - redirect to a 404 page
            router.push("/404");
          }
        } catch (error) {
          console.error("Error fetching resorts:", error);
        }
      };

      fetchResortData();
    }
  }, [name, router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!resort) {
    return <p>Resort not found.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl text-primary">{resort.name}</h1>
      <p>{resort.description}</p>
      <p className="text-sm text-gray-500">Location: {resort.location}</p>
    </div>
  );
}
