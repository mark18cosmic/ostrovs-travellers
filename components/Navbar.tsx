import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='py-2 px-7 md:px-10 flex flex-row items-center justify-between'>
      <div className='h-20 w-20 cursor-pointer'>
        <Link href={"/"}>
          <Image src="/Ostrovs-logo.jpg" alt='Ostrovs Travellers' height={200} width={200} />
        </Link>
      </div>
      <div>
        <Button>Book Now</Button>
      </div>
    </div>
  )
}

export default Navbar