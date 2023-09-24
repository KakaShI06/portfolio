'use client'

import EmailForm from '@/components/EmailForm'
import Footer from '@/components/Footer'
import SocialIcons from '@/components/SocialIcons'
import React from 'react'

type Props = {}

function ContactMe({}: Props) {
  return (
    <section className='lg:h-screen min-h-screen mt-20 lg:mt-0 relative pt-2 lg:flex lg:flex-col lg:justify-between'>
      <h3 className='page-heading w-full'>Contact Me</h3>

      <div className='rounded-xl mt-16 p-8 top-[100px] w-full flex flex-col lg:flex-row h-3/4 gap-4 items-center'>
        <div className='flex-grow text-left lg:w-1/2'>
          <h1 className='text-2xl font-bold underline my-5'>Send Me a message</h1>
          <p className='text-lg font-semibold'>
            Got a question or proposal, or just want to say hello? Go ahead
          </p>
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
        <div className='flex-grow flex my-auto w-full lg:w-1/2'>
          <EmailForm />
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default ContactMe
