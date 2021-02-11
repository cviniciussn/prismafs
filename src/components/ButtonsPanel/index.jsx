import React from 'react';
import '../index.css'
import './script'

function ButtonsPanel() {
  return (
      <div id="buttons-bar" className="">
          <a id="button-panel-back"><i class="fas fa-chevron-circle-left"></i></a>
          <a id="button-panel-next"><i class="fas fa-chevron-circle-right"></i></a>
      </div>
  );
}

export default ButtonsPanel;