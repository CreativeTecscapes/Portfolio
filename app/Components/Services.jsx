import React from 'react'
import 'tailwindcss/tailwind.css';
import '../globals.css';
import Image from 'next/image';




const Services = () => {
  return (
    
    <div className='navbar-text mt-16' id='Services'>
     
        <div className='flex justify-center text-center text-3xl text-[#14274E] m-16'>
            OUR SERVICES
        </div>

        <div className='lg:flex justify-between m-10 grid gap-5'>

        
                <div className="relative h-[400px] w-[300px] rounded-xl shadow-xl border hover:shadow-2xl hover:border-[#14274E]">
                <Image
                    src="/wired-flat-1331-repository (1).gif"
                    className="z-5 h-auto w-auto rounded-md object-cover flex justify-center"
                    height={96}
                    width={96}
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-2xl font-semibold text-[#14274E]">WEB DEVELOPMENT</h1>
                    <div className="mt-2 text-sm text-[#14274E]">
                        We design and develop Full Stack websites. 
                    </div>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-[#14274E]">
                    <a href={'https://github.com/CreativeTecscapes'}>View Github &rarr;</a>
                    </button>
                </div>
                </div>



                <div className="relative h-[400px] w-[300px] rounded-xl shadow-xl border hover:shadow-2xl hover:border-[#14274E]">
                <Image
                    src="/wired-flat-471-ebook-reader (1).gif"
                    className="z-5 h-auto w-auto rounded-md object-cover"
                    height={96}
                    width={96}
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-2xl font-semibold text-[#14274E]">APP DEVELOPMENT</h1>
                    <div className="mt-2 text-sm text-[#14274E]">
                        We design and develop Full Stack Mobile Applications. 
                    </div>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-[#14274E]">
                    <a href={'https://github.com/CreativeTecscapes'}>View Github &rarr;</a>
                    </button>
                </div>
                </div>

                <div className="relative h-[400px] w-[300px] rounded-xl shadow-xl border hover:shadow-2xl hover:border-[#14274E]">
                <Image
                    src="/wired-flat-1639-stairs (1).gif"
                    className="z-5 h-auto w-auto rounded-md object-cover"
                    height={96}
                    width={96}
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-2xl font-semibold text-[#14274E]">AI & ML</h1>
                    <div className="mt-2 text-sm text-[#14274E] pr-1">
                        We design and develop Full Stack Machine Learning Models. 
                    </div>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-[#14274E]">
                    <a href={'https://github.com/CreativeTecscapes'}>View Github &rarr;</a>
                    </button>
                </div>
                </div>


                <div className="relative h-[400px] w-[300px] rounded-xl shadow-xl border hover:shadow-2xl hover:border-[#14274E]">
                <Image
                    src="/wired-flat-946-equity-security (1).gif"
                    className="z-5 h-auto w-auto rounded-md object-cover"
                    height={96}
                    width={96}
                />
                <div className="absolute inset-0 "></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-2xl font-semibold text-[#14274E]">BLOCKCHAIN</h1>
                    <div className="mt-2 text-sm text-[#14274E]">
                        We design and develop all types of Blockchain applications. 
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