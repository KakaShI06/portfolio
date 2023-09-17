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
        <label>Name</label>
        <input
          type='text'
          name='user_name'
          className='p-2 bg-slate-500 border-none outline-none'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type='email'
          name='user_email'
          className='p-2 bg-slate-500 border-none outline-none'
          required
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <label>Message</label>
        <textarea
          name='message'
          className='p-2 bg-slate-500 border-none outline-none'
          required
          onChange={(e) => setUserText(e.target.value)}
          value={userText}
        />
        <div className='flex group'>
          <button
            type='submit'
            value='Shoot'
            onMouseOver={() => setRight((prev) => !prev)}
            className={`p-4 border border-blue-950 bg-blue-500 mt-3 cursor-pointer ${
              error
                ? `group-hover:bg-red-400 : group-hover:${
                    right ? 'ml-auto' : 'mr-auto'
                  }`
                : ''
            }`}
          >
            Shoot
          </button>
        </div>
      </form>
    </>
  )
}

export default EmailForm
