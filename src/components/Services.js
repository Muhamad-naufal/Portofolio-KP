import React from 'react';
// import icons
import { BsArrowUpRight } from 'react-icons/bs'
// import Motion
import { motion } from 'framer-motion';
// import Variants
import { fadeIn } from '../variants'

const services = [
  {
    name: 'Coursera: Python for Data Science, AI & Development',
    description: 'Kursus dari IBM yang mempelajari tentang dasar - dasar Python dan Mempraktikkannya dengan Jupyter Notebook.',
  },
  {
    name: 'Google Digital Garage: The Fundamentals of Digital Marketing',
    description: 'Kursus dari Google yang mempelajari tentang dasar - dasar Pemasaran Digital dan menggunakan contoh nyata.',
  },
  {
    name: 'AWS: Solutions Architect Learning Plan Bagde Assessment',
    description: 'Kursus dari Amazon yang mempelajari tentang arsitektur yang tangguh, berkinerja tinggi, aman, dan hemat biaya di AWS',
  },
];

const Services = () => {
  return (
    <section className='section' id='Service'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
           variants={fadeIn('down', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.7}}
           className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>Sertifikat</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Penghargaan dari beberapa kursus online yang dilakukan</h3>
            <button className='btn btn-sm'><a href='https://drive.google.com/drive/folders/1wEnFpYULMhE0QHKwh0fgiCw8Qilwg-wz?usp=sharing'>Lihat Sertifikat</a></button>
          </motion.div>
          {/* service */}
          <motion.div
           variants={fadeIn('up', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.7}} 
           className='flex-1'>
            {/* service list */}
            <div>
              {services.map((service, index) => {
                const { name, description } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={ index }>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{ name }</h4>
                      <p className='font-secondary leading-tight'>{ description }</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
