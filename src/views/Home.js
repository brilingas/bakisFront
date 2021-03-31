import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = ({ signupModalActive, setSignupModalActive, loginModalActive, setLoginModalActive }) => {

  return (
    <>
      <Hero className="illustration-section-01" signupModalActive={signupModalActive} setSignupModalActive={setSignupModalActive} loginModalActive={loginModalActive} setLoginModalActive={setLoginModalActive} />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;