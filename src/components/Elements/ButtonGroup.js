import React from 'react';
import classNames from 'classnames';

export default function ButtonGroup({
  className,
  ...props
}){

  const classes = classNames(
    'button-group',
    className
  );
  return (
    <div
      {...props}
      className={classes}
    />
  );
}