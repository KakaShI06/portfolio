import Link from 'next/link'
import React from 'react'

type Props = {
  name: string
  websiteLink?: string
  scourceLink?: string
  smallDescription?: string
  projectPic: string
  description?: string
  ready?: boolean
  techStack?: string[]
}

function ProjectCard({
  name,
  websiteLink,
  scourceLink,
  smallDescription,
  projectPic,
  description,
  ready,
  techStack,
}: Props) {
  return (
    <div className='snap-center'>
      <div className='flex flex-col lg:flex-row gap-3'>
        <img
          src={
            ready
              ? projectPic
              : 'https://res.cloudinary.com/doql129vl/image/upload/v1695031594/wip_s9djee.webp'
          }
          alt={name}
          width='50%'
          className='mx-auto lg:mx-0'
        />
        <div className='flex-grow lg:flex lg:flex-col lg:item-center lg:text-lg'>
          <h2 className='font-bold lg:text-3xl mt-2 p-4'>{name}</h2>
          <div className='flex justify-center gap-4'>
            {techStack?.map((stack, index) => (
              <div key={index} className='skill-card'>
                {stack}
              </div>
            ))}
          </div>

          <div className='text-left mt-4'>
            <span className='underline'>Description</span> :{' '}
            <span>{smallDescription}</span>
          </div>

          <div className='text-left mt-4'>
            <span className='underline'>Summary</span> :{' '}
            <span>{description}</span>
          </div>

          <div className='flex justify-around p-4'>
            {scourceLink && (
              <div className='relative group'>
                <div className='absolute rounded-lg inset-0 bg-blue-400 blur-sm group-hover:blur-md'></div>
                <Link href={scourceLink} target='_blank'>
                  <button className='project-btn relative'> View Code </button>
                </Link>
              </div>
            )}
            {websiteLink && (
              <div className='relative group'>
                <div className='absolute rounded-lg inset-0 bg-blue-400 blur-sm group-hover:blur-md'></div>
                <Link target='_blank' href={websiteLink}>
                  <button className='project-btn relative'>
                    Visit website
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
