import React from 'react'
import Image from 'next/image'

const Intro = () => {
  return (
    <div>



<div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

    
    <div class="w-full h-64 lg:w-1/2 lg:h-auto rounded-2xl px-1 lg:px-0">
        <img class="h-full w-full object-cover rounded-2xl" src="https://t4.ftcdn.net/jpg/10/41/96/07/360_F_1041960759_xekadbksGzLZzD0pPWheaedWUA54ymrJ.jpg" alt="Winding mountain road"/>
    </div>
    
    <div
        class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
       
        <div class="flex flex-col p-12 md:px-16">
            <h2 class="text-2xl font-medium uppercase text-[#14274E] lg:text-3xl">Design Your Vision Empowered By Our Tech Expertise.</h2>

            <p class="mt-4 text-justify">
            Creative TechScapes is a software development agency specializing in crafting stunning websites, user-friendly mobile apps, advanced AI solutions, and secure blockchain applications. With a focus on creativity and innovation, we deliver tailored digital experiences that engage users, drive results, and shape the future of technology.  
            </p>
          
            <div class="mt-8">
                <a href="#"
                    class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-[#14274E] border-solid border-2 py-4 px-10 hover:bg-[#14274E] hover:shadow-md md:w-48">Read
                    More</a>
            </div>
        </div>
        
    </div>
   

</div>
    </div>
  )
}

export default Intro