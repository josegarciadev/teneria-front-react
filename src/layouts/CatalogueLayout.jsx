import React from 'react'
import CatalogueHome from '../components/Home/Catalogue/CatalogueHome'
import HeaderNavHome from '../components/Home/HeaderNav/HeaderNavHome'

export const CatalogueLayout = () => {
    return (
        <div>
            <HeaderNavHome/>
            <CatalogueHome/>
        </div>
    )
}