import React from 'react'

function Footer() {
  return (
    <div className='px-32 py-14 pb-6 bg-gray-100 text-gray-600 mt-11'>
      <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 space-y-10 '>
        <div className='space-y-4 text-sm text-gray-800 pt-10'>
            <h5 className='font-bold'>Community</h5>
            <p>Blog</p>
            <p>Facebook</p>
            <p>Instagram</p>
        </div>
        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>Assistance</h5>
            <p>Security Informations</p>
            <p>Covid-19</p>
            <p>Report a Problem</p>
        </div>
        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>Destinations</h5>
            <p>Community Forum</p>
            <p>Ressources</p>
            <p>Sustainable Traveling</p>
        </div>
        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>What is Travel Sri Lanka</p>
            <p>Newsrooms</p>
            <p>Investors</p>
        </div>
      </div>
      <div className='text-center text-xs pt-16'>Copyright © 2022 Nuwandi Senanayake. All rights reserved.</div>
    </div>
  )
}

export default Footer
