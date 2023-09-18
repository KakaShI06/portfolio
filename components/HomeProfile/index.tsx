'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BgCircle from '../BgCircle'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function HomeProfile({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Ujjval Priyadarshi",
      'A Guy Who can center a <div />',
      '<LovesToCode />',
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='lg:h-screen min-h-screen flex justify-center items-center text-center flex-col space-y-6 overflow-hidden'>
      <BgCircle />
      <Image
        src={
          'https://res.cloudinary.com/doql129vl/image/upload/v1694429573/animated_fnv8j4.jpg'
        }
        alt='my-pic'
        width={80}
        height={80}
        className='rounded-full object-contain'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-blue-400 pb-2 tracking-[12px] text-center ml-1'>
          Software Developer
        </h2>
        <h1 className='text-2xl lg:text-4xl font-semibold px-10'>
          <span className='decorated-text'>{text}</span>
          <Cursor cursorColor='#0000eb' />
        </h1>
      </div>
      <div className='flex lg:gap-4 justify-center w-full z-20'>
        <Link href={'#about'}>
          <button className='homeBtn'>About</button>
        </Link>
        <Link href={'#skills'}>
          <button className='homeBtn'>Skills</button>
        </Link>
        <Link href={'#experience'}>
          <button className='homeBtn'>Experience</button>
        </Link>
        <Link href={'/#project'}>
          <button className='homeBtn'>Project</button>
        </Link>
      </div>
    </div>
  )
}

export default HomeProfile
