import React from 'react';
import { Route } from 'react-router-dom';

export default function AppRoute({
  component: Component,
  layout: Layout,
  ...rest
}){
  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )} />
  );
}