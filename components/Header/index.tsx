'use client'

import Image from 'next/image'
import React from 'react'
import logoUrl from '@/public/logo/white.png'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 flex justify-between max-w-screen-xl mx-auto w-full items-center p-3 z-20'>
      <motion.div
        className='cursor-pointer'
        initial={{
          x: -500,
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
      >
        <Image alt='logo' src={logoUrl} width={60} height={50} />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        className='cursor-pointer'
      >
        Get In Touch
      </motion.div>
    </header>
  )
}

export default Header
