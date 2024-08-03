import React from 'react'
import spotify from '../assets/spotify.png'
import myntra from '../assets/myntra.png'
import significo from '../assets/significo.png'
import porsche from '../assets/porsche.png'
import zoro from '../assets/zoro.jpeg'

const Projects = () => {
    const lists = [
        {
            img: spotify,
            name: 'frontend music app',
            site: 'https://aditya-music-app.netlify.app/'
        },
        {
            img: myntra,
            name: 'frontend ecommerce website',
            site: 'https://aditya-shop.netlify.app/'
        },
        {
            img: significo,
            name: 'animated website',
            site: 'https://significo-sage.vercel.app/'
        },
        {
            img: porsche,
            name: 'Company Work',
            site: 'https://porsche-pied.vercel.app/'
        },
        
    ]
  return (
    <div className='w-full p-3 h-[150vh] md:h-screen flex gap-3 bg-black'>
        <div className='hidden w-[35vw] h-full p-3 md:flex flex-col items-center gap-5 bg-[#0D1117] rounded-xl'>
            <div className='w-[18vw] h-[18vw] rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={zoro} alt="" />
            </div>
            <div className='w-full h-1/2 flex flex-col gap-y-3 items-start'>
            <h1 className='text-4xl font-bold new capitalize text-white'>Aditya mate</h1>
            <h1 className='text-xl font-bold new capitalize text-zinc-500'>frontend developer</h1>
        <button className='bg-white new md:text-xl font-bold capitalize px-[5rem] rounded-md py-3'>contact me</button>
            </div>
        </div>
        <div className='w-full h-full flex flex-col gap-y-3 bg-[#0D1117] p-3 rounded-xl'>
                <h1 className='capitalize text-white font-bold new text-3xl'>my Project</h1>
                <div className='w-full h-full flex flex-wrap items-center justify-start gap-5'>
                {
                    lists.map((item,index)=>{
                        return <a href={item.site}>
                            <div className='md:w-[25vw] elem relative md:h-[15vw] rounded-xl '>
                            <img className='w-full h-full object-cover rounded-xl' src={item.img} alt="" />
                            <a href={item.site} className='text-xl capitalize cursor-pointer new text-white'>{item.name}</a>
                        </div>
                        </a>
                    })
                }
                    </div>
        </div>
    </div>
  )
}

export default Projects