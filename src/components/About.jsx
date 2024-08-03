import React from 'react'
import about from '../assets/about.jpg'
const About = () => {
  return (
    <div className='w-full h-screen p-3 flex flex-col md:flex-row gap-5 bg-black'>
      <div className='w-full h-full rounded-xl flex flex-col justify-center items-center md:items-start gap-5 pl-[3vw]'>
        <h1 className='new text-white text-[5vw] leading-[5vw]'>ABOUT ME</h1>
        <p className='new text-center md:text-left text-[2.4vw] font-bold md:w-[60%] md:text-xl text-white'>HEY I am Aditya,Are you finding someone to make your dynamic website? I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops. lets shake hand.</p>
        <button className='bg-white new md:text-xl font-bold capitalize px-[5rem] rounded-md py-3'>contact me</button>
      </div>
      <div className='md:w-[80%] h-full rounded-xl overflow-hidden'>
        <img className='w-full h-full object-cover' src={about} alt="" />
      </div>
    </div>
  )
}

export default About