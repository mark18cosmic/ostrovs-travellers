import Hero from "@/components/Hero";
import Resorts from "@/components/Resorts";

export default function Home() {
  return (
    <div className="flex flex-col p-4">
        <Hero />
        <Resorts label={"Top rated"} />
        <Resorts label={"Recommended"} />
        <Resorts label={"Affordable"} />
        <Resorts label={"Basic"} />
        
    </div>
  );
}
