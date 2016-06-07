import React from 'react'

const Base = () => (
  <div className='base-component container-fluid'>
    <header className='row'>
      <div className='col-xs-12'>
        <h1>
          <span>{'JNMorse '}</span>
          <i className='glyphicon glyphicon-road' />
          <span>{'React Webpack'}</span>
        </h1>
      </div>
    </header>

    <div className='row'>
      <p>
        {'Time to write some code, and chew bubblegum. '
        + 'Only I\'m all out of gum.'}
      </p>
    </div>
  </div>
)

export default Base
