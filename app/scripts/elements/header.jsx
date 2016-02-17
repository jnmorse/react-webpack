import React from 'react';

export const Header = (props) => {
  const subtitle = () => {
    if (props.subtitle) {
      return (
        <small style={{display: 'inline-block', marginLeft: '0.5em'}}>{props.subtitle}</small>
      );
    } else {
      return null;
    }
  };

  return (
    <header className={props.className} style={props.style}>
      <h1 className="col-xs-12">
        <span style={{display:'inline-block',verticalAlign: 'middle'}}>{props.title}</span>
        {subtitle()}
      </h1>
    </header>
  );
};
