import Header from '@/components/Header'
import About from '@/page-containers/About'
import Skills from '@/page-containers/Skills'
import HomeProfile from '@/components/HomeProfile'
import Experience from '@/page-containers/Experience'
import ContactMe from '@/page-containers/ContactMe'
import Projects from '@/page-containers/Projects'

export default function Home() {
  return (
    <main className='lg:h-screen lg:snap-y lg:snap-mandatory overflow-y-auto overflow-x-hidden z-0'>
      <Header />
      <section id='profile' className='lg:snap-start'>
        <HomeProfile />
      </section>

      <section id='about' className='lg:snap-center'>
        <About/>
      </section>

      <section id='skills' className='lg:snap-center'>
        <Skills />
      </section>

      <section id='experience' className='lg:snap-center'>
        <Experience />
      </section>

      <section id='project' className='lg:snap-center'>
        <Projects />
      </section> 

      <section id='contact-me' className='lg:snap-center'>
        <ContactMe />
      </section>
    </main>
  )
}
