import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import { App } from './App';

const HotApp = hot(App);

ReactDOM.render(<HotApp />, document.querySelector('#app'));
