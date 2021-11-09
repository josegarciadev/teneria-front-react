import Departments from '../views/Admin/Departments/Departments.jsx';
import User from '../views/Admin/Users/User.jsx';
import Employees from '../views/Admin/Employees/Employees.jsx';
import Starter from '../views/starter/starter.jsx';
import Products from '../views/Admin/Products/Products.jsx';
import Providers from '../views/Admin/Providers/Providers.jsx';
import ProducProviders from '../views/Admin/ProductProviders/ProducProviders.jsx';
import Lines from '../views/Admin/Lines/Lines.jsx';
import LinesProds from '../views/Admin/LinesProds/LinesProds.jsx';
import LinesLogs from '../views/Admin/LinesLogs/LinesLogs.jsx';
import EmployeesLogs from '../views/Admin/EmployeesLogs.jsx';
import Audit from '../views/Admin/Audit/Audit.jsx';
import UserLayout from '../views/User/UserLayout.jsx';

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
    icon: 'mdi mdi-city', 
    component: Departments 
  },
  { 
    path: '/admin/dashboard/employees', 
    name: 'Empleados', 
    icon: 'mdi mdi-account-key', 
    component: Employees
  },
  { 
    path: '/admin/dashboard/employeesLogs', 
    name: 'Entradas/Salidas empleados', 
    icon: 'mdi mdi-account-switch', 
    component: EmployeesLogs
  },
  { 
    path: '/admin/dashboard/lineasLogs', 
    name: 'Entradas/Salidas Lineas', 
    icon: 'mdi mdi-chart-line', 
    component: LinesLogs
  },

  { 
    path: '/admin/dashboard/line', 
    name: 'Lineas', 
    icon: 'mdi mdi-home-modern', 
    component: Lines
  },
  { 
    path: '/admin/dashboard/lineprods', 
    name: 'Lineas Productos', 
    icon: 'mdi mdi-folder-multiple', 
    component: LinesProds
  },
  {
    path: '/admin/dashboard/products',
    name: 'Productos',
    icon: 'mdi mdi-shopping',
    component: Products
  },
  {
    path: '/admin/dashboard/providers',
    name: 'Proveedores',
    icon: 'mdi mdi-car',
    component: Providers
  },
  {
    path: '/admin/dashboard/prodprovs',
    name: 'Producto Proveedor',
    icon: 'mdi mdi-truck',
    component: ProducProviders
  },
  {
    path: '/admin/dashboard/users',
    name: 'Usuarios',
    icon: 'mdi mdi-account-alert',
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
    path: '/ROOT/dashboard/departments', 
    name: 'Departamentos', 
    icon: 'mdi mdi-city', 
    component: Departments 
  },
  { 
    path: '/ROOT/dashboard/employees', 
    name: 'Empleados', 
    icon: 'mdi mdi-account-key', 
    component: Employees
  },
  { 
    path: '/ROOT/dashboard/employeesLogs', 
    name: 'Entradas/Salidas empleados', 
    icon: 'mdi mdi-account-switch', 
    component: EmployeesLogs
  },
  { 
    path: '/ROOT/dashboard/lineasLogs', 
    name: 'Entradas/Salidas Lineas', 
    icon: 'mdi mdi-chart-line', 
    component: LinesLogs
  },

  { 
    path: '/ROOT/dashboard/line', 
    name: 'Lineas', 
    icon: 'mdi mdi-home-modern', 
    component: Lines
  },
  { 
    path: '/ROOT/dashboard/lineprods', 
    name: 'Lineas Productos', 
    icon: 'mdi mdi-folder-multiple', 
    component: LinesProds
  },
  {
    path: '/ROOT/dashboard/products',
    name: 'Productos',
    icon: 'mdi mdi-shopping',
    component: Products
  },
  {
    path: '/ROOT/dashboard/providers',
    name: 'Proveedores',
    icon: 'mdi mdi-car',
    component: Providers
  },
  {
    path: '/ROOT/dashboard/prodprovs',
    name: 'Producto Proveedor',
    icon: 'mdi mdi-truck',
    component: ProducProviders
  },
  {
    path: '/ROOT/dashboard/users',
    name: 'Usuarios',
    icon: 'mdi mdi-account-alert',
    component: User
  },
  {
    path: '/ROOT/dashboard/auditorias',
    name: 'Auditorias',
    icon: 'mdi mdi-account',
    component: Audit
  },
  { path: '/ROOT/dashboard', pathTo: '/ROOT/dashboard', name: 'Dashboard', redirect: true },
];

var ThemeRoutesUser = [
  { 
    path: '/user/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-loop', 
    component: UserLayout 
  },
  { 
    path: '/user/dashboard/employeesLogs', 
    name: 'Entradas/Salidas empleados', 
    icon: 'mdi mdi-account-switch',
    component: EmployeesLogs
  },
  { 
    path: '/user/dashboard/lineasLogs', 
    name: 'Entradas/Salidas Lineas', 
    icon: 'mdi mdi-chart-line', 
    component: LinesLogs
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
