'use client'

import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <section className='lg:h-screen min-h-screen relative pt-2 flex flex-col justify-center items-center text-center lg:flex-row lg:justify-around'>
      <h3 className='page-heading'>About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        className='h-[200px] object-contain rounded-md flex-shrink-0 lg:ml-20 lg:w-[300px] lg:h-[375px]'
        src='https://res.cloudinary.com/doql129vl/image/upload/v1694429574/kasol_obdhff.jpg'
      />
      <div className='p-4'>
        Hi, My Name is Ujjval Priyadarshi and I like making things by code. 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quidem soluta nulla quia labore incidunt illo eum dolorem necessitatibus aut molestiae, dicta ipsum, consectetur magnam tempora. Dolor deserunt similique itaque?
      </div>
    </section>
  )
}

export default About
