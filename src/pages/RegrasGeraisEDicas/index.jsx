import React from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import { Topico } from '../../components';


function RegrasGeraisEDicas() {

    return (
        <Topico id="regras-gerais-e-dicas">
            <div className="title text-center"><span className="icon"><i className="bi bi-lightbulb"></i></span> Regras Gerais e Dicas</div>
            <div>

            </div>

            <NavLink to="testando-conhecimentos">
                <div className="container-fluid text-center">
                    <button className="btn btn-custom my-3 " type="button">
                        <strong>Avançar</strong>
                    </button>
                </div>
            </NavLink>
        </Topico>
    );
}

export default RegrasGeraisEDicas;