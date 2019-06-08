import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'

import Layout from './components/Layout'
import SiteHeader from './components/SiteHeader'

import configureStore from './configure-store'

/* eslint-disable */
import '../styles/index.css'
/* eslint-enable */

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Layout>
      <SiteHeader />

      <div className="row">
        <p>
          {
            "Time to write some code, and chew bubblegum. Only I'm all out of gum."
          }
        </p>
      </div>
    </Layout>
  </Provider>
)

export default hot(App)
