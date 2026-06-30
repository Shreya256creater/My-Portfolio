import React from 'react'
import { motion } from 'framer-motion'
import {assets} from '../assets/asserts'

const Hero = () => {
  return (
    <motion.div
    initial={{opacity:0 , y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    viewport={{once: true}}
    id='home'
    className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
          {/* {left side content} */}
        <div className="md:w-1/2 mb-10 md:mb:0"> 
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full
                bg-[#111827] border border-slate-700
                shadow-lg">
  <span className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
    <span className="w-2 h-2 rounded-full bg-white"></span>
  </span>

  <span className="text-white text-lg font-medium">
    Web Developer
  </span>
</div>



         <h1 className='text-4xl md:text-6xl font-bold mb-4 block mt-3'>
            Hi, I'm <span className='text-cyan-400'>Shreya </span>
         </h1>
         <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>Full Stack Developer</h2>
         <p className='text-lg text-grey-300 mb-8'>I create stunning web experiences with modern technologies and innovative design.</p>
         <div className='flex space-x-4'>
            <a href='#projects' className='px-6 py-3 bg-cyan-500 rounded-lg font-medium hover:bg-cyan-300 transition duration-300 '>View Work</a>
            <a href='#contact' className='px-6 py-3 border border-cyan-500 rounded-lg font-medium hover:bg-cyan-300/20 transition decoration-purple-300'>Contact Me</a>
         </div>
        </div>

        {/* {right side content} */}
        <div className='md:w-1/2 flex justify-center '>
           <div className='relative w-64 h-64 md:w-80 md:h-80'>
             <div className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-pink  opacity-70 '>
                <motion.img 
                animate={{y:[0, -20, 0]}}
                transition={{
                    duration: 4,
                    repeat:Infinity,
                    repeatType:"loop",
                    ease:"easeInOut"
                }}
                className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float'
                src={assets.profileImg} alt="Profile" />

             </div>
           </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
