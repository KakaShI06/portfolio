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
        className='h-[200px] object-contain rounded-md flex-shrink-0 lg:ml-20 lg:w-[300px] lg:h-[375px] mt-32 lg:mt-0'
        src='https://res.cloudinary.com/doql129vl/image/upload/v1694429574/kasol_obdhff.jpg'
        alt='cover-pic'
      />
      <div className='p-4 text-left'>
        <ul>
          <li>
            Hello, I am Ujjval Priyadarshi, a dedicated coder with a strong
            passion for crafting digital solutions. I am a proud graduate of the
            prestigious{' '}
            <strong>
              Indian Institute of Technology - Banaras Hindu University
              (IIT-BHU)
            </strong>
            , where I completed my studies in the year 2021.
          </li>
          <li>
            My primary area of expertise lies in Frontend Development, with a
            deep focus on <strong>React.js</strong> and <strong>Next.js</strong>
            . I have a proven track record of creating engaging and
            user-friendly web interfaces that provide exceptional user
            experiences.
          </li>
          <li>
            Furthermore, I possess proficiency in backend development, utilizing
            technologies such as <strong>Express</strong> and{' '}
            <strong>Django</strong> to build robust server-side solutions. This
            enables me to create end-to-end web applications that are both
            seamless and efficient.
          </li>
          <li>
            In addition to my development skills, I have a strong command of
            programming languages like <strong>Python</strong> and{' '}
            <strong>C++</strong>, enabling me to tackle a wide range of
            technical challenges.
          </li>
          <li>
            One of my noteworthy abilities is optimizing{' '}
            <strong>web-vitals</strong> to enhance your {"website's "}
            <strong>SEO score</strong>. I am dedicated to improving the
            performance of web applications, ensuring they meet the highest
            standards of accessibility, speed, and overall quality.
          </li>
          <li>
            I look forward to the opportunity of collaborating with you to
            create exceptional digital experiences and drive your online
            presence to new heights.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
