import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const EmailForm: React.FC = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userText, setUserText] = useState('')
  const [error, setError] = useState(true)
  const [right, setRight] = useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || ''
    const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || ''
    const YOUR_USER_ID = process.env.NEXT_PUBLIC_EMAIL_USER_ID || ''

    const payload = {
      user_name: userName,
      user_email: userEmail,
      message: userText,
    }

    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, payload, YOUR_USER_ID).then(
      (result) => {
        console.log(result)
        setUserEmail('')
        setUserName('')
        setUserText('')
        toast.success('Email is sent, Will get back to you!')
      },
      (error) => {
        toast.error('Something went wrong! Please try again later')
        console.error('[Error]:', error)
      }
    )
  }

  useEffect(() => {
    if (userName.length && userEmail.length && userText.length) {
      return setError(false)
    }
    setError(true)
  }, [userName, userEmail, userText])

  return (
    <>
      <Toaster />
      <form
        onSubmit={(e) => sendEmail(e)}
        className='flex flex-col text-left gap-2 w-full'
      >
        <label htmlFor='user_name'>Name</label>
        <input
          type='text'
          name='user_name'
          id='user_name'
          className='p-2 bg-slate-500 border-none outline-none'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label htmlFor='user_email'>Email</label>
        <input
          type='email'
          name='user_email'
          id='user_email'
          className='p-2 bg-slate-500 border-none outline-none'
          required
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <label htmlFor='message'>Message</label>
        <textarea
          name='message'
          id='message'
          className='p-2 bg-slate-500 border-none outline-none'
          required
          onChange={(e) => setUserText(e.target.value)}
          value={userText}
        />
        <div className='relative group w-fit mt-4'>
          <div className='absolute rounded-lg inset-0 bg-blue-400 group-hover:blur-md'></div>
          <button className='project-btn relative' type='submit' value='Shoot'>
            Shoot
          </button>
        </div>
      </form>
    </>
  )
}

export default EmailForm
