import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/asserts'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='projects'
            className='py-20 bg-dark-200'>
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    My 
                    <span className='text-cyan-200'>Projects</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Recent projects</p>
                <div className='w-[95%] md:w-[90%] lg:w-[90%] xl:w-[80%] mx-auto flex flex-col items-center gap-10'>
                    {
                        projects.map((project,index) =>(
                           <ProjectCard key={index} {...project}/> 
                        ))
                    }
                </div>
                <div className='text-center mt-12'>
                    <a href="#" className='inline-flex items-center px-6 py-3 border rounded-lg font-medium hover:bg-gray-400/20 transition duration-300'>
                        <span>View More Projects</span>
                        <FaArrowRight className='ml-2' />
                    </a>

                </div>
            </div>
    </motion.div>
  )
}

export default Projects
