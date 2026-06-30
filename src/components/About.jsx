import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/asserts'
import { aboutInfo } from '../assets/asserts'
import { div } from 'framer-motion/client'
import { FaArrowRight } from "react-icons/fa";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-0 px-6'>
                {/* { heading} */}
                <h2 className='text-3xl font-bold text-center mb-4'>About
                    <span className='text-cyan-300'>Me</span>
                </h2>
                <p className='text-grey-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my work , passion and background</p>
                <div className='flex felx-col md:flex-row items-center gap-12'>
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full object-cover'
                            src={assets.profileImg} alt="Profile" />



















                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'>
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-gray-300 mb-6'>I am a passionate MERN Stack developer with a strong interest in building modern, responsive, and user friendly web applications.
                                Also an AI/ML learner with a strong interest in emerging technologies, software engineering.</p>
                            <p className='text-gray-300 mb-6'>I am a hardworking and dedicated individual, open to work and excited about opportunities that allow me to contribute, grow professionally, and gain new experiences in the tech industry.</p>
                            <p className='text-gray-300 mb-12'></p>


{/* cards */}

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((data, index) => (
                                        <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                            <div className='text-cyan-200 text-4xl mb-4'>
                                                <data.icon />
                                            </div>
                                            <h3 className='text-xl font-semibold mb-2'>{data.title}</h3>
                                            <h3>{data.description}</h3>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mt-12"></div>

                            <div className='bg-dark-200 rounded-2xl p-6 border border-white/10'>
                                <h3 className='text-2xl font-bold mb-4 '>Education</h3>
                                <h4 className='text-lg font-semibold'> Bachelor Of Engineering</h4>

                                <p className='text-white/70' > Computer Engineering</p>
                                <p className='text-white/60 mt-2'>Gujarat Technological University</p>
                                <p className="text-white/60">
                                    2024 – 2028
                                </p>

                                <p className="mt-3 text-pink">
                                    CGPA: 8.17/10
                                </p>
                            </div>


                            {/* DSA */}
                            <div className='bg-dark-200 rounded-2xl p-6 border border-white/10 mt-4'>
                                <h3 className='text-2xl font-bold mb-4'>
                                    Data Structure and Algorithms
                                </h3>
                                <p className='text-white/70'>
                                    Solved 150+ coding problems on LeetCode.
                                    Comfortable with Arrays, Strings, Linked Lists,
                                    Trees, Graphs and Dynamic Programming.</p>
                                <div className='text-center mt-12'>
                                                    <a href="https://leetcode.com/shreyamishra_256/" target="_blank"
  rel="noopener noreferrer" className='inline-flex items-center px-6 py-3 border rounded-lg font-medium bg-black hover:bg-gray-400/20 transition duration-300'>
                                                        <span>View Leetcode Profile</span>
                                                        <FaArrowRight className='ml-2 rotate-315' />
                                                    </a>
                                
                                                </div>
                            </div>
                        </div>


                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
}

export default About
