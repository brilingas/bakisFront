import React from 'react';
import PropTypes, { func } from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.elementType,
  color: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
  wide: PropTypes.bool,
  wideMobile: PropTypes.bool,
  disabled: PropTypes.bool
}

const defaultProps = {
  tag: 'button',
  color: '',
  size: '',
  loading: false,
  wide: false,
  wideMobile: false,
  disabled: false
}

export default function Button({
  className,
  tag,
  color,
  size,
  loading,
  wide,
  wideMobile,
  disabled,
  ...props
}){
  const classes = classNames(
    'button',
    color && `button-${color}`,
    size && `button-${size}`,
    loading && 'is-loading',
    wide && 'button-block',
    wideMobile && 'button-wide-mobile',
    className
  );

  const Component = tag;
  return (
    <Component
      {...props}
      className={classes}
      disabled={disabled}
    />
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;