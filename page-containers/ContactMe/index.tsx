'use client'

import EmailForm from '@/components/EmailForm'
import Footer from '@/components/Footer'
import SocialIcons from '@/components/SocialIcons'
import React from 'react'

type Props = {}

function ContactMe({}: Props) {
  return (
    <section className='h-screen relative pt-2'>
      <h3 className='page-heading w-full'>Contact Me</h3>

      <div className='rounded-xl p-8 absolute top-[100px] w-full flex h-3/4 gap-4'>
        <div className='flex-grow flex my-auto'>
          <EmailForm />
        </div>
        <div className='flex-grow text-right lg:w-1/2'>
          <h1 className='text-3xl font-bold underline'>Send Me a message</h1>
          <h3 className='text-right text-lg font-semibold'>
            Got a question or proposal, or just want to say hello? Go ahead
          </h3>
          <p className='mt-6'>
            Thank You for visiting my portfolio, if you have any feedback or any
            query please free to shoot.
          </p>
          <p className='mt-4'>
            {' '}
            Any New Ideas or want to have a chat? I love to hear from you,
            please use my social handle below and feel free to message me.{' '}
            <br /> I hope will see you soon!
          </p>

          <SocialIcons />
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default ContactMe
