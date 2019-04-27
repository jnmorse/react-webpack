import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'

import configureStore from './configure-store'

/* eslint-disable */
import '../styles/index.scss'
/* eslint-enable */

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <div className="base-component container-fluid">
      <header className="row">
        <div className="col-xs-12">
          <h1>
            <span>{'Joseph Morse '}</span>
            <i className="glyphicon glyphicon-road" />
            <span>{' React Webpack'}</span>
          </h1>
        </div>
      </header>

      <div className="row">
        <p>
          {'Time to write some code, and chew bubblegum. Only I\'m all out of gum.'}
        </p>
      </div>
    </div>
  </Provider>
)

export default hot(App)
