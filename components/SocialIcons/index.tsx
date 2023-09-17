'use client'

import { SocialIcon } from 'react-social-icons'

type Props = {}

function SocialIcons({}: Props) {
  return (
    <div className='flex mt-6 gap-4 justify-center lg:justify-end'>
      <SocialIcon network='email' url='mailto:ujjvalpriyadarshi06@gmail.com' />
      <SocialIcon
        network='github'
        url='https://github.com/KakaShI06'
        target='_blank'
      />
      <SocialIcon
        network='linkedin'
        url='https://www.linkedin.com/in/ujjval-priyadarshi-7a2839158/'
        target='_blank'
      />
      <SocialIcon
        network='instagram'
        url='https://www.instagram.com/ujjval_06/'
        target='_blank'
      />
    </div>
  )
}

export default SocialIcons
