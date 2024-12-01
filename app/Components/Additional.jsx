import React from 'react'
import Image from 'next/image'

const Additional = () => {
  return (
    <div>
<section class="bg-white mt-24 mb-14">
    <div class="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
        <Image class="w-full" src="/CTS-stamp.jpg" height={500} width={500} alt="dashboard image"/>
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-[#14274E] uppercase">Innovate ✨. Strategize 🖋️. Create 🛠️.</h2>
            <br />
            <p class="mb-6 font-light text-black md:text-lg ">At Creative Techscapes, we launch 🚀 bold ideas into reality. With thoughtful strategies 🖋️, we pave the way for transformative solutions. And when its time to create 🎉, we craft with passion and precision to deliver results that inspire and impress. Lets shape the future together! 🌟</p>
            <a href="#" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</section>
    </div>
  )
}

export default Additional