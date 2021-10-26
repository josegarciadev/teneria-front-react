import Fulllayout from '../layouts/fulllayout.jsx';

var indexRoutes = [
    { path: '/admin/dashboard', name: 'Starter', component: Fulllayout },
];

var userRoutes = [
    { path: '/user/dashboard', name: 'Starter', component: Fulllayout }
];
var rootRoutes = [
    { path: '/ROOT/dashboard', name: 'Starter', component: Fulllayout },
];
export {
    indexRoutes,
    userRoutes,
    rootRoutes
};
