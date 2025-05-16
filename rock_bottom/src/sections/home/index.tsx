import NavBar from '@/features/navs'
import React from 'react'
import Hero from './hero'
import Services from './services'
import Supports from './supports'
import Initiatives from './initiatives'
import Events from './events'
import Missions from './missions'
import Contribute from './contribute'
import FooterSection from './footer'

const LandingPage = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <Services />
        <Supports />
        <Initiatives />
        <Events />
        <Missions />
        <Contribute />
        <FooterSection />
    </div>
  )
}

export default LandingPage