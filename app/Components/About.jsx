import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";


export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0 text-[#14274E] mt-40" id='About'>
      <div className="mx-auto max-w-3xl md:text-center">
                  <div className='flex justify-center text-center text-3xl text-[#14274E] mt-16 py-5'>
                       We Are Team Creative TechScapes!👩‍💻
                  </div>
        <p className="mx-auto mt-4 max-w-2xl text-[#394867] py-2 text-lg">
            Bringing your vision to life with innovation, creativity, and cutting-edge technology. Let's turn your dreams into digital reality!
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:flex justify-evenly">
        
          <div className="mx-auto w-[300px] rounded-md border shadow-md hover:shadow-2xl ">
            <img
              src="/Rudalph_CTS_Image.jpeg"
              alt="Laptop"
              className="h-[300px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold">Mr. Rudalph Gonsalves</h1>
              <h6 className="mt-3 font-medium">Founder and CEO, Creative Techscapes</h6>
              <div className="mt-3 text-sm">
                 <ol>
                    <li>🌐 Full Stack Developer</li>
                    <li>👩‍💻 Computer Engineer</li>
                 </ol>
              </div>
              <div className="mt-4 flex flex-wrap">
                <div className="w-auto p-1.5">
                  <a href="https://www.linkedin.com/in/rudalphgonsalves/">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <FaLinkedinIn />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>




          <div className="mx-auto w-[300px] rounded-md border shadow-md hover:shadow-2xl">
            <img
              src="/Shruti CTS image.jpeg"
              alt="Laptop"
              className="h-[300px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold">Ms. Shruti Patil</h1>
              <h6 className="mt-3 font-medium">Co-founder and CTO, Creative Techscapes</h6>
              <div className="mt-3 text-sm">
                 <ol>
                    <li>🌐 Full Stack Developer</li>
                    <li>👩‍💻 Computer Engineer</li>
                 </ol>
              </div>
              <div className="mt-4 flex flex-wrap">
                <div className="w-auto p-1.5">
                  <a href="https://www.linkedin.com/in/shruti-patil-2055b6231/">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <FaLinkedinIn />
                    </div>
                  </a>
                </div>            
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
