import React, { Component } from 'react';

export const Header = (props) => {
  const subtitle = props.subtitle ? <small>&nbsp;{props.subtitle}</small> : null;

  return (
    <header
      className={props.className}
      style={props.style}
      onClick={props.onClick}>
      <h1>{props.title}{subtitle}</h1>
    </header>
  );
};
