import React from 'react'
import 'tailwindcss/tailwind.css';
import '../globals.css';
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const Connect = () => {
  return (
    <div className='navbar-text'>
        <div className='flex justify-center text-center text-3xl text-[#14274E] m-9'>
            CONNECT WITH US
        </div>

        <div className=" m-5 mt-10 flex justify-evenly">
                     <Link href={"/"}><BsInstagram  className='text-3xl text-[#14274E]'/></Link>
                     <Link href={"/"}><BsGithub className='text-3xl text-[#14274E]'/></Link>
                     <Link href={"/"}><BsYoutube className='text-3xl text-[#14274E]'/></Link>
                     <Link href={"/"}><BsLinkedin className='text-3xl text-[#14274E]'/></Link>
                     <Link href={"/"}><BsFacebook  className='text-3xl text-[#14274E]'/></Link>
                     <Link href={"/"}><FaXTwitter  className='text-3xl text-[#14274E]'/></Link>
        </div>
    </div>
  )
}

export default Connect