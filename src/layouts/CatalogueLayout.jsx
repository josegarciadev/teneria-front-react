import React from 'react'
import CatalogueHome from '../components/Home/Catalogue/CatalogueHome'
import HeaderNavHome from '../components/Home/HeaderNav/HeaderNavHome'
import FollowUsHome from '../components/Home/FollowUs/FollowUsHome'

export const CatalogueLayout = () => {
    return (
        <div>
            <HeaderNavHome/>
            <CatalogueHome/>
            <FollowUsHome/>
        </div>
    )
}