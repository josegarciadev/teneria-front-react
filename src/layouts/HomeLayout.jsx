import React from 'react'
import HeaderHome from '../components/Home/Header/HeaderHome'
import InformationHome from '../components/Home/Information/InformationHome'
import AboutUs from '../components/Home/AboutUs/AboutUs'

export const HomeLayout = () => {
    return (
        <div>
            <HeaderHome/>
            <InformationHome/>
            <AboutUs/>
        </div>
    )
}
