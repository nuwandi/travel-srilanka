import React from 'react'
import { useRouter } from 'next/router';

function Banner() {
  const router = useRouter();

  return (
    <div className={`bg-fixed bg-no-repeat bg-cover bg-right relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] -mt-32 bg-[url('https://www.teahub.io/photos/full/328-3285289_tangalle-sri-lanka-sunset.jpg')]`}>
       <div className='absolute top-1/2 w-full text-center'>
           <p className='text-sm sm:text-lg text-white'>Not sure where to go ? Perfect.</p>
           <button
            onClick={() => router.push('/search')} 
            className='text-red-400 bg-white px-10 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'
            >
               I'm flexible
            </button>
       </div>
    </div>
  )
}

export default Banner
