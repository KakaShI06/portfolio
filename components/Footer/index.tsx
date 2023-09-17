import Link from 'next/link'
import React from 'react'

type Props = {}

function Footer({}: Props) {
  const year = new Date().getFullYear()

  return (
    <div className='absolute bottom-0 w-full p-2 text-center'>
      @Copyright {year} | Developer <Link href='/' className='underline'>Ujjval Priyadarshi</Link>
    </div>
  )
}

export default Footer