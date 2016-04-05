import React from 'react'
import jsdom from 'mocha-jsdom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { expect } from 'chai'
import TestUtils from 'react-addons-test-utils'
import reducers from '../../src/client/reducers'

jsdom()

function renderComponent(Component = null, state = {}, props = {}) {
  return TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <Component {...props} />
    </Provider>
  )
}

export { expect, TestUtils, renderComponent }
