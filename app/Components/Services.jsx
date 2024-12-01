import React from 'react'
import 'tailwindcss/tailwind.css';
import '../globals.css';
import Image from 'next/image';




const Services = () => {
  return (
    
    <div className='navbar-text' id='Services'>
     
        <div className='flex justify-center text-center text-3xl text-[#14274E] mt-0 m-16'>
           What We Offer 🚀
        </div>

        <div className='lg:flex justify-between m-10 grid gap-5'>

        
                <div className="relative h-[400px] w-[300px] rounded-xl shadow-xl border hover:shadow-2xl hover:border-[#14274E]">
                <img
                    src="https://www.instipartyonline.com/assets/Gif/webdevelopment.gif"
                    className="z-5 h-auto w-auto rounded-md object-cover flex justify-center p-5"
                    height={96}
                    width={96}
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-2xl font-semibold text-[#14274E]">WEB DEVELOPMENT</h1>
                    <div className="mt-2 text-sm text-[#14274E]">
                    We craft full-stack websites with stunning UIs that leave a lasting impression!
                    </div>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-[#14274E]">
                    <a href={'https://github.com/CreativeTecscapes'}>View Github &rarr;</a>
                    </button>
                </div>
                </div>



                <div className="relative h-[400px] w-[300px] rounded-xl shadow-xl border hover:shadow-2xl hover:border-[#14274E]">
                <img
                    src="https://www.digisailor.com/images/service/mobile_app_development.gif"
                    className="z-5 h-auto w-auto rounded-md object-cover p-5"
                    height={96}
                    width={96}
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-2xl font-semibold text-[#14274E]">APP DEVELOPMENT</h1>
                    <div className="mt-2 text-sm text-[#14274E]">
                    From concept to launch, we build full-stack mobile apps that fit right into your pocket!
                    </div>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-[#14274E]">
                    <a href={'https://github.com/CreativeTecscapes'}>View Github &rarr;</a>
                    </button>
                </div>
                </div>

                <div className="relative h-[400px] w-[300px] rounded-xl shadow-xl border hover:shadow-2xl hover:border-[#14274E]">
                <img
                    src="https://www.aplombtek.com/frontend/assets/images/applications/art-img-a.gif"
                    className="z-5 h-auto w-auto rounded-md object-cover p-5"
                    height={96}
                    width={96}
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-2xl font-semibold text-[#14274E]">AI & ML</h1>
                    <div className="mt-2 text-sm text-[#14274E] pr-1">
                        Dive into the future with us as we create intelligent ML models tailored just for you! 
                    </div>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-[#14274E]">
                    <a href={'https://github.com/CreativeTecscapes'}>View Github &rarr;</a>
                    </button>
                </div>
                </div>


                <div className="relative h-[400px] w-[300px] rounded-xl shadow-xl border hover:shadow-2xl hover:border-[#14274E]">
                <img
                    src="https://henceforthsolutions.com/wp-content/themes/henceforthsolutions/assets/images/blkch/blockchain.gif"
                    className="z-5 h-auto w-auto rounded-md object-cover p-5"
                    height={96}
                    width={96}
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-2xl font-semibold text-[#14274E]">BLOCKCHAIN</h1>
                    <div className="mt-2 text-sm text-[#14274E]">
                       Transform your vision into reality with our cutting-edge blockchain applications! 
                    </div>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-[#14274E]">
                    <a href={'https://github.com/CreativeTecscapes'}>View Github &rarr;</a>
                    </button>
                </div>
                </div>

  


        </div>
       
    </div>
    
  )
}

export default Services