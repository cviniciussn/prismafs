import React from 'react'
import '../index.css'
import logo from '../../img/logo_top4.PNG'

function Header() {
  return (
    <div id="header" className="container-fluid fixed-top">
      <div className="row">
        <div className="col w-100">
          <img id="logo" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;