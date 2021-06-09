import React from 'react';
import Hero from '../components/Sections/Hero';
import FeaturesTiles from '../components/Sections/FeaturesTiles';
import FeaturesSplit from '../components/Sections/FeaturesSplit';
import Testimonial from '../components/Sections/Testimonial';
import Cta from '../components/Sections/Cta';

export default function Home({ signupModalActive, setSignupModalActive, loginModalActive, setLoginModalActive }){

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