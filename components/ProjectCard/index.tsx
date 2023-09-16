import Image from 'next/image'
import React from 'react'

type Props = {
  name: string
  websiteLink?: string
  scourceLink?: string
  smallDescription?: string
  projectPic: string
  description?: string
  ready?: boolean
}

function ProjectCard({
  name,
  websiteLink,
  scourceLink,
  smallDescription,
  projectPic,
  description,
  ready,
}: Props) {
  return (
    <div className='bg-cyan-100 flex-1'>
      <img src={projectPic} alt={name} width='100%' />
    </div>
  )
}

export default ProjectCard
