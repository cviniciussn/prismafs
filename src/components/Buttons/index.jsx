import React from 'react';

import { Link } from "react-router-dom";
function Buttons() {
    return (
        <div id="buttons">
            <Link to="/treinamento">
                <button id="btn-start" className="btn btn-success">Iniciar Treinamento</button>
            </Link>
        </div>
    );
}

export default Buttons;