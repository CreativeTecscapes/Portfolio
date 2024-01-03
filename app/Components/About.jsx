import React from 'react'
import 'tailwindcss/tailwind.css';
import '../globals.css';



const About = () => {
  return (
    <div className='navbar-text mt-16'>
        <div className='flex justify-center text-center text-3xl text-[#14274E] m-9'>
            OUR TEAM
        </div>

        <div className='flex justify-center'>
            <div className="mx-auto max-w-7xl px-2 md:px-0">

                <div className="my-4">
                    <p className="mt-2 text-[#14274E] flex justify-center text-2xl">
                       Desigining Your Vision, Empowered By Our Tech Experties
                    </p>
                </div>

            <div className="flex grid-cols-1 gap-[200px] md:grid-cols-3 justify-between p-10">

                <div className="flex flex-col items-center text-start">
                        <div
                            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-[#14274E] "
                            style={{
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <img
                            src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                            alt=""
                            className="z-0 h-full w-full rounded-[10px] object-cover"
                            />
                                <div className="absolute bottom-4 left-4">
                                    <h1 className="text-xl font-semibold text-white">Rudalph Gonsalves</h1>
                                    <h6 className="text-base text-white">Founder & CEO</h6>
                                    <h6 className="text-base text-white">Full stack Web and App developer</h6>
                                </div>
                        </div>
                    </div>


                    <div className="flex flex-col items-center text-start">
                        <div
                            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-[#14274E]"
                            style={{
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <img
                            src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                            alt=""
                            className="z-0 h-full w-full rounded-[10px] object-cover"
                            />
                                <div className="absolute bottom-4 left-4">
                                    <h1 className="text-xl font-semibold text-white">Shruti Patil</h1>
                                    <h6 className="text-base text-white">Co-Founder</h6>
                                    <h6 className="text-base text-white">Full Stack Web Developer</h6>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About