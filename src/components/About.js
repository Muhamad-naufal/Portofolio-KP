import React from 'react';
// import Countup
import CountUp from 'react-countup';
// import Intersection Observer Hook
import { useInView } from 'react-intersection-observer';
// import Motion
import { motion } from 'framer-motion';
// import Variants
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return(
    <section className='section' id='About' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
           variants={fadeIn('down', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.7}}
           className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* text */}
          <div className='flex-1'>
            <motion.h2
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} 
              className='h2 text-accent'>
                Tentang Saya
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} 
              className='mb-6'>Saya Adalah seorang mahasiswa yang berasal dari Purwrejo, Jawa Tengah. Saya berkuliah di Universitas Amikom Purwokerto dan sudah menduduki Semester 6. Konsentrasi yang saya ambil adalah Artificial Intelligence. Oleh Karena Itu, projek saya kebanyakan menggunakan AI dan Machine Learning
            </motion.p>
            {/* stats */}
            <motion.div
             variants={fadeIn('up', 0.5)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}} 
             className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Bahasa <br /> Pemrograman
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={6} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projek <br /> AI
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projek <br /> Umum
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
