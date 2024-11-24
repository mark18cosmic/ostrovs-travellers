// app/[id]/page.tsx (This is your dynamic route page for ResortDetail)

import ResortDetail from '@/components/ResortDetails';
import { fetchResorts } from '@/firebase/fetchResorts'; // Ensure this is the correct path to your data-fetching function

// Generate static params for SSG
export async function generateStaticParams() {
  const resorts = await fetchResorts(); // Fetch all resorts from Firebase
  return resorts.map((resort) => ({
    id: resort.name.replace(/\s+/g, '-').toLowerCase(), // Generate path based on resort name
  }));
}

// ResortDetail page component
export default async function ResortDetailPage({ params }: { params: { id: string } }) {
  const resorts = await fetchResorts(); // Fetch resorts data
  const resort = resorts.find((rest) => rest.name.replace(/\s+/g, '-').toLowerCase() === params.id); // Match resort by name

  if (!resort) {
    return <p>Resort not found.</p>; // Show message if resort is not found
  }

  return <ResortDetail params={params} />;
}
