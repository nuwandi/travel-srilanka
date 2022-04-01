import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SmallCard({img, location, id}) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out'>
        <Link href="/destination/[id]" as={`/destination/${id}`}>
          <div className='relative h-16 w-16'>
            <Image src={img} layout='fill' className='rounded-lg' loading='lazy'/>
          </div>
          </Link>
          <Link href="/destination/[id]" as={`/destination/${id}`}>
            <div>
              <h2>{location}</h2>
            </div>
        </Link>
    </div>
  )
}

export default SmallCard
