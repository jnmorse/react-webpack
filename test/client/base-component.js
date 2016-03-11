import React from 'react';
import expect from 'expect.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import TestUtils from 'react-addons-test-utils';
import reducers from '../../src/client/reducers';
import Base from '../../src/client/base';

const createStoreWithMiddleware = applyMiddleware()(createStore);

describe('Base Component', function() {
  before('render and locate element', function() {

    var div = TestUtils.renderIntoDocument(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Base />
      </Provider>
    );

    this.divTest = TestUtils.findRenderedDOMComponentWithTag(div, 'p');

  });

  it('Should say, "Time to write some code, and chew bubblegum. Only I\'m all '
    + 'out of gum."', function() {

    expect(this.divTest.textContent)
      .equal('Time to write some code, and chew bubblegum. '
        + 'Only I\'m all out of gum.');
  });

});
