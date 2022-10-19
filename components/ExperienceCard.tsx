import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden w-[500px] md:w-[600px] xl:w-[900px]'>
        <motion.img initial={{ y: -100, opacity: 0}} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" src="https://pbs.twimg.com/media/EG1f7ReXYAU_eqA.jpg" alt="" />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Software Engineer</h4>
            <p className="font-bold text-2xl mt-1">Decagon Institute</p>
            <div className="flex space-x-2 my-2">
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="" />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/fluency/48/000000/typescript--v2.png" alt="" />
                <img className="h-10 w-10 rounded-full" src="https://img.icons8.com/color/480/000000/react-native.png" alt="" />
            </div>

            <p className="uppercase py-5 text-gray-300">Started work... - Ended....</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Experience with various frameworks like ReactJS, NextJS, Typescript and Node.JS</li>
                <li>Extensive experience and knowledge of data structures, database modelling, system architecture and concepts</li>
                <li>Experience in using GIT Version Controls</li>
                <li>Experience with Agile software development and a strong understanding of the SDLC (Software Development Life Cycle)</li>
                <li>Experience with the design and implementation of RESTful web services and APIs</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard