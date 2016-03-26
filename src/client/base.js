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
      <div className='base-component'>
        <Header className='container-fluid' subtitle='Webpack' title='React'/>

        <p>
          Time to write some code, and chew bubblegum. Only I'm all out of gum.
        </p>
      </div>
    );
  }
}

Base.propTypes = {
  siteLoaded: React.PropTypes.func
};

Base.displayName = 'Base';

export default connect(null, { siteLoaded })(Base);
