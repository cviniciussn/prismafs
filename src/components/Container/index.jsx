import React from 'react';
import '../index.css'
import '../../css/style.css'

function Container(props) {

  return (
    <div id="container">
      <div className="wrapper d-flex align-items-stretch">
        {props.children}
      </div>
    </div>
  );
}

export default Container;