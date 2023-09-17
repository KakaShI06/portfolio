import Header from '@/components/Header'
import About from '@/page-containers/About'
import Skills from '@/page-containers/Skills'
import HomeProfile from '@/components/HomeProfile'
import Experience from '@/page-containers/Experience'
import ContactMe from '@/page-containers/ContactMe'
import Projects from '@/page-containers/Projects'

export default function Home() {
  return (
    <main className='overflow-x-hidden z-0'>
      <Header />
      <section id='profile' className=''>
        <HomeProfile />
      </section>

      <section id='about' className=''>
        <About/>
      </section>

      <section id='skills' className=''>
        <Skills />
      </section>

      <section id='experience' className=''>
        <Experience />
      </section>

      <section id='project' className=''>
        <Projects />
      </section> 

      <section id='contact-me' className=''>
        <ContactMe />
      </section>
    </main>
  )
}
