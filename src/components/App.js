import React from 'react';
// import logo from '../images/logo.svg';
import '../stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Landing from './Landing';
import CardWrapper from './CardWrapper';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/CardWrapper' component={CardWrapper} />
      </Switch>
    </>
  );
}

export default App;
