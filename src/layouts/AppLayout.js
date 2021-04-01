import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Home from '../views/Home';
import Sidebar from '../components/Sidebar/Sidebar';

import routes from '../routes';

const AppLayout = ({ children }) => {
  const [signupModalActive, setSignupModalActive] = useState(false);
  const [loginModalActive, setLoginModalActive] = useState(false);

  return (
    <>
      <main className="site-content">
      <Sidebar
        routes={routes}
        logoText={"APPLAYOUT component"}
        handleDrawerToggle={() => alert('Toggle pressed')}
        open={() => alert('Opened')}
      />
      {children}
      </main>
    </>
  )
};

export default AppLayout;  