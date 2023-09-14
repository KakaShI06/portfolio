import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const EmailForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const YOUR_SERVICE_ID = process.env.NEXT_EMAIL_SERVICE_ID || ''
    const YOUR_TEMPLATE_ID = process.env.NEXT_EMAIL_TEMPLATE_ID || ''
    const YOUR_USER_ID = process.env.NEXT_EMAIL_USER_ID || ''


    if (form.current) {
      emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_USER_ID)
        .then(
          (result) => {
            toast.success('Email is sent, Will get back to you!')
          },
          (error) => {
            toast.error('Something went wrong! Please try agaib later')
            console.error('[Error]:', error)
          }
        );
    }
  };

  return (
    <>
      <Toaster />
      <form ref={form} onSubmit={(e) => sendEmail(e)} className='flex flex-col text-left gap-2'>
      <label>Name</label>
      <input type="text" name="user_name" className='p-2' required />
      <label>Email</label>
      <input type="email" name="user_email" className='p-2' required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send"  className='p-4 border border-blue-950 bg-blue-500 mt-3 cursor-pointer' />
    </form>
    </>
  );
};

export default EmailForm;
