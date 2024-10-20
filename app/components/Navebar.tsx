import Link from 'next/link'
import React from 'react'

const Navebar = () => {
  return (
    <div>
        <div className='bg-black-400  h-12 py-4'>
            <div className='text-red-700 flex justify-between items-center px-6'>
              <div className='text-xl font-medium'>Saima Waheed</div>
              
              <ul className='gap-10 lg:gap-16 hidden md:flex'>
      <Link className='hover:text-blue-700 flex gap-2'href='/'>HOME</Link>
      <Link className='hover:text-blue-700'href='/about'>ABOUT</Link>
      <Link className='hover:text-blue-700'href='/services'>SERVICES</Link>
      <Link className='hover:text-blue-700'href='/contect'>CONTECT US</Link>
</ul>
</div>
</div>

    </div>
  )
}

export default Navebar