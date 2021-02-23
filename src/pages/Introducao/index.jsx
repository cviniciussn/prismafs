import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
// import { Link, Redirect } from 'react-router-dom';
import img1 from '../../img/img01.jpg';
import img2 from '../../img/img02.jpg';

import {
    fadeInDown,
    fadeOutDown,
    fadeInUp,
    fadeOutUp,
    fadeInLeft,
    fadeOutLeft,
    fadeInRight,
    fadeOutRight,
    addDisplayNone,
    rmvDisplayNone
} from '../../js/main';

import ArrowRegress from "../../components/ArrowRegress";
import ArrowProgress from "../../components/ArrowProgress";
import Paragraph from "../../components/Paragraph";
import NextPage from "../../components/NextPage";

// import 'jquery-smooth-scroll';

import { motion } from 'framer-motion';
import Topico from '../../components/Topico';
import { NavLink } from 'react-router-dom';

function Introducao() {

    $(document).ready(() => {

        $("#prog-section-01-sl-01").on("click", () => {

        })

    })

    return (
        <Topico id="introducao">
            <div id="" className="slide-01">

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div id="crsl-01-sl-01" class="carousel slide carousel-slide box-shadow-custom rounded my-3 " data-interval="5000" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#crsl-01-sl-01" data-slide-to="0" class="active"></li>
                                    <li data-target="#crsl-01-sl-01" data-slide-to="1"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img id="" className="rounded d-block w-100" src={img1} alt="Imagem1" />
                                    </div>
                                    <div class="carousel-item">
                                        <img id="" className="rounded d-block w-100" src={img2} alt="Imagem2" />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#crsl-01-sl-01" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Anterior</span>
                                </a>
                                <a class="carousel-control-next" href="#crsl-01-sl-01" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Próximo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Paragraph id="item-01-sl-01">
                    Imagens como essas nos chocam e podem gerar um certo receio em você, não é mesmo?
                </Paragraph>

                <ArrowProgress id="prog-section-01-sl-01" href="#item-03-sl-01" />

                <Paragraph id="item-02-sl-01">
                    Mas lembre-se que está ingressando em uma Empresa que tem a segurança como um valor.
                </Paragraph>

                <hr id="hr-02-sl-01" className="" />


                <Paragraph id="item-03-sl-01">
                    E que, sabendo verificar o risco oferecido pelas tarefas a serem executadas e obtendo os
                    cuidados necessários em sua realização, você pode mudar seu comportamento e evitar esses
                    e vários outros acidentes.
                    </Paragraph>

                <ArrowProgress id="prog-section-02-sl-01" />

            </div>

            <div className="slide-02">

                <ArrowRegress id="" />

                <Paragraph id="item-01-sl-02">
                    Nesse módulo, você conhecerá <strong>outras informações</strong> sobre o Sistema de Saúde e Segurança do Trabalho da BSBIOS e,
                        assim, poderá <strong>se prevenir ainda mais</strong> de acidentes, incidentes, desvios e doenças ocupacionais.
                    </Paragraph>

                <ArrowProgress id="" />

                <Paragraph id="item-02-sl-02">
                    <h1 className="text-center">
                        Bem-vindo ao curso<br />
                        <strong>"Saúde e Segurança do Trabalho:"
                            <br />Módulo 2</strong>
                    </h1>
                </Paragraph>

                <NavLink to="/permissao-de-trabalho">
                    <div className="container-fluid text-center">
                        <button className="btn btn-custom my-3 " type="button">
                            <strong>Iniciar Curso</strong>
                        </button>
                    </div>
                </NavLink>

            </div>

        </Topico >
    );
}

export default Introducao;