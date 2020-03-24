import * as React from 'react';

export const AboutPage = (props: any) =>
  <div className={'about'}>
    <h2>About page.</h2>
    {props.children}
  </div>
