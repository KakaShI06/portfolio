import ExperienceCard from '@/components/ExperienceCard'
import experience from '@/utility/experience'

type Props = {}

function Experience({}: Props) {
  return (
    <section className='min-h-screen relative pt-2 flex flex-col justify-center items-center text-center lg:flex-row lg:justify-around gap-5'>
      <h3 className='page-heading'>Experience</h3>
      <p className='text-xs absolute top-[100px]'>
        Scroll vertically to view more experiences!
      </p>

      <div className='w-full absolute top-28  flex overflow-x-scroll pl-2 pr-2 mt-4 text-left snap-x snap-mandatory lg:pl-10 lg:pr-10 lg:h-3/4'>
        {experience.map((company, index) => (
          <ExperienceCard
            key={index}
            companyName={company.companyName}
            summary={company.summary}
            techstack={company.techstack}
            points={company.points}
            duration={company.duration}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
