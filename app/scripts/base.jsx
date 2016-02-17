import React, { Component } from 'react';
import { Header } from './elements/html5';

export default class Base extends Component {
  render () {
    return (
      <div>
        <Header className="container-fluid" title="React" subtitle="Webpack"/>
        <i style={{fontSize:30}} className="glyphicon glyphicon-leaf"></i>
      </div>
    );
  }
}
