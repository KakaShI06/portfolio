import React from 'react'

type Props = {
  companyName: string
  duration: string
  techstack: string[]
  summary?: string
  points: string[]
}

function ExperienceCard({
  companyName,
  duration,
  techstack,
  summary,
  points,
}: Props) {
  return (
    <div className='experience-card snap-center'>
      <div className='bg-gray-900 p-4 rounded-lg max-w-[1000px] lg:mx-auto lg:p-10'>
        <h3 className='text-blue-500 text-center font-semibold uppercase text-xl lg:text-3xl'>
          {companyName}
        </h3>
        <p className='text-center text-xs lg:text-base'>{duration}</p>
        <div className='flex justify-center flex-wrap mt-2'>
          {techstack.map((tech, idx) => (
            <span
              className='homeBtn lg:text-lg pt-0 pb-1 cursor-pointer'
              key={idx}
            >
              {tech}
            </span>
          ))}
        </div>
        {summary && (
          <div
            dangerouslySetInnerHTML={{
              __html: summary,
            }}
            className='link-highlight lg:text-lg'
          />
        )}
        <ul className='lg:text-lg'>
          {points.map((point, idx) => (
            <li
              key={idx}
              dangerouslySetInnerHTML={{
                __html: point,
              }}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceCard
