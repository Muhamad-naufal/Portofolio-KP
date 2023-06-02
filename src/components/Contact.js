import React from 'react';
// import Motion
import { motion } from 'framer-motion';
// import Variants
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='section' id='Contact'>
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
                Terima Kasih
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} 
              className='mb-6'>Terima Kasih untuk semua Pihak yang telah membantu dalam pembuatan projek ini mulai dari pembuata landing page, website portofolio, hingga pembuatan beberapa website yang diperlukan dalam berbagai projek yang dijalani. Dengan adanya website tersebut, diharapkan dapat membantu berbagai profesi dalam berbagai bidang.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
