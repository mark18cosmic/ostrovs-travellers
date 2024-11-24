import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='p-4 flex flex-row items-center justify-between'>
        <div className='h-20 w-20 cursor-pointer'>
            <Image src="/Ostrovs-logo.jpg" alt='Ostrovs Travellers' height={200} width={200}/>
        </div>
        <div>
            <Button>Book Now</Button>
        </div>
    </div>
  )
}

export default Navbar