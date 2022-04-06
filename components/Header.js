import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/solid'
import { useRouter } from 'next/router';

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);  

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput
      }
    })
  }

  return (
    <div className={`sticky top-0 z-50 ${y === 0 ? "bg-transparent" : "bg-white shadow-md"} p-5 md:px-10 transition duration-200 ease-out`}>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 md:px-6'>
        <div 
          className={`flex items-center cursor-pointer my-auto uppercase font-extrabold text-lg text-red-400 justify-center md:justify-start`} 
          onClick={() => router.push('/')}
        >
            <span className='font-light'>Travel </span> Sri Lanka
        </div>
        <div className='flex items-center border-2 rounded-full py-2 md:shadow-sm'>
            <input 
              type='text' 
              placeholder='Where do you want to go'
              className={`pl-2 bg-transparent outline-none flex-grow text-sm  ${y === 0 ? 'placeholder-gray-300 text-gray-300' : 'placeholder-gray-400 text-gray-600'}`}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button disabled={!searchInput} onClick={search}>
              <SearchIcon 
                className='inline-flex h-8 bg-red-400 text-white rounded-full p-2 md:mx-2' 
              />
            </button>
        </div>
      </div>
    </div>
  )
}

export default Header
