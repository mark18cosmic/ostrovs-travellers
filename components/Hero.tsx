import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const Hero = () => {
    return (
<div className="flex flex-col md:flex-row items-center min-h-[75vh] justify-between bg-[hsl(var(--background))] p-10 ">
  {/* Left Content */}
  <div className="max-w-lg space-y-6">
    <h1 className="text-[hsl(var(--primary))] text-5xl font-bold leading-tight">
      Ostrovs Travellers
    </h1>
    <p className="text-[hsl(var(--foreground))] text-lg leading-relaxed">
      Best travel agency in the Maldives providing the best resorts with cheap packages for your travelling needs.
    </p>
    <button className="px-6 py-3 bg-[hsl(var(--blue))] text-white rounded-lg shadow-md hover:bg-blue-600 transition">
      Explore Destinations
    </button>
  </div>

  {/* Right Carousel */}
  <div className="w-1/2">
    <Carousel className="relative overflow-hidden rounded-lg shadow-lg bg-[hsl(var(--card))] p-4">
      <CarouselContent className="flex items-center gap-4">
        <CarouselItem className="flex-shrink-0">
          <Image
            src="/image"
            alt="Image1"
            width={300}
            height={400}
            className="rounded-lg shadow-md"
          />
        </CarouselItem>
        <CarouselItem className="flex-shrink-0">
          <Image
            src="/image"
            alt="Image2"
            width={300}
            height={400}
            className="rounded-lg shadow-md"
          />
        </CarouselItem>
        <CarouselItem className="flex-shrink-0">
          <Image
            src="/image"
            alt="Image3"
            width={300}
            height={400}
            className="rounded-lg shadow-md"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[hsl(var(--primary))] text-white p-2 rounded-full hover:bg-primary-foreground transition" />
      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[hsl(var(--primary))] text-white p-2 rounded-full hover:bg-primary-foreground transition" />
    </Carousel>
  </div>
</div>

    )
}

export default Hero