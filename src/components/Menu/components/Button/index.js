/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable-next-line react/prop-types */
import React from 'react';

function Button(props) {
  return (
    <a href="/" className={props.className}>
      {props.children}
    </a>
  );
}
export default Button;
