import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Base from './base'
import configureStore from './configure-store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Base />
  </Provider>
  , document.querySelector('#app'))
