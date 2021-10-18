import React from 'react';
import ReactDOM from 'react-dom';
import indexRoutes from './routes/index.jsx';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
/* import { HashRouter } from 'react-router-dom'
 */
import './assets/scss/style.css';
import AdminRoutes from './components/AdminRoutes/AdminRoutes.jsx';
import LoginLayout from './layouts/LoginLayout.jsx';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { HomeLayout } from './layouts/HomeLayout.jsx';

/* {indexRoutes.map((prop, key) => {
  return <Route path={prop.path} key={key} component={prop.component} />;
})} */
ReactDOM.render(
  <Provider store={store}>
    <Router>

      <Switch>
        {/* {indexRoutes.map((prop, key) => {
      return <Route path={prop.path} key={key} component={prop.component} />;
    })} */}
        <Route exact path='/' component={HomeLayout} />
        <Route exact path='/login' component={LoginLayout} />
        <AdminRoutes />
      </Switch>

    </Router>
  </Provider>

  , document.getElementById('root'));
