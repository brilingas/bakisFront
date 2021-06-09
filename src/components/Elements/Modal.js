import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from './Input';
import Signup from './Signup';
import Login from './Login';


const propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  closeHidden: PropTypes.bool,
  video: PropTypes.string,
  videoTag: PropTypes.oneOf(['iframe', 'video']),
  form: PropTypes.oneOf(['signup', 'login'])
}
const defaultProps = {
  children: null,
  show: false,
  closeHidden: false,
  video: '',
  videoTag: 'iframe'
}
const MODAL_TYPE = {
  VIDEO: "video",
  SIGNUP: "signup",
  LOGIN: "login"
}
export default function Modal({
  className,
  MODAL_TYPE,
  children,
  handleClose,
  show,
  closeHidden,
  video,
  videoTag,
  ...props
}){
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', stopProgagation);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', stopProgagation);
    };
  });

  useEffect(() => {
    handleBodyClass();
  }, [props.show]);

  const handleBodyClass = () => {
    if (document.querySelectorAll('.modal.is-active').length) {
      document.body.classList.add('modal-is-active');
    } else {
      document.body.classList.remove('modal-is-active');
    }
  }
  const keyPress = (e) => {
    e.keyCode === 27 && handleClose(e);
  }
  const stopProgagation = (e) => {
    e.stopPropagation();
  }

  const classes = classNames(
    'modal',
    show && 'is-active',
    MODAL_TYPE.VIDEO && 'modal-video',
    MODAL_TYPE.SIGNUP && 'modal-signup',
    MODAL_TYPE.LOGIN && 'modal-login',
    className
  );
  const switchModal = () => {
    switch (MODAL_TYPE) {
      case "video":
        return (
          <div className="responsive-video">
            {videoTag === 'iframe' ?
              <iframe
                title="video"
                src={video}
                frameBorder="0"
                allowFullScreen
              ></iframe> :
              <video
                v-else
                controls
                src={video}
              ></video>
            }
          </div>
        );
      case "signup":
        return (
          <Signup />
        )
      case "login":
        return (
          <Login />
        )
      default:
        return null;
    }
  }
  return (
    <>
      {show &&
        <div
          {...props}
          className={classes}
          onClick={handleClose}
        >
          <div className="modal-inner" onClick={stopProgagation}>
            {
              switchModal()
            }
          </div>
        </div>
      }
    </>
  )
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;