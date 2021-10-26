import Departments from '../views/Admin/Departments/Departments.jsx';
import User from '../views/Admin/Users/User.jsx';
import Employees from '../views/Admin/Employees/Employees.jsx';
import Starter from '../views/starter/starter.jsx';
// ui components
import Alerts from '../views/ui-components/alert.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Cards from '../views/ui-components/cards.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';
import Products from '../views/Admin/Products/Products.jsx';
import Providers from '../views/Admin/Providers/Providers.jsx';
import ProducProviders from '../views/Admin/ProductProviders/ProducProviders.jsx';
import Lines from '../views/Admin/Lines/Lines.jsx';
import LinesProds from '../views/Admin/LinesProds/LinesProds.jsx';
import LinesLogs from '../views/Admin/LinesLogs/LinesLogs.jsx';

var ThemeRoutesAdmin = [
  { 
    path: '/admin/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-loop', 
    component: Starter 
  },
  { 
    path: '/admin/dashboard/departments', 
    name: 'Departamentos', 
    icon: 'ti-loop', 
    component: Departments 
  },
  { 
    path: '/admin/dashboard/employees', 
    name: 'Empleados', 
    icon: 'ti-loop', 
    component: Employees
  },
  { 
    path: '/admin/dashboard/lineasLogs', 
    name: 'Entradas/Salidas de Lineas', 
    icon: 'ti-loop', 
    component: LinesLogs
  },
  { 
    path: '/admin/dashboard/line', 
    name: 'Lineas', 
    icon: 'ti-loop', 
    component: Lines
  },
  { 
    path: '/admin/dashboard/lineprods', 
    name: 'Lineas Productos', 
    icon: 'ti-loop', 
    component: LinesProds
  },
  {
    path: '/admin/dashboard/products',
    name: 'Product',
    icon: 'mdi mdi-account',
    component: Products
  },
  {
    path: '/admin/dashboard/providers',
    name: 'Provider',
    icon: 'mdi mdi-account',
    component: Providers
  },
  {
    path: '/admin/dashboard/prodprovs',
    name: 'Producto Provider',
    icon: 'mdi mdi-account',
    component: ProducProviders
  },
  {
    path: '/admin/dashboard/users',
    name: 'Usuarios',
    icon: 'mdi mdi-account',
    component: User
  },
  { path: '/admin/dashboard', pathTo: '/admin/dashboard', name: 'Dashboard', redirect: true }
];

var ThemeRoutesRoot = [
  { 
    path: '/ROOT/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-loop', 
    component: Starter 
  },
  {
    path: '/ROOT/dashboard/alert',
    name: 'Alerts',
    icon: 'mdi mdi-comment-processing-outline',
    component: Alerts
  },
  {
    path: '/ROOT/dashboard/badge',
    name: 'Badges',
    icon: 'mdi mdi-arrange-send-backward',
    component: Badges
  },
  {
    path: '/ROOT/dashboard/button',
    name: 'Buttons',
    icon: 'mdi mdi-toggle-switch',
    component: Buttons
  },
  {
    path: '/ROOT/dashboard/card',
    name: 'Cards',
    icon: 'mdi mdi-credit-card-multiple',
    component: Cards
  },
  {
    path: '/ROOT/dashboard/grid',
    name: 'Grid',
    icon: 'mdi mdi-apps',
    component: LayoutComponent
  },
  {
    path: '/ROOT/dashboard/pagination',
    name: 'Pagination',
    icon: 'mdi mdi-priority-high',
    component: PaginationComponent
  },
  {
    path: '/ROOT/dashboard/popover',
    name: 'Popover',
    icon: 'mdi mdi-pencil-circle',
    component: PopoverComponent
  },
  {
    path: '/ROOT/dashboard/ui-components/tooltip',
    name: 'Toltips',
    icon: 'mdi mdi-image-filter-vintage',
    component: TooltipComponent
  },
  {
    path: '/ROOT/dashboard/users',
    name: 'Usuarios',
    icon: 'mdi mdi-account',
    component: User
  },
  { path: '/ROOT/dashboard', pathTo: '/ROOT/dashboard', name: 'Dashboard', redirect: true },
];

var ThemeRoutesUser = [
  { 
    path: '/user/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-loop', 
    component: Starter 
  },
  {
    path: '/user/dashboard/users',
    name: 'Usuarios',
    icon: 'mdi mdi-account',
    component: User
  },
  { path: '/user/dashboard', pathTo: '/user/dashboard', name: 'Dashboard', redirect: true },
  {
    path:'*',
    redirect:true,
    pathTo: '/user/dashboard'
  }
];
export{
  ThemeRoutesAdmin,
  ThemeRoutesUser,
  ThemeRoutesRoot
};
