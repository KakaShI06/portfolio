'use client'

type Props = {
  name: string
  url: string
  score: number
  leftDirection?: boolean
}

function SkillIcon({ name, url, score }: Props) {
  return (
    <div
      className='group relative flex cursor-pointer justify-center overflow-hidden'
    >
      <img
        src={url}
        alt={name}
        className='md:w-[20px] md:h-[20px] lg:w-28 lg:h-28 border rounded-full border-blue-400 bg-white object-contain group-hover:flex transition duration-300 ease-in-out'
      />
      <div className='hidden absolute w-full h-full lg:w-28 lg:h-28 bg-blue-300 rounded-full group-hover:flex transition duration-300 ease-in-out justify-center items-center flex-col'>
        <p className='text-center font-extrabold text-blue-500'>{name}</p>
        <p className='text-center font-extrabold text-blue-500'>{`${score} %`}</p>
      </div>
    </div>
  )
}

export default SkillIcon
