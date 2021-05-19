import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import VideoPlaceholder from '../../assets/images/video-placeholder.png';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  signupModalActive,
  setSignupModalActive,
  loginModalActive,
  setLoginModalActive,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openVideoModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }
  const closeVideoModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }
  const openSignupModal = (e) => {
    e.preventDefault();
    setSignupModalActive(true);
  }
  const closeSignupModal = (e) => {
    e.preventDefault();
    setSignupModalActive(false);
  }
  const openLoginModal = (e) => {
    e.preventDefault();
    setLoginModalActive(true);
  }
  const closeLoginModal = (e) => {
    e.preventDefault();
    setLoginModalActive(false);
  }
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const signupModal = () => {
    if (signupModalActive) {
      return (
        <Modal
          id="signup-modal"
          show={signupModalActive}
          handleClose={closeSignupModal}
          MODAL_TYPE="signup" />
      )
    }
  }
  const loginModal = () => {
    if (loginModalActive) {
      return (
        <Modal
          id="login-modal"
          show={loginModalActive}
          handleClose={closeLoginModal}
          MODAL_TYPE="login" />
      )
    }
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">Guest registry</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Designed to help you calm visitor chaos in your front office
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="/#">
                    Get started
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/brilingas/bakis">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/92014968"
              href="#0"
              aria-controls="video-modal"
              onClick={openVideoModal}
            >
              <Image
                className="has-shadow"
                src={VideoPlaceholder}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          {loginModal()}
          {signupModal()}
          <Modal
            id="video-modal"
            show={videoModalActive}
            MODAL_TYPE="video"
            handleClose={closeVideoModal}
            video="https://player.vimeo.com/video/92014968"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;