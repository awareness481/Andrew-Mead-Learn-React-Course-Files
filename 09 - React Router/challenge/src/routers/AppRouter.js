import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Home from '../components/Home';
import Header from '../components/Header';
import Portofolio from '../components/Portofolio';
import PortofolioId from '../components/PortofolioId';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact={true} />
          <Route path='/portofolio' component={Portofolio} exact={true}/>
          <Route path='/portofolio/:id' component={PortofolioId} />
          <Route path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
