import React from 'react'
import Banner from './Banner'
import SideShow from '../SideShow'
import Support from '../Support'
import HeroSection from '../HeroSection'
import Title from '../Title'

function Home() {
    return (
        <div>
        <Banner></Banner>
        
        <SideShow></SideShow>
        <HeroSection></HeroSection>
        <Support></Support>
        <Title></Title>
        
        </div>
    )
}

export default Home
