import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
// import { Link, Redirect } from 'react-router-dom';
import img1 from '../../img/img01.jpg';
import img2 from '../../img/img02.jpg';
import '../../js/main';
import { NavLink } from 'react-router-dom';


import ArrowRegress from "../../components/ArrowRegress";
import ArrowProgress from "../../components/ArrowProgress";
import Paragraph from "../../components/Paragraph";
import Collapse from "../../components/CardCollapsed";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


// import 'jquery-smooth-scroll';

import { motion } from 'framer-motion';
import Topico from '../../components/Topico';
import { Link } from 'react-router-dom';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';


$(document).ready(function () {
    $("#btn-1").on('click', function () {
        $('html, body').animate({
            scrollTop: $("#p2").offset().top
        }, 2000);
    });
});

function Introducao() {


    const ZoomInScrollOut = batch(FadeIn(), ZoomIn(), Sticky());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <div id="principal" className="scrolling-box">
            <Topico id="introducao">
                <div id="" className="slide-01">

                    <div className="">
                        <div className="row justify-content-center">
                            <div className="col-md-6 pb-8">
                                <div id="crsl-01-sl-01" className="carousel slide carousel-slide box-shadow-custom rounded my-5" data-interval="5000" data-ride="carousel" style={{ height: "80%", width: "160%", margin: "0 -180px" }}>
                                    <ol className="carousel-indicators">
                                        <li data-target="#crsl-01-sl-01" data-slide-to="0" className="active"></li>
                                        <li data-target="#crsl-01-sl-01" data-slide-to="1"></li>
                                    </ol>
                                    <div className="carousel-inner"  >
                                        <div className="carousel-item active">
                                            <img id="" className="rounded d-block w-100 " src={img1} alt="Imagem1" />
                                        </div>
                                        <div className="carousel-item">
                                            <img id="" className="rounded d-block w-100" src={img2} alt="Imagem2" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#crsl-01-sl-01" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Anterior</span>
                                    </a>
                                    <a className="carousel-control-next" href="#crsl-01-sl-01" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Próximo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <Paragraph id="item-01-sl-01" className="card card-body">
                        Imagens como essas nos chocam e podem gerar um certo receio em você, não é mesmo?
                 </Paragraph>


                    <div className="text-center p-0" >
                        <a id='btn-1' className="btn btn-custom my-3 w-30" type="button" data-toggle="collapse" href="#p1" role="button" aria-expanded="false" aria-controls="p1">
                            <i className="fas fa-angle-double-down"></i>
                        </a>
                    </div>

                    <div className="collapse animate__animated animate__slideInDown" id="p1">


                        <Paragraph id="item-02-sl-01">
                            Mas lembre-se que está ingressando em uma Empresa que tem a segurança como um valor.
                        </Paragraph>


                        <Paragraph id="item-03-sl-01">
                            E que, sabendo verificar o risco oferecido pelas tarefas a serem executadas e obtendo os
                            cuidados necessários em sua realização, você pode mudar seu comportamento e evitar esses
                            e vários outros acidentes.
                        </Paragraph>


                        <div className="text-center">
                            <a className="btn btn-custom my-3" type="button" data-toggle="collapse" href="#p2" role="button" aria-expanded="false" aria-controls="p2">
                                <i className="fas fa-angle-double-down"></i>
                            </a>
                        </div>
                    </div>


                    {/* <ArrowProgress id="prog-section-01-sl-01" href="#item-03-sl-01" /> */}

                    <div className="collapse animate__animated animate__slideInDown" id="p2">
                        <Paragraph id="item-01-sl-02">
                            Nesse módulo, você conhecerá <strong>outras informações</strong> sobre o Sistema de Saúde e Segurança do Trabalho da BSBIOS e,
                        assim, poderá <strong>se prevenir ainda mais</strong> de acidentes, incidentes, desvios e doenças ocupacionais.
                    </Paragraph>

                        <div className="text-center">
                            <a className="btn btn-custom my-3" type="button" data-toggle="collapse" href="#p3" role="button" aria-expanded="false" aria-controls="p3">
                                <i className="fas fa-angle-double-down"></i>
                            </a>
                        </div>
                    </div>

                    <hr id="hr-02-sl-01" className="" />



                    {/*                 <ArrowProgress id="prog-section-02-sl-01" />*/}
                </div>
                <div className="collapse animate__animated animate__slideInDown" id="p3">

                    <Paragraph id="item-02-sl-02">
                        <h1 className="text-center">
                            Bem-vindo ao curso<br />
                            <strong>"Saúde e Segurança do Trabalho:"
                            <br />Módulo 2</strong>
                        </h1>
                    </Paragraph>


                    <div className="slide-02">
                        <NavLink to="/permissao-de-trabalho/">
                            <div className="container-fluid text-center">
                                <button className="btn btn-custom my-3 " type="button">
                                    <strong>Iniciar Curso</strong>
                                </button>
                            </div>
                        </NavLink>

                    </div>
                </div>

            </Topico >
        </div>
    );
}


export default Introducao;