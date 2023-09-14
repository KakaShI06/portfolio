import Header from '@/components/Header'
import About from '@/page-containers/About'
import Skills from '@/page-containers/Skills'
import HomeProfile from '@/components/HomeProfile'
import Experience from '@/page-containers/Experience'
import ContactMe from '@/page-containers/ContactMe'

export default function Home() {
  return (
    <main className='h-screen snap-y snap-mandatory overflow-y-scroll z-0'>
      <Header />
      <section id='profile' className='snap-start'>
        <HomeProfile />
      </section>

      <section id='about' className='snap-center'>
        <About/>
      </section>

      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      <section id='contact-me' className='snap-center'>
        <ContactMe />
      </section>
    </main>
  )
}
