import React from 'react'
import Hero from '../components/home/Hero'
import CompaniesTrust from '../components/home/CompaniesTrust'
import SwitchingEnergy from '../components/home/SwitchingEnergy'
import SimpleStep from '../components/home/SimpleStep'
import Faq from '../components/home/Faq'
import Testimonials from '../components/home/Testimonials'

const Home = () => {
    return (
        <>
            <Hero />
            <CompaniesTrust />
            <SwitchingEnergy />
            <SimpleStep />
            <Faq />
            <Testimonials />
        </>
    )
}

export default Home