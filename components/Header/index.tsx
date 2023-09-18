'use client'

import Image from 'next/image'
import React from 'react'
import logoUrl from '@/public/logo/white.png'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

function Header({}: Props) {
  return (
    <header className='fixed lg:sticky top-0 flex justify-between max-w-screen-xl mx-auto w-full items-center p-3 z-20'>
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
        <div className='flex gap-1'>
          <Link href='#contact-me'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24'
                viewBox='0 -960 960 960'
                width='24'
                fill='white'
              >
                <path d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z' />
              </svg>
            </span>
          </Link>

          <Link href='#contact-me' className='hidden lg:flex'>
            <span>Get In Touch</span>
          </Link>
        </div>
      </motion.div>
    </header>
  )
}

export default Header
