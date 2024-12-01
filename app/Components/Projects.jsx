import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { MdComment } from "react-icons/md";

const Projects = () => {
    return (
        <>
            <div className='flex justify-center text-center text-3xl text-[#14274E]  mt-40' id='Projects'>
                📂 Explore Our Proud Creations 🌍
            </div>

            <section id="Projects"
                class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-16 mb-5">

{/* MediSense */}
                <div class="w-72 lg:w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl border border-black">

                    <Image src="/Medisense-Image.jpg"
                        className="rounded-xl p-2"
                        height={600}
                        width={700}
                    />
                    <div class="px-4 py-3 w-72 ">
                        <p class="text-lg font-bold text-black truncate block uppercase">MediSense</p>
                        <span class="text-gray-400 mr-3 text-base ">Enlightening Health, Empowering Lives.</span>
                    </div>

                    <div className='flex justify-evenly align-middle items-center p-3 text-[#14274E] text-xl'>
                        <a href="https://github.com/Rudalph/MediSense"><FaGithub /></a>
                        <a href="https://medi-sense.vercel.app/"><FaLink /></a>
                        <MdComment />
                    </div>

                </div>


{/* Life Balance 360 */}
                <div class="w-72 lg:w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl border border-black">

                    <Image src="/LB-360.jpg"
                        className="rounded-xl p-2"
                        height={600}
                        width={700}
                    />
                    <div class="px-4 py-3 w-72">
                        <p class="text-lg font-bold text-black truncate block uppercase">Life Balance 360</p>
                        <span class="text-gray-400 mr-3 text-base">Advance Healthcare Management System.</span>
                    </div>

                    <div className='flex justify-evenly align-middle items-center p-3 text-[#14274E] text-xl'>
                        <a href="https://github.com/Rudalph/Life-Balance-360"><FaGithub /></a>
                        <a href="https://life-balance-360.vercel.app/"><FaLink /></a>
                        <MdComment />
                    </div>

                </div>

{/* Jivsanklp */}
                <div class="w-72 lg:w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl border border-black">

                    <Image src="/jivsankalp.jpg"
                        className="rounded-xl p-2"
                        height={600}
                        width={700}
                    />
                    <div class="px-4 py-3 w-72 mt-2">
                        <p class="text-lg font-bold text-black truncate block uppercase">Jivsankalp</p>
                        <span class="text-gray-400 mr-3 text-base">Conservation of endangered species using AI/ML</span>
                    </div>

                    <div className='flex justify-evenly align-middle items-center p-3 text-[#14274E] text-xl'>
                        <a href="https://github.com/RehanAlmeida/Jivsankalp"><FaGithub /></a>
                        <a href="https://github.com/RehanAlmeida/Jivsankalp"><FaLink /></a>
                        <MdComment />
                    </div>

                </div>


                <div class="w-72 lg:w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl border border-black">

                    <Image src="/Zenith-AI.jpg"
                        className="rounded-xl p-2"
                        height={600}
                        width={700}
                    />
                    <div class="px-4 py-3 w-72 ">
                        <p class="text-lg font-bold text-black truncate block uppercase">Zenith AI</p>
                        <span class="text-gray-400 mr-3 text-base ">Elevating banking excellence with peak performance</span>
                    </div>

                    <div className='flex justify-evenly align-middle items-center p-3 text-[#14274E] text-xl'>
                        <a href="https://github.com/Rudalph/Bank-Of-Baroda-GenAI-Hackathon"><FaGithub /></a>
                        <a href="https://zenith-ai-bob.vercel.app/"><FaLink /></a>
                        <MdComment />
                    </div>

                </div>

                


            </section>
        </>
    )
}

export default Projects