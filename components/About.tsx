import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div initial={{ opacity: 0}} transition={{ duration: 1.5 }} whileInView={{ opacity: 1 }} className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

        <motion.img initial={{ x: -200, opacity: 0}} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} src="https://i.ibb.co/K6sHKJD/DSC-0149.jpg" className="-mb-20 md:-mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]" />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]">little</span> background</h4>
            <p className="text-sm">I’m Nurudeen Adewale, a professional Software Developer from Nigeria. I have been writing JavaScript for over 3 years alongside TypeScript. I have interest in React for Frontend development and I enjoy creating compelling user interfaces using Sass, Less, Tailwind, Styled Component and basic CSS. I have worked with NodeJs and series of database on the backend including MongoDB, Postgres and MySQL. I have written different production level applications. I enjoy working alone and as well as with teams. I am a great communicator. I can speak the English Language pretty well. I enjoy learning new things and its one of the things that have kept me refreshed</p>
        </div>
    </motion.div>
  )
}

export default About