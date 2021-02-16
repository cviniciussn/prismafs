import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
import { Link, Redirect } from 'react-router-dom';

function BloqueioEletromecanico() {
    return (
        <div id="bloqueio-eletromecanico">
            <h1 className="topic ">Bloqueio Eletromecânico</h1>

            <div className="slide-06">

                <div id="item-01-sl-06" className="">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <p className="my-3">
                                A Política de Bloqueio Eletromecânico da BSBIOS estabelece que:
                            </p>
                        </div>
                    </div>
                </div>

                <div id="item-02-sl-06" className="">
                    <div className="row justify-content-center">
                        <div className="col-md-8 alert alert-warning box-shadow-custom">
                            <p className="my-3">
                                <strong>ANTES</strong> de executar qualquer intervenção, <strong>TODOS</strong> devem realizar bloqueio e identificação
                                de <strong>TODAS</strong> as energias perigosas de <strong>QUALQUER</strong> equipamento.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            
                        </div>
                    </div>
                </div>

                <hr />
                {/* >>> */}





            </div>

            <div className="slide-07">
                <div>
                    Chegou a hora de refletir...
                </div>

                <div>
                    <h3>Fique atento!</h3>
                    <p>
                        O bloqueio e a identificação das energias perigosas do equipamento em que será
                        realizado o trabalho devem ser realizados por todos os colaboradores, terceiros,
                        temporários e prestadores de serviço que irão realizar a atividade.
                    </p>
                </div>
            </div>

            <Link to="/tipos-de-trabalho">
                <button id="btn-02" type="button" className="btn btn-success">Avançar</button>
            </Link>
        </div>
    );
}

export default BloqueioEletromecanico;