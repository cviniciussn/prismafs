import React from 'react';
import Alert from '../../components/Alert';
import $ from "jquery";

import ArrowProgress from '../../components/ArrowProgress';
import Card from '../../components/Card';
import Paragraph from '../../components/Paragraph';
import NextPage from '../../components/NextPage';


import img01 from '../../img/img-01-sl-11.png';
import img02 from '../../img/img-01-sl-12.jpg';

function EspacoConfinado() {

    $("")

    return (
        <div id="espaco-confinado">
            <div className="title text-center opacity-0"><span className="icon"><i className="fas fa-compress-alt"></i></span> Espaço Confinado</div>

            <div id="slide-11">

                <Paragraph>
                    <strong>Espaço Confinado</strong> é um local <strong>não projetado para a presença contínua de pessoas</strong>. Suas características são:
                </Paragraph>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <img src={img01} alt="" className="card-img box-shadow-custom" />
                        </div>
                    </div>
                </div>
            </div>

            <ArrowProgress id="" />
            <hr />

            <div id="slide-12">

                <Paragraph>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <img className="card-img box-shadow-custom" src={img02} alt="STOP" />
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

            <NextPage id="next-page-07" currentPageId="espaco-confinado" nextPagePath="/movimentacao-de-cargas">
                Próxima Página
            </NextPage>
        </div>
    );
}

export default EspacoConfinado;