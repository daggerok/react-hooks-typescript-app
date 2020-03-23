import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { ApplicationContextProvider } from './state/provider';

ReactDOM.render(
  <ApplicationContextProvider>
    <App/>
  </ApplicationContextProvider>,
  document.querySelector('#app')
);
