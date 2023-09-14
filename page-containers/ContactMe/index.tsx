'use client'

import EmailForm from '@/components/EmailForm'
import React from 'react'

type Props = {}

function ContactMe({}: Props) {
  return (
    <section className='h-screen relative pt-2 flex flex-col justify-center items-center text-center lg:flex-row lg:justify-around overflow-hidden gap-5'>
      <h3 className='page-heading'>Contact Me</h3>

      <div className='min-w-[100vh] mx-auto bg-gray-900 rounded-xl p-8'>
        <div className='p-8'>
          <EmailForm />
        </div>
      </div>
    </section>
  )
}

export default ContactMe
