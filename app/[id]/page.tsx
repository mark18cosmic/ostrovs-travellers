// Import necessary modules and components
import { Metadata } from 'next';
import { fetchResorts } from '@/firebase/fetchResorts';

// Export metadata as an asynchronous function for SSR
export async function generateMetadata({ params }: { params: { name: string } }): Promise<Metadata> {
  const resorts = await fetchResorts(); // Fetch all resorts from Firestore
  const resort = resorts.find((rest) => rest.name.replace(/\s+/g, '-').toLowerCase() === params.name); // Find resort by name
  
  // Return metadata based on the found resort
  if (resort) {
    return {
      title: `${resort.name} | Ostrovs Travellers`, // Use the resort's name for the title
      description: `Discover the beauty of ${resort.name} and explore its amenities.`, // Description based on resort
    };
  }

  // Fallback metadata if resort not found
  return {
    title: 'Ostrovs Travellers',
    description: 'Explore the best resorts worldwide and find your perfect getaway.',
  };
}

// Generate static params for SSG
export async function generateStaticParams() {
  const resorts = await fetchResorts(); // Fetch all resorts
  return resorts.map((resort) => ({
    id: resort.name.replace(/\s+/g, '-').toLowerCase(), // Generate path based on resort name
  }));
}

// ResortDetail page component
export default async function ResortDetail({ params }: { params: {
  id: string; name: string 
} }) {
  const resorts = await fetchResorts(); // Fetch resorts data
  const resort = resorts.find((rest) => rest.name.replace(/\s+/g, '-').toLowerCase() === params.id); // Match resort by name

  if (!resort) {
    return <p>Resort not found.</p>; // Show message if resort is not found
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl text-primary">{resort.name}</h1>
      <p>{resort.description}</p>
      <p className="text-sm text-gray-500">Location: {resort.location}</p>
      {/* Render resort details using ResortCard or similar component */}
          </div>
  );
}
