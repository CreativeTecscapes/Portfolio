import React from 'react'
import 'tailwindcss/tailwind.css';
import '../globals.css';
import Image from 'next/image';
import Link from 'next/link';




const Navbar = () => {
  return (
    <div className='sticky top-0 z-50'>
      <div className='navbar-text bg-[#F1F6F9] h-20 px-5 flex justify-between shadow-md hover:shadow-lg'>

          <div className='text-4xl py-5 text-[#14274E]'>
            <Link href={"/"} className=''>Creative TechScapes</Link>
          </div>

          <div className='flex py-3'>

            <div className='pr-20'>
                <Link href={'/'}>
                    <div className='ml-0.5'><Image src="/system-regular-41-home.gif" width={40} height={20}/></div>
                    <div className='text-sm'>Home</div>
                </Link>
            </div>

            <div className='pr-20'>
                <Link href={'/'}>
                    <div className='ml-6'><Image src="/system-regular-178-work.gif" width={40} height={20}/></div>
                    <div className='text-sm'>Our Services</div>
                </Link>
            </div>

            <div className='pr-20'>
                <Link href={'/'}>
                    <div className='ml-2.5'><Image src="/wired-gradient-268-avatar-man (1).gif" width={45} height={20}/></div>
                    <div className='text-sm'>About us</div>
                </Link>
            </div>

            <div className='pr-2'>
                <Link href={'/'}>
                    <div className='ml-4'><Image src="/system-regular-47-chat.gif" width={45} height={20}/></div>
                    <div className='text-sm'>Contact us</div>
                </Link>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Navbar