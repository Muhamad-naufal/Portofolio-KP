import React from 'react';
// import Image
import Image from '../assets/avatar.png';
// import iconst
import { FaGithub, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa'
// type Animation
import { TypeAnimation } from 'react-type-animation';
// import Motion
import { motion } from 'framer-motion';
// import Variants
import { fadeIn } from '../variants'

const Banner = () => {
  return <div className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='Banner'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-y-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:text-[80px] uppercase'>
              Muhamad <span>Naufal</span>
          </motion.h1>
          <motion.div
           variants={fadeIn('up', 0.4)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.7}}
           className='mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='mr-4 text-white'>Saya Adalah</span>
            <TypeAnimation sequence={[
              'Web Developer',
              2000,
              'Mobile Developer',
              2000,
              'Mahasiswa',
              2000,
            ]} speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity} 
            />
          </motion.div>
          <motion.p
           variants={fadeIn('up', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.7}}
           className='lg:mx-0 mb-8 max-w-lg mx-auto'>Saya Adalah Mahasiswa Semester 6 Program Studi Informatika, Fakultas Ilmu Komputer, Universitas Amikom Purwokerto
          </motion.p>
          <motion.div
           variants={fadeIn('up', 0.6)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.7}} 
           className='flex gap-x-6 max-w-max items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-sm'>
              <a href='https://muhamad-naufal.github.io/'>Project Saya</a>
            </button>
          </motion.div>
          {/* Socials */}
          <motion.div 
           variants={fadeIn('up', 0.7)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.7}}
           className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>

            {/* Youtube */}
            <a href='https://www.youtube.com/@informaticsunion'>
              <FaYoutube />
            </a>

            {/* LinkInd */}
            <a href='https://www.linkedin.com/in/muhamad-naufal-burhanuddin-balit-758510231/'>
              <FaLinkedin />
            </a>

            {/* Facebook */}
            <a href='https://www.facebook.com/profile.php?id=100028350228241'>
              <FaFacebook />
            </a>

            {/* Github */}
            <a href='https://github.com/Muhamad-naufal'>
              <FaGithub />
            </a>
          </motion.div>
        </div>
        <motion.div
         variants={fadeIn('down', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.7}} 
         className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
          <img src= {Image} alt='Avatar'></img>
        </motion.div>
      </div>
    </div>
  </div>
};

export default Banner;
