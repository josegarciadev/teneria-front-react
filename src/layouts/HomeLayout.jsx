import React from 'react'

import HeaderNavHome from '../components/Home/HeaderNav/HeaderNavHome'
import HeaderHome from '../components/Home/Header/HeaderHome'
import InformationHome from '../components/Home/Information/InformationHome'
import AboutUsHome from '../components/Home/AboutUs/AboutUsHome'
import VisionMissionHome from '../components/Home/VisionMission/VisionMissionHome'
import ObjectivesHome from '../components/Home/Objectives/ObjectivesHome'
import OurProductsHome from '../components/Home/OurProducts/OurProductsHome'
import ContactHome from '../components/Home/Contact/ContactHome'
import FollowUsHome from '../components/Home/FollowUs/FollowUsHome'


export const HomeLayout = () => {
    return (
        <div>
            <HeaderNavHome/>
            <HeaderHome/>
            <InformationHome/>
            <AboutUsHome/>
            <VisionMissionHome/>
            <ObjectivesHome/>
            <OurProductsHome/>
            <ContactHome/>
            <FollowUsHome/>
        </div>
    )
}
