import React from 'react'
import Qualities from '../../components/Qualities'
import Juice from '../../components/Juice'
import Team from '../../components/Team'
// import Reservation from '../../components/Reservation'
import Main from '../../components/HeroSection'
import Dryfruits from '../pages/Dryfruits'
import MakeReservation from '../pages/MakeReservation'

const Home = () => {
  return (
    <>
      <Main />
      <Qualities />
      <Juice />
      <Dryfruits/>
      <Team />
      <MakeReservation />
     
    </>
  )
}

export default Home
