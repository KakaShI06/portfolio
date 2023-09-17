import ProjectCard from '@/components/ProjectCard'
import projectsInformation from '@/utility/projects'

type Props = {}

function Projects({}: Props) {
  return (
    <section className='min-h-screen mt-32 lg:mt-0 relative pt-2 flex flex-col justify-center items-center text-center lg:flex-row lg:justify-around gap-5'>
      <h3 className='page-heading'>Projects</h3>
      <div className='w-full absolute top-28 h-[80%] p-4 lg:p-6'>
        <div className='grid-col-system snap-x snap-mandatory'>
          {projectsInformation.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              websiteLink={project.websiteLink}
              scourceLink={project.scourceLink}
              smallDescription={project.smallDescription}
              projectPic={project.projectPic}
              description={project.description}
              ready={project.ready}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
