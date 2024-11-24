// Import necessary modules and components
import { fetchResorts } from '@/firebase/fetchResorts';

// Generate static params for SSG
export async function generateStaticParams() {
  const resorts = await fetchResorts(); // Fetch all resorts
  return resorts.map((resort) => ({
    id: resort.name.replace(/\s+/g, '-').toLowerCase(), // Generate path based on resort name
  }));
}

// ResortDetail page component
export default async function ResortDetail({ params }: { params: {
  id: string;
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
