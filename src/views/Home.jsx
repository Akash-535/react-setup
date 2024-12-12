import React from 'react'
import Hero from '../components/home/Hero'
import CompaniesTrust from '../components/home/CompaniesTrust'
import SwitchingEnergy from '../components/home/SwitchingEnergy'
import SimpleStep from '../components/home/SimpleStep'
import ComprehensiveUtility from '../components/home/ComprehensiveUtility'
import Testimonials from '../components/home/Testimonials'
import ForUtilities from '../components/home/ForUtilities'

const Home = () => {
    return (
        <>
            <Hero />
            <CompaniesTrust />
            <SwitchingEnergy />
            <SimpleStep />
            <ComprehensiveUtility />
            <ForUtilities />
            <Testimonials />
        </>
    )
}

export default Home