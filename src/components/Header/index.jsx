import React from 'react'
import '../index.css'
import logo from '../../img/logo_top4.jpg'

function Header() {
  return (
    <div id="header" className="container-fluid fixed-top">
      <div className="row">
        <div className="col w-100">
          <img className="logotype" src={logo} alt="" />

        </div>
      </div>
    </div>
  );
}

export default Header;