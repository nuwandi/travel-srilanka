import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

function MediumCard({img, title, tag}) {
  const router = useRouter();
  
  const showDest = (tag) => {
    router.push({
      pathname: "/search",
      query: {
        experience: tag
      }
    })
  }

  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out' onClick={() => showDest(tag)}>
      <div className='relative h-64 w-64'>
          <Image src={img} layout='fill' className='rounded-xl object-cover' loading='lazy' />
      </div>
      <h3 className='text-2xl mt-3'>{title}</h3>

      
    </div>
  )
}

export default MediumCard
