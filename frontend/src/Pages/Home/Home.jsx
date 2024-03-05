import React from 'react'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Menu'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'
import Dryfruites from '../../components/Dryfruits'
import Navbar from '../../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <Dryfruites />
      <Team />
      <Reservation />
      <Footer />
    </>
  )
}

export default Home
