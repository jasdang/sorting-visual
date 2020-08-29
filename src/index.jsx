import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configuredStore} from '../store';
import App from './components/app';
import '../assets/stylesheets/application.scss';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={configuredStore()}>
      <App />
    </Provider>,
    root
  );
}
