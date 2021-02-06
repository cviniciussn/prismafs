import React from 'react';
import '../index.css'

function Container(props) {

  return (
    <div id="container" className="">
      {props.children}
    </div>
  );
}

export default Container;