import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {indexRoutes,userRoutes, rootRoutes} from '../../routes';


const AdminRoutes = ({ component: Component, ...rest }) => {
    const token = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            { token && token.roles?.includes('admin') ? indexRoutes.map((prop, key) => {
                return <Route path={prop.path} key={key} component={prop.component} />;
            })
            :
            token && token.roles?.includes('root') ? rootRoutes.map((prop, key) => {
                return <Route path={prop.path} key={key} component={prop.component} />;
            }):
            token && token.roles?.includes('user') ? userRoutes.map((prop, key) => {
                return <Route path={prop.path} key={key} component={prop.component} />;
            })
            :
            <Redirect to='/login'/>}
        </>
    )
}

export default AdminRoutes
