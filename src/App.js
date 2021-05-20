import React, { useRef, useEffect } from 'react';
import { Redirect, Switch, useLocation } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LayoutDefault from './layouts/LayoutDefault';
import Admin from './layouts/Admin';
import Home from './views/Home';
import Dashboard from './views/Dashboard/Dashboard';
import PersonProfile from './views/PersonProfile/PersonProfile';
import LocationProfile from './views/LocationProfile/LocationProfile';
import TableList from './views/TableList/TableList';
import Icons from './views/Icons/Icons';
import PersonsList from './views/PersonsList/PersonsList';
import LocationsList from './views/LocationsList/LocationsList';
import CardsList from './views/CardsList/CardsList';
import CardProfile from './views/CardProfile/CardProfile';
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
          <AppRoute exact path="/admin/dashboard" component={Dashboard} layout={Admin}/>

          <AppRoute exact path="/admin/person" component={PersonProfile} layout={Admin} />
          <AppRoute exact path="/admin/persons" component={PersonsList } layout={Admin} />

          <AppRoute exact path="/admin/location" component={LocationProfile} layout={Admin} />
          <AppRoute exact path="/admin/locations" component={LocationsList} layout={Admin} />

          <AppRoute exact path="/admin/card" component={CardProfile} layout={Admin} />
          <AppRoute exact path="/admin/cards" component={CardsList} layout={Admin} />

          <Redirect from="/" to="/admin/dashboard"/>
        </Switch>
      )} />
  );
}
export default App;