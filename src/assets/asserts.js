import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/Profilee.jpeg';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    // {
    //   icon: FaPaintBrush,
    //   title: 'Design Oriented',
    //   description: 'Beautiful design and user experience are at the heart of everything I create.',
    //   color: 'text-pink'
    // },
    {
      icon: FaCode,
      title: 'Problem Solving',
      description: 'I like finding simple and effective solutions to coding challenges.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building modern, responsive, and user-friendly web applications with React, JavaScript, Tailwind CSS, HTML, and CSS while focusing on performance, accessibility, and clean design.',
    tags: ['React.js', 'Tailwind CSS', 'CSS3', 'Bootstrap']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'I develop reliable server-side applications and APIs that power web applications. My focus is on writing clean, maintainable code and building secure, scalable backend solutions.',
    tags: ['Node.js', 'Express.js', 'REST APIs','Postman', 'JWT Authentication']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'I work with databases to store, organize, and manage application data efficiently. I understand database design, CRUD operations, and writing optimized queries.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose']
  },
  // {
  //   title: 'Mobile Development',
  //   icon: FaMobileAlt,
  //   description: 'Building cross-platform mobile applications with modern tools.',
  //   tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  // },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'I use modern development tools to streamline workflows, manage code, and deploy applications efficiently.',
    tags: ['AWS', 'Docker', 'Vercel']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'canva']
  }
];



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  // {
  //   title: "Task Management App",
  //   description: "A productivity application with drag-and-drop functionality and real-time updates.",
  //   image: projectImg2,
  //   tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
  //   icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "Fitness Tracker",
  //   description: "A mobile app for tracking workouts, nutrition, and health metrics.",
  //   image: projectImg3,
  //   tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
  //   icons: [FaReact, FaDatabase],
  //   demo: "#",
  //   code: "#",
  // },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg6,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", ],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  // {
  //   title: "Chat App",
  //   description: "A real-time chat application with group messaging, emojis, and file sharing.",
  //   image: projectImg5,
  //   tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
  //   icons: [FaReact, FaNodeJs, FaDatabase ],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "AI Image Generator",
  //   description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
  //   image: projectImg6,
  //   tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
  //   icons: [FaRobot, FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // }
];


export const workData = [
 
];
