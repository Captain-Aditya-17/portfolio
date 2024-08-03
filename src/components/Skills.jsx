import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)
import isagi from '../assets/isagi.avif'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import gsapimg from '../assets/gsap.png'
import github from '../assets/github.jpeg'
const Skills = () => {
    useGSAP(
        ()=>{
            gsap.to('.slide',{
                scrollTrigger:{
                    trigger: '.skills',
                    start: '10% top',
                    end: 'bottom bottom',
                    scrub: 1
                },
                xPercent: -100
            })
        }
    )
    return (
        <div className='w-full h-screen md:h-[300vh] skills relative bg-black'>
            <div className='w-full h-screen flex flex-col sticky top-0'>
                <div className='w-full h-1/2 flex justify-between p-3'>
                    <div className='hidden md:block w-1/2 h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full object-cover' src={isagi} alt="" />
                    </div>
                    <div className='text-white flex flex-col items-center justify-center'>
                        <h1 className='capitalize font-bold new text-[8vw]'>my skills</h1>
                        <p className='text-xl text-center'>My vaulable skills you need to make your website the best ever.</p>
                    </div>
                </div>
                <div className='hidden w-full h-1/2 md:flex flex-col md:flex-row slide bg-black'>
                    <div className='w-full h-full p-3 flex gap-[5vw] items-center justify-end flex-shrink-0'>
                        {
                            ['https://aditya-mate-webdeveloper.netlify.app/html.png','https://aditya-mate-webdeveloper.netlify.app/css.png','https://aditya-mate-webdeveloper.netlify.app/js.png'].map((item,index)=>{
                               return <div className='w-[15vw] h-[15vw] rounded-full overflow-hidden'>
                                <img className='w-full h-full object-cover' src={item} alt="" />
                               </div>
                            })
                        }
                    </div>
                    <div className='w-full h-full p-3 flex gap-[5vw] items-center justify-start flex-shrink-0'>
                        {
                            ['https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1Z_5OkeOwWEoUkRCDf9PCJ6YnGzbAcfn6Q&s','https://avatars.githubusercontent.com/u/2386673?v=4'].map((item,index)=>{
                               return <div className='w-[15vw] h-[15vw] rounded-full overflow-hidden'>
                                <img className='w-full h-full object-cover' src={item} alt="" />
                               </div>
                            })
                        }
                    </div>
                </div>
                <div className='flex w-full h-1/2 md:hidden flex-col md:flex-row  bg-black'>
                    <div className='w-full h-1/2 p-3 flex gap-[5vw] items-center justify-center flex-shrink-0'>
                        {
                            [html,css,js].map((item,index)=>{
                               return <div className='w-[25vw] h-[25vw] rounded-full overflow-hidden'>
                                <img className='w-full h-full object-cover' src={item} alt="" />
                               </div>
                            })
                        }
                    </div>
                    <div className='w-full h-1/2 p-3 flex gap-[5vw] items-center justify-center flex-shrink-0'>
                        {
                            [react,github,gsapimg].map((item,index)=>{
                               return <div className='w-[25vw] h-[25vw] rounded-full overflow-hidden'>
                                <img className='w-full h-full object-cover' src={item} alt="" />
                               </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills