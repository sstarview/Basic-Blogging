/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import LoginPage from '../LoginPage';
import Navbar from '../../components/Navbar';
import Signup from 'containers/Signup';
import UserPage from 'containers/UserPage';
import Logout from 'containers/Logout';
import AboutPage from 'containers/AboutPage';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={Signup} />
        <Route path="/userpage" component={UserPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/logout" component={Logout} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default App;
