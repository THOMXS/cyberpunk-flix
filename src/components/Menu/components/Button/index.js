/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Button(props) {
  return (
    <a href="/" className={props.className}>
      {props.children}
    </a>
  );
}
export default Button;
