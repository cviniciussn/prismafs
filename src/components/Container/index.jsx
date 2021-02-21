import React from 'react';
import '../index.css'
import '../../css/style.css'
import { useLocation } from 'react-router-dom';

function Container(props) {

  return (
    <div id="container" className="bg-1">
      <div className="bg-transp"/>
      <div className="wrapper d-flex align-items-stretch">
        {props.children}
      </div>
    </div>
  );
}

export default Container;