"use client"
import React,{useEffect, useRef} from "react";
import 'tailwindcss/tailwind.css';
import '../globals.css';
import { Faster_One } from 'next/font/google'
import Typed from 'typed.js';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll'


const navfont = Faster_One({ subsets: ['latin'], weight: ['400'] })

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

      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">

        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-xl lg:text-5xl font-bold leading-tight mb-4"><a href={"/"} className={navfont.className}><span ref={typingRef} /></a></h1>
          <Link  activeClass="active" to="Navbar1" spy={true} smooth={true} offset={1} duration={1000}> 
          <p className=" bg-yellow-400 text-gray-900 hover:bg-yellow-300  rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"><ArrowDown size={40}/></p>
          </Link>
        </div>
      </div>



      {/* <div className="relative w-full">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
          <div className="flex items-center justify-center md:justify-start md:items-start">
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
            src="https://www.softwaresuggest.com/blog/wp-content/uploads/2020/02/The-7-Stages-of-Enterprise-Application-Software-Development.png"
            // src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc1fHx0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>
    </div> */}

    </div>
  )
}

export default Hero