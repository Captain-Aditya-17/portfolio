import React from 'react'
import contact from '../assets/contact.jpg'
const Contact = () => {
    return (
        <div className='w-full h-screen text-white p-3 flex flex-col md:flex-row justify-between bg-black'>
            <div>
                <h1 className='text-[9vw] md:text-[5vw] new'>Contact Me</h1>
                <p>And make your project above your imagination</p>
            </div>
            <div className='md:w-1/2 flex flex-col gap-3 p-3 items-end justify-between'>
                <div className='w-full h-[50vw] md:h-[25vw] overflow-hidden rounded-xl'>
                    <img className='w-full h-full object-cover' src={contact} alt="" />
                </div>
                <div>
                    <div className='flex flex-col gap-y-3 items-end'>
                        <h1 className='text-4xl text-white new'>Mail</h1>
                        <p>khushimate90@gmail.com</p>
                    </div>
                    <div className='flex flex-col gap-y-3 items-end'>
                        <h1 className='text-4xl text-white new'>Intragram</h1>
                        <p>aditya_graphix17</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact