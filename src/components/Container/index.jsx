import React from 'react';
import '../index.css'
import '../../css/style.css'

function Container(props) {

  return (
    <div id="container" className="bg bg-img">
      <div className="bg bg-gradient">
        <div className="wrapper d-flex align-items-stretch">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Container;