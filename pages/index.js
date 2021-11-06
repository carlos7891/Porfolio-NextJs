import Image from 'next/image'
import AboutMe from '../components/AboutMe'
import Bio from '../components/Bio'
import Experiences from '../components/Experiences'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <Layout>
      <AboutMe/>
      <Bio/>
      <Experiences/>
      <Skills/>
      <Projects/>
    </Layout>

  )
}
