import React from 'react';
import Alert from '../../components/Alert';
import ArrowProgress from '../../components/ArrowProgress';
import Card from '../../components/Card';
import Paragraph from '../../components/Paragraph';
import $ from "jquery";

import img01 from '../../img/img-01-sl-12.jpg';
function EspacoConfinado() {

    $("")

    return (
        <div id="espaco-confinado">
            <div className="title text-center opacity-0"><span className="icon"><i className="fas fa-compress-alt"></i></span> Espaço Confinado</div>

            <div id="slide-11">

                <Paragraph>
                    <strong>Espaço Confinado</strong> é um local <strong>não projetado para a presença contínua de pessoas</strong>. Suas características são:
                    <br />
                    <br />
                    <ul>
                        <li>
                            <i className="fas fa-check" /> Acesso restrito de entrada
                        </li>
                        <li>
                            <i className="fas fa-check" /> Saída e ventilação insuficiente para renovação de ar
                        </li>
                    </ul>
                </Paragraph>

                <ArrowProgress />
                <hr />

                <Paragraph>
                    <div className="card bg-primary" id="item-01-sl-11">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-4 d-flex justify-content-center">
                                <div className="circle yellow">
                                    Espaço Confinado
                                </div>
                            </div>

                            <div className="col-md-8" id="list-01-sl-11">
                                <div className="card-body">
                                    <div className="text-center"><strong>Riscos dos espaços confinados:</strong></div>
                                    <ul>
                                        <li>
                                            <i className="fas fa-circle" style={{ color: '#ffd900' }} /> Falta de oxigênio.
                                        </li>
                                        <li>
                                            <i className="fas fa-circle" style={{ color: '#ffd900' }} /> Presença de:
                                        </li>
                                        <ul>
                                            <li>
                                                <i className="fas fa-check" style={{ color: '#ffd900' }} /> Vapores e gases inflamáveis
                                        </li>
                                            <li>
                                                <i className="fas fa-check" style={{ color: '#ffd900' }} /> Agentes biológicos
                                        </li>
                                        </ul>
                                        <li>
                                            <i className="fas fa-circle" style={{ color: '#ffd900' }} /> Perigo de soterramento na movimentação de grãos
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paragraph>
            </div>

            <ArrowProgress id=""/>
            <hr />

            <div id="slide-12" className="display-none">

                <Paragraph>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <img className="card-img box-shadow-custom" src={img01} alt="STOP" />
                        </div>
                    </div>
                </Paragraph>

                <Alert>
                    <ol>
                        <li>
                            Somente colaboradores treinados de acordo a <strong><u>NR-33 – Segurança e Saúde nos
                            Trabalhos em Espaços Confinados</u></strong> podem realizar atividades nesses locais.
                        </li>
                        <li>
                            Nunca entre em um espaço confinado sem a Permissão de Entrada e Trabalho (PET).
                        </li>
                    </ol>
                </Alert>

            </div>
        </div>
    );
}

export default EspacoConfinado;