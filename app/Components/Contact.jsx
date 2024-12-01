import React from 'react'
import 'tailwindcss/tailwind.css';
import '../globals.css';
import { ArrowRight } from 'lucide-react'
import Image from 'next/image';
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div className='navbar-text' id='Contact'>
        {/* <div >
            <section>
              <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 w-auto">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                  
                  <div className='flex justify-center text-left text-3xl text-[#14274E] m-9 xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md'>
                     📢 Let&apos;s Hear from You! 📨
                  </div>
                  
                  <form action="https://formsubmit.co/creativetechscapes2003@gmail.com" method="POST" className="mt-8">
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="name" className="text-base font-medium text-gray-900">
                          {' '}
                          Full Name{' '}
                        </label>
                        <div className="mt-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Full Name"
                            id="name"
                            name='name'
                          ></input>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="text-base font-medium text-gray-900">
                          {' '}
                          Email address{' '}
                        </label>
                        <div className="mt-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            placeholder="Email"
                            id="email"
                            name='email'
                          ></input>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="text-base font-medium text-gray-900">
                            {' '}
                            Subject{' '}
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter subject"
                            name='subject'
                          ></input>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="text-base font-medium text-gray-900">
                            {' '}
                            Message{' '}
                          </label>
                        </div>
                        <div className="mt-2">
                          <textarea
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter your message"
                            name='message'
                          ></textarea>
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center rounded-md bg-[#14274E] px-3.5 py-2.5 font-semibold leading-7 text-white"
                        >
                          Submit <ArrowRight className="ml-2" size={16} />
                        </button>
                      </div>
                    </div>
                  </form>
                  
                </div>
              </div>
            </section>

            

        </div> */}

<section class="min-h-screen bg-white mt-24">
    <div class="container px-6 py-10 mx-auto">
        <div class="lg:flex lg:items-center lg:-mx-10">
            <div class="lg:w-1/2 lg:mx-10">
                <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">Let&apos;s talk</h1>

                <p class="mt-4 text-gray-500">
                    Ask us everything and we would love
                    to hear from you
                </p>

                <form class="mt-12" action="https://formsubmit.co/creativetechscapes2003@gmail.com" method="POST">
                    <div class="-mx-2 md:items-center md:flex">
                        <div class="flex-1 px-2">
                            <label class="block mb-2 text-sm text-gray-600">Full Name</label>
                            <input type="text" id="name" name='name' placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md" />
                        </div>

                        <div class="flex-1 px-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm text-gray-600">Email address</label>
                            <input type="email" id="email" name='email' placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md" />
                        </div>
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 text-sm text-gray-600">Message</label>
                        <textarea name='message' class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56" placeholder="Message"></textarea>
                    </div>

                    <button type='submit' class="w-full px-6 py-3 mt-4 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#14274E] rounded-md hover:bg-transparent hover:text-[#14274E] hover:border border-black font-bold">
                        get in touch
                    </button>
                </form>
            </div>

            <div class="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                <Image class="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src="/CTS-stamp.jpg" height={500} width={500} alt=""/>

                <div class="mt-6 space-y-8 md:mt-8">
                    <p class="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-[#14274E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                            Mumbai, Maharashtra, India.
                        </span>
                    </p>

                    <p class="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-[#14274E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>

                        <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(+91) 7249735828</span>
                    </p>

                    <p class="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-[#14274E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>

                        <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">creativetechscapes2003@gmail.com</span>
                    </p>
                </div>

                <div class="mt-6 w-80 md:mt-8">
                    <h3 class="text-black font-bold">Follow us</h3>

                    <div class="flex justify-evenly mt-4 -mx-1.5 ">
                        <a  href="https://www.instagram.com/creativetechscapes?igsh=NTc4MTIwNjQ2YQ==">
                            <BsInstagram  className='text-2xl text-[#14274E]'/>
                        </a>

                        <a  href="https://github.com/CreativeTecscapes">
                             <BsGithub className='text-2xl text-[#14274E]'/>
                        </a>

                        <a  href="https://www.youtube.com/@CreativeTechscapes">
                            <BsYoutube className='text-2xl text-[#14274E]'/>
                        </a>

                        <a href="https://www.linkedin.com/in/creative-techscapes-4a57a22a8/">
                            <BsLinkedin className='text-2xl text-[#14274E]'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Contact