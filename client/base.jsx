import React, { Component } from 'react';
import { siteLoaded } from './actions';
import { connect } from 'react-redux';
import { Header } from './elements/Header';

class Base extends Component {
  componentDidMount() {
    this.props.siteLoaded();
  }

  render() {
    return (
      <div>
        <Header className="container-fluid" subtitle="Webpack" title="React"/>
      </div>
    );
  }
}

Base.propTypes = {
  siteLoaded: React.PropTypes.func
};

export default connect(null, { siteLoaded })(Base);
