import skills from '@/utility/skills'
import SkillIcon from '@/components/SkillIcon'

type Props = {}

function Skills({}: Props) {
  return (
    <section className='h-screen relative pt-2 flex flex-col justify-center items-center text-center lg:flex-row lg:justify-around'>
      <h3 className='page-heading'>Skills</h3>
      <h4 className='page-sub-heading'>Hover Over a skill for currency proficiency</h4>
      <div className='w-full p-8'>
        <div className='grid grid-cols-4 lg:grid-cols-5 gap-4'>
          {skills.slice(0, skills.length / 2).map((skill, index) => (
            <SkillIcon
              key={index}
              name={skill.name}
              url={skill.logo}
              score={skill.score}
              leftDirection
            />
          ))}
          {skills.slice(skills.length / 2).map((skill, index) => (
            <SkillIcon
              key={index}
              name={skill.name}
              url={skill.logo}
              score={skill.score}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
