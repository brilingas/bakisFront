import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Home from '../views/Home';

const LayoutDefault = ({ children }) => {
  const [signupModalActive, setSignupModalActive] = useState(false);
  const [loginModalActive, setLoginModalActive] = useState(false);

  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" signupModalActive={signupModalActive} setSignupModalActive={setSignupModalActive} loginModalActive={loginModalActive} setLoginModalActive={setLoginModalActive} />
      <Home signupModalActive={signupModalActive} setSignupModalActive={setSignupModalActive} loginModalActive={loginModalActive} setLoginModalActive={setLoginModalActive} />
      <main className="site-content">
        {children}
      </main>
      <Footer />
    </>
  )
};

export default LayoutDefault;  