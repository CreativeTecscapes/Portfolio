import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const Projects = () => {
    return (
        <>
        <div className='flex justify-center text-center text-3xl text-[#14274E] m-9 mt-20'>
                      OUR PROJECTS
                  </div>

            <div className='mt-20 m-3 flex justify-evenly flex-wrap'>
                <div className=' '>
                    <div className="m-3 flex max-w-2xl flex-col items-center rounded-md border md:flex-row hover:shadow-2xl">
                        <div className="h-full w-full md:h-[200px] md:w-[300px] flex-shrink-0">
                            <img
                                src="https://masterbundles.com/wp-content/uploads/2023/07/work-life-balance_madterbundles-3-5.jpg"
                                alt="Laptop"
                                className="p-2 h-full w-full rounded-md object-cover"
                            />
                        </div>
                        <div>
                            <div className="p-4">
                                <h1 className="inline-flex items-center text-lg font-semibold">
                                    Life Balance 360 <a href="https://life-balance-360.vercel.app/"><ArrowUpRight className="ml-2 h-4 w-4" /></a>
                                </h1>
                                <p className="mt-3 text-sm text-gray-600">
                                    AI powered web application that interacts with live health data of users and generate alerts and provide recommndations to live healthy life.
                                </p>
                                <div className="mt-7">
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #Healthy Life
                                    </span>
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #Generative AI
                                    </span>
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #Web application
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div>
                    <div className="m-3 flex max-w-2xl flex-col items-center rounded-md border md:flex-row hover:shadow-2xl">
                        <div className="h-full w-full md:h-[200px] md:w-[300px] flex-shrink-0">
                            <img
                                src="https://etimg.etb2bimg.com/photo/105395878.cms"
                                alt="Laptop"
                                className="p-2 h-full w-full rounded-md object-cover"
                            />
                        </div>
                        <div>
                            <div className="p-4">
                                <h1 className="inline-flex items-center text-lg font-semibold">
                                    Mental Health <a href="https://mental-health-django.vercel.app/"><ArrowUpRight className="ml-2 h-4 w-4" /></a>
                                </h1>
                                <p className="mt-3 text-sm text-gray-600">
                                    Machine Learning based web application that helps user to know about their mental health condition.
                                </p>
                                <div className="mt-7">
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #Mental Health
                                    </span>
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #Machine Learning
                                    </span>
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #Web app
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects