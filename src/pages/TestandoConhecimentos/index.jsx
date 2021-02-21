import React from 'react';
import { NavLink } from 'react-router-dom';
import { Topico } from '../../components';


function TestandoConhecimentos() {
    return (
        <Topico id="testando-conhecimentos">
            <div className="title text-center opacity-0"><span className="icon"><i className="bi bi-book"></i></span> Testando Conhecimentos</div>


            <NavLink to="/conclusao">
                <div className="container-fluid text-center">
                    <button className="btn btn-custom my-3" type="button">
                        <strong>Avançar</strong>
                    </button>
                </div>
            </NavLink>
        </Topico>
    );
}

export default TestandoConhecimentos;