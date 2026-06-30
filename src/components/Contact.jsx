import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaDribbble, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";





const Contact = () => {
    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setSuccess("✅ Thanks! I'll get back to you soon.");
                form.current.reset();
            })
            .catch((error) => {
  console.log("EmailJS Error:", error);
  console.log("Status:", error.status);
  console.log("Text:", error.text);

  setSuccess("❌ Failed to send message. Please try again.");
})
            .finally(() => {
                setLoading(false);

                setTimeout(() => {
                    setSuccess("");
                }, 5000);
            });
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-dark-200'>
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    Get In
                    <span className='text-cyan-200'> Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 '>Have a project in mind or want to collaborate? Let's connect!</p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    {/* contact form */}
                    <div>
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                                <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text" name="from_name" required />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                                <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="email" name="from_email" required />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                                <textarea className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text" name="message" required />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-cyan-400 text-[#0A192F] px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition duration-300 disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                            {success && (
                                <p className="mt-4 text-center font-medium text-white-400">
                                    {success}
                                </p>
                            )}




                        </form>
                    </div>













                    {/* contact info */}
                    <div className='space-y-8'>
                        <div className='flex items-start'>
                            <div className='text- text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400 '>Bharuch,Gujarat</p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <div className='text- text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400 '>mishrashreya256@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <div className='text- text-2xl mr-4 rotate-90'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p className='text-gray-400 '>+91 9201744370</p>
                            </div>
                        </div>

                        <div className='text-lg font-semibold mb-4'>
                            <h3>Follow Me</h3>
                            <div className='flex space-x-4'>
                                <a href="https://github.com/shreya256creater" target="_blank"
                                    rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-purple hover:text-white transition duration-300'>
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/shreyamishra002?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank"
                                    rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-green-400 hover:text-green transition duration-300'>
                                    <FaLinkedin />
                                </a>
                                <a href="#" target="_blank"
                                    rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300'>
                                    <FaTwitter />
                                </a>
                                <a href="#" target="_blank"
                                    rel="noopener noreferrer" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink-400 hover:text-white transition duration-300'>
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Contact
