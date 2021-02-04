import React from 'react';

// import { Container } from './styles';

function ButtonsBar() {
  return (
      <div id="buttons-container" className="container-fluid">
          <div id="buttons-row" className="row text-center">
              <div className="col">
                <button className="btn btn-primary btn-sm">Retroceder</button>
              </div>
              <div className="col">
                <button className="btn btn-primary btn-sm">Avançar</button>
              </div>
          </div>
      </div>
  );
}

export default ButtonsBar;