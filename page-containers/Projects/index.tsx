import ProjectCard from '@/components/ProjectCard'
import projectsInformation from '@/utility/projects'

type Props = {}

function Projects({}: Props) {
  return (
    <section className='h-screen relative pt-2 flex flex-col justify-center items-center text-center lg:flex-row lg:justify-around overflow-hidden gap-5'>
      <h3 className='page-heading'>Projects</h3>
      <div className='w-full absolute top-28 h-[80%] border border-fuchsia-50 p-4 lg:p-6'>
        <div className='grid-col-system'>
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
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
