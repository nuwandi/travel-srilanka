import Image from 'next/image'
import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Map from '../../../components/Map'
import {StarIcon} from '@heroicons/react/solid'

function Index({dest, destDetail, nearbyPlaces}) {
  return (
    <div>
      <Header />
      <main className='max-w-7xl mx-auto px-6'>
          <div className='flex space-x-3 my-8'>
            <h1 className='text-2xl font-bold'>{dest[0].title}</h1>
            <div className='text-xs flex items-center'>
              <StarIcon className='h-4 text-red-400' /> {dest[0].star}
              </div>
          </div>
          <section className='flex-row space-y-3 md:space-y-0 md:flex md:space-x-3 justify-center'>
            <div className='relative h-52 w-full md:h-[460px] md:w-1/2 flex-shrink-0'>
                <Image 
                    src={destDetail.img1} 
                    layout='fill' 
                    objectFit='cover' 
                    className='md:rounded-l-2xl' 
                    loading='lazy'
                />
            </div>
            <div className='relative h-52 w-full md:h-[460px] md:w-1/2 flex-shrink-0'>
                <Image 
                    src={destDetail.img2} 
                    layout='fill' 
                    objectFit='cover' 
                    className='md:rounded-r-2xl' 
                    loading='lazy'
                />
            </div>
          </section>
          <section className='my-8'>
            <div className=''>
              <h3 className='text-sm text-gray-600'>
                📍 {destDetail.address}
              </h3>
              <div className='border-b w-32 my-8 mt-3'></div>
              <p>{dest[0].description}</p>
            </div>
          </section>
          {
            nearbyPlaces[0]['place'].length > 0 && (
              <section>
                <div className='my-8'>
                    <h4 className='font-semibold text-xl my-10'>Places nearby</h4>
                    <div className='grid md:grid-cols-4 md:space-x-3 space-y-3 md:space-y-0'>
                      {
                        nearbyPlaces[0]['place'].map((place, index) => (
                          <div className='flex md:rounded-2xl border hover:scale-105 hover:shadow-lg transform duration-150 ease-out' key={index}>
                            <div className='relative w-20 h-20 flex-shrink-0'>
                              <Image 
                                  src={place.img} 
                                  layout='fill' 
                                  objectFit='cover'
                                  loading='lazy'
                                  className='md:rounded-l-2xl'
                              />
                              </div>
                            <div className='ml-3 flex flex-col justify-center'>
                              <p className='font-regular'>{place.name}</p>
                              <p className='font-light text-xs italic text-red-500'>Price : {place.price}</p>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
              </section>
            )
          }
          
          <section className='overflow-hidden'>
            <h2 className='text-xl font-semibold my-8'>Where is this destination ?</h2>
            <Map destination={dest} destinationDetail={destDetail} />
          </section>
      </main>
      <Footer />
    </div>
  )
}

export default Index


export async function getServerSideProps(param) {
  const { id } = param.query;

  const dest = await fetch(`https://my-json-server.typicode.com/nuwandi/destinations-api/destinations?id=${id}`)
        .then(res => res.json());
  const destDetail = await fetch(`https://my-json-server.typicode.com/nuwandi/destination-detail-api/destinationDetail/${id}`)
        .then(res => res.json());
  const nearbyPlaces = await fetch(`https://my-json-server.typicode.com/nuwandi/nearbyplaces-api/nearbyPlaces?destinationId=${id}`)
        .then(res => res.json());

  return {
      props: {
        dest,
        destDetail,
        nearbyPlaces
      }
  }
}