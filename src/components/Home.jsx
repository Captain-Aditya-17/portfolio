import React from 'react'
import home from '../assets/home.jpg'
const Home = () => {
    return (
        <div className='w-full h-screen flex p-3 flex-col gap-y-3 gap-5 md:flex-row'>
            <div className='w-full h-full flex items-end justify-end  md:flex-col gap-y-5'>
                <div className='flex flex-col items-end'>
                    {
                        ['frontend','web developer'].map((item,index)=>{
                            return <h1 className='text-[25vw] md:text-[12vw] uppercase kajiro leading-[20vw] md:leading-[10vw] line-clamp-1'>{item}</h1>
                        })
                    }
                </div>
                <div className='hidden md:block w-[60%] '>
                    <p className='text-2xl text-right font-semibold'>Welcome to make you website incridible contact me and let me handle your project ad take it to the peak.</p>
                </div>
                <div className='hidden md:flex w-full h-[30%] text-white items-center justify-around bg-black rounded-xl'>
                    {
                        ['2 Years experience','50+ Projects'].map((item,index)=>{
                            return  <h1 className='text-3xl new font-bold'>{item}</h1>
                        })
                    }

                </div>
            </div>
            <div className='w-full overflow-hidden h-full rounded-xl'>
                <img className='w-full h-full object-cover' src={home} alt="" />
            </div>
        </div>
    )
}

export default Home