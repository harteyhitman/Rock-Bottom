import NavBar from '@/features/navs'
import React from 'react'
import Hero from './hero'
import Services from './services'
import Supports from './supports'
import Initiatives from './initiatives'

const LandingPage = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <Services />
        <Supports />
        <Initiatives />
    </div>
  )
}

export default LandingPage