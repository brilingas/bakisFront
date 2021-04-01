import React, { useRef, useEffect } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import AppLayout from './layouts/AppLayout';
import Admin from './layouts/Admin';
// Views 
import Home from './views/Home';
import Dashboard from './views/Dashboard';
// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();
  
  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/dashboard" component={Admin} />
        </Switch>
      )} />
  );
}

export default App;