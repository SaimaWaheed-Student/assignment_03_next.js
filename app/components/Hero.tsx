import React from 'react'
import Navebar from './Navebar'



const Hero = () => {
  return (
    <div className='min-h-screen bg-no-repeat bg-[url(/girl3.jpeg)] bg-left lg:bg-[15%] bg-cover '
     style={{backgroundSize:"35%"}}
    >
      <Navebar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
           <div className='text-[50px] sm:text-[60px] font-bold leading-tight flex justify-center items-center mr-1'>
            <div>
           <p>I'm</p>
          <p>Saima</p>
          <p>Waheed</p>
      </div>
         </div>
           </div>
              </div>
    
  )
}

export default Hero