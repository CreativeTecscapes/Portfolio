"use client"
import React, {useEffect, useRef} from "react";
import 'tailwindcss/tailwind.css';
import '../globals.css';
import Typed from 'typed.js';
import Image from "next/image";
import { Link } from 'react-scroll'

const Hero = () => {

  const typingRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'CREATIVE TECHSCAPES',
            ],
            typeSpeed:50,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
            showCursor: true,
        };

        const typingInstance = new Typed(typingRef.current, options);

        return () => {
            typingInstance.destroy();
        };
    }, []);


  return (
    <div className='navbar-text' id="Hero">
      <div className="relative w-full">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
          <div className="inline-flex items-center">
            <Image src="/CTS LOGO FINAL.png" height={96} width={200}/>
          </div>
          <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
            <p className="text-xs font-medium md:text-sm text-[#14274E]">
              Explore more about Creative TechScapes.
              <span className="ml-2 cursor-pointer font-bold"><Link activeClass="active" to="Services" spy={true} smooth={true} offset={-70} duration={500}>Read More &rarr;</Link></span>
            </p>
          </div>
          <h1 className="mt-8 max-w-5xl text-3xl  tracking-tight text-[#14274E] md:text-4xl lg:text-6xl">
            Design Your Vision Empowered By Our Tech Expertise.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-[#394867]">
            Creative TechScapes is a software development company. We design and develop Full Stack Websites, Full Stack Mobile Applications
            , We also develop Machine Learning Models and Applications Based on Blockchain.
          </p>
          
        </div>
      </div>
    </div>

    

        <div className="text navbar-text text-2xl sm:text-5xl lg:text-8xl tracking-wide flex flex-col sm:flex-row justify-center p-5 sm:p-10 mt-5 mb-5 text-[#14274E] ">
          <div className="typing mb-5 sm:mb-0 sm:mr-5">
            <span ref={typingRef} />
          </div>
        </div>



       <div className="relative w-full">
      <div className="mx-auto max-w-7xl lg:px-8">
 
        <div className="rounded-lg p-4">
          <img
            className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc1fHx0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
       
  </div>
  )
}

export default Hero