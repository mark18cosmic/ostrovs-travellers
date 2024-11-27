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
    <div className="flex md:justify-between flex-col md:flex-row items-center md:min-h-[75vh] bg-[hsl(var(--background))] p-8 md:p-12 gap-8">
      {/* Left Content */}
      <div className="flex flex-col items-start space-y-6 md:w-1/2">
        <h1 className="text-[hsl(var(--primary))] text-3xl md:text-6xl font-extrabold leading-tight">
          Ostrovs Travellers
        </h1>
        <p className="text-[hsl(var(--foreground))] text-lg md:text-xl leading-relaxed">
          Discover the Maldives with the best travel agency. We provide luxurious resorts and affordable packages tailored to your travel needs.
        </p>
        <Button>
          Learn More
        </Button>
      </div>

      {/* Right Carousel */}
      <div className="md:w-1/2 hidden md:flex items-center justify-center">
        <Carousel className="w-full h-[24rem] rounded-lg overflow-hidden shadow-lg bg-[hsl(var(--card))]">
          <CarouselContent className="flex items-center gap-4">
            {/* Carousel Item 1 */}
            <CarouselItem className="w-full h-full relative">
              <Image
                src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Maldives Resort"
                width={1500} // Set the desired width
                height={800} // Set the desired height
                objectFit="cover"
                className="rounded-lg"
              />
            </CarouselItem>


            {/* Carousel Item 2 */}
            <CarouselItem className="w-full h-full relative">
              <Image
                src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Maldives Resort"
                width={1500} // Set the desired width
                height={800} // Set the desired height
                objectFit="cover"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="w-full h-full relative">
              <Image
                src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Maldives Resort"
                width={1500} // Set the desired width
                height={800} // Set the desired height
                objectFit="contain"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="w-full h-full relative">
              <Image
                src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Maldives Resort"
                width={1500} // Set the desired width
                height={800} // Set the desired height
                objectFit="cover"
                className="rounded-lg"
              />
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[hsl(var(--primary))] text-white p-3 rounded-full hover:bg-[hsl(var(--primary-hover))] transition" />
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[hsl(var(--primary))] text-white p-3 rounded-full hover:bg-[hsl(var(--primary-hover))] transition" />
        </Carousel>
      </div>
    </div>


  )
}

export default Hero