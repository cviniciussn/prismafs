import React from 'react';
import { NavLink } from 'react-router-dom';
import Alert from '../../components/Alert';
import Paragraph from '../../components/Paragraph';
import Topico from '../../components/Topico';

import img01 from "../../img/img-01-sl-14.jpg"
import img02 from "../../img/img-02-sl-14.jpg"

function OperadoresDeMaquinas() {
    return (
        <Topico id="operadores-de-maquinas">
            <div className="title text-center opacity-0"><span className="icon"><i className="fas fa-cogs"></i></span> Operadores de Maquinas</div>

            <div id="slide14">
                <Paragraph>
                    O uso de empilhadeira e pá-carregadeira para movimentação de cargas
                    somente pode ser feito por funcionários autorizados pela Empresa.
                    </Paragraph>

                <div className="container-fluid col-md-10">
                    <div className="row ">
                        <div className="col">
                            {/* <div className="card"> */}
                            <div className="card-body d-flex justify-content-center">
                                <img src={img01} alt="" className="rounded-custom box-shadow-custom" height="200" />
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col">
                            {/* <div className="card"> */}
                            <div className="card-body d-flex justify-content-center">
                                <img src={img02} alt="" className="rounded-custom box-shadow-custom" height="200" />
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>

                <hr />

                <Alert title="Atenção!">
                        Use sempre o crachá de identificação de operador quando estiver
                        operando uma empilhadeira ou uma pá-carregadeira.
                </Alert>
            </div>

            <NavLink to="produtos-quimicos">
                <div className="container-fluid text-center">
                    <button className="btn btn-custom my-3 " type="button">
                        <strong>Avançar</strong>
                    </button>
                </div>
            </NavLink>
        </Topico>
    );
}

export default OperadoresDeMaquinas;