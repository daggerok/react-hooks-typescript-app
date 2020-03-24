import React, { Fragment } from 'react';
import { Nav } from './app/Nav';
import { Link } from '@reach/router';

// const baseHref = process.env.BASE_HREF; // see: props.path

export const App = (props) => (
  <Fragment>
    <Nav/>
    <div id='links'>
      <Link to={props.path + ''}>&lt;- Home</Link>
      <Link to={props.path + 'about'}>About -&gt;</Link>
    </div>
    {props.children}
  </Fragment>
);
