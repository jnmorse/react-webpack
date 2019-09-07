import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRoad } from '@fortawesome/free-solid-svg-icons';

import { App } from './components/app';

import './index.css';

library.add(faRoad);

const HotApp = hot(App);

ReactDOM.render(<HotApp />, document.querySelector('#app'));

if ('serviceWorker' in navigator) {
  /* uncomment to enable service worker */
  // navigator.serviceWorker.register('service-worker.js');
}
