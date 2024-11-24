import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
    return (
<div className="flex flex-col md:flex-row items-center min-h-[75vh] md:justify-between bg-[hsl(var(--background))] p-7 md:p-10 gap-4">
  {/* Left Content */}
  <div className="max-w-lg space-y-6">
    <h1 className="text-[hsl(var(--primary))] text-5xl font-bold leading-tight">
      Ostrovs Travellers
    </h1>
    <p className="text-[hsl(var(--foreground))] text-lg leading-relaxed">
      Best travel agency in the Maldives providing the best resorts with cheap packages for your travelling needs.
    </p>
    <Button className="text-white rounded-lg shadow-md transition">
      Explore Destinations
    </Button>
  </div>

  {/* Right Carousel */}
  <div className="md:w-1/2">
    <Carousel className="relative overflow-hidden rounded-lg shadow-lg bg-[hsl(var(--card))] p-4">
      <CarouselContent className="flex items-center gap-4">
        <CarouselItem className="flex-shrink-0">
          <Image
            src="/image"
            alt="Image1"
            width={300}
            height={400}
            className="rounded-lg object-fit shadow-md"
          />
        </CarouselItem>
        <CarouselItem className="flex-shrink-0">
          <Image
            src="/image"
            alt="Image2"
            width={300}
            height={400}
            className="rounded-lg object-fit shadow-md"
          />
        </CarouselItem>
        <CarouselItem className="flex-shrink-0">
          <Image
            src="/image"
            alt="Image3"
            width={300}
            height={400}
            className="rounded-lg object-fit shadow-md"
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