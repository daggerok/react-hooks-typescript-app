import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { ApplicationContextProvider } from './state/provider';
import { Router } from '@reach/router';
import { RouteComponentProps } from '@reach/router';
import { IndexPage } from './components/pages/IndexPage';
import { AboutPage } from './components/pages/AboutPage';

type PageRouteProps = { pageComponent: JSX.Element } & RouteComponentProps;
export const PageRoute = (props: PageRouteProps) => props.pageComponent;

ReactDOM.render(
  <ApplicationContextProvider>
    <Router>
      <App path={process.env.BASE_HREF + '/'}>
        <PageRoute pageComponent={<IndexPage />} path={'/'} />
        <PageRoute pageComponent={<AboutPage />} path={'/about'} />
      </App>
    </Router>
  </ApplicationContextProvider>,
  document.querySelector('#app')
);
