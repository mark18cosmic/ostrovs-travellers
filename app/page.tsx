import Hero from "@/components/Hero";
import ResortCard from "@/components/ResortCard";
import Resorts from "@/components/Resorts";

export default function Home() {
  return (
    <div className="flex flex-col p-4">
        <Hero />
        <Resorts label={"Listings"} />
        
    </div>
  );
}
