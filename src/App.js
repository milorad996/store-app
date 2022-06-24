import logo from './logo.svg';
import {
  BrowserRouter as Router, Switch,
  Route, Link
} from 'react-router-dom';
import React, { useState } from 'react';
import AppCustomers from './components/AppCustomers';
import AppProducts from './components/AppProducts';
import './App.css';
import LatestPurchases from './pagesComponents/Latest Purchases';

function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <ul class="navbar-nav me-auto mb-10 mb-lg-2">

            <li class="nav-item">
              <Link to="/customers">Customers</Link>
            </li>

            <li class="nav-item">
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path="/customers" exact>
            <AppCustomers />
          </Route>
          <Route path="/products" exact>
            <AppProducts />
          </Route>
          <Route path="/customers/:id" exact>
            <LatestPurchases />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
