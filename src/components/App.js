import React, { Fragment } from 'react';
import { Nav } from './app/Nav';
import { Link } from '@reach/router';

export const App = (props) => (
  <Fragment>
    <Nav/>
    <div id='links'>
      <Link to='/'>&lt;- Home</Link>
      <Link to={'/about'}>About -&gt;</Link>
    </div>
    {props.children}
  </Fragment>
);
