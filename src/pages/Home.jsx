import React from 'react'
import Hero from '../components/Hero.jsx'
import FeaturedDestination from '../components/FeaturedDestination.jsx'
import ExclusiveOffers from '../components/ExclusiveOffers.jsx'
import Testimonal from '../components/Testimonal.jsx'
import NewsLetter from '../components/NewsLetter.jsx'



const Home = () => {
  return (
    <div>
        <Hero />
        <FeaturedDestination />
        <ExclusiveOffers />
        <Testimonal />
        <NewsLetter />
  
    </div>
  )
}

export default Home