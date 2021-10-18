import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import indexRoutes from '../../routes';


const AdminRoutes = ({ component: Component, ...rest }) => {
    const token = JSON.parse(localStorage.getItem('user-token'));

    return (
        <>
            { token.roles?.includes('admin') ? indexRoutes.map((prop, key) => {
                return <Route path={prop.path} key={key} component={prop.component} />;
            }) : <Redirect to='/login?errir'/>}
        </>
    )
}

export default AdminRoutes
