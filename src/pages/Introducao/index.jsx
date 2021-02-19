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
} from '../../js/main'

import ArrowRegress from "../../components/ArrowRegress";
import ArrowProgress from "../../components/ArrowProgress";
import Paragraph from "../../components/Paragraph";
import NextPage from "../../components/NextPage";

import 'jquery-smooth-scroll';

function Introducao() {

    $(window).on('load', () => {


        // fadeInUp('#crsl-01-sl-01', 1)

        // fadeInUp('#item-01-sl-01', 4)

        // fadeInDown('#prog-section-01-sl-01', 5)

        // $('#prog-section-01-sl-01').on('click', () => {

            // fadeOutUp('#section-01', 0)
            // addDisplayNone('#section-01', 1)

            // rmvDisplayNone('#section-02', 1)

        //     fadeInUp('#regr-section-02-sl-01', 2)

        //     fadeInUp('#item-02-sl-01', 4)

        //     fadeInUp('#hr-02-sl-01', 4.5)

        //     fadeInUp('#item-03-sl-01', 5)

        //     fadeInDown('#prog-section-02-sl-01', 6)

        // });

        // $('#prog-section-02-sl-01').on('click', () => {


        //     setInterval(() => { $('#item-01-sl-02').addClass('animated-middle fadeInUp').removeClass(''); }, 1000);

        //     setInterval(() => { $('#hr-01-sl-02').addClass('animated-middle fadeIn').removeClass(''); }, 1500);

        //     setInterval(() => { $('#item-02-sl-02').addClass('animated-middle fadeInUp').removeClass(''); }, 11000);

        //     setInterval(() => { $('#hr-02-sl-02').addClass('animated-middle fadeIn').removeClass(''); }, 11500);

        //     setInterval(() => { $('#btn-02-sl-02').addClass('animated-middle slideInLeft').removeClass(''); }, 14000);

        // });

        // $('#btn-02-sl-02').on('click', () => {
        //     fadeOutLeft("#introducao", 0)

        //     $("#header").addClass('animated-middle slideOutUp');
        //     $("#sidebar").addClass('animated-middle slideOutDown');

        //     $("#sidebar").addClass('animated-middle fadeOut');

        //     setInterval(() => { window.location.href = "/permissao-de-trabalho"; }, 2000);
        //     // setInterval(() => { $('#introducao').addClass('display-none'); }, 2000);
        // });

    })

    return (
        <div id="introducao">

            <div id="" className="slide-01">

                <section id="section-01">

                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div id="crsl-01-sl-01" class="carousel slide carousel-fade box-shadow-custom rounded-20px my-3 " data-interval="10000" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#crsl-01-sl-01" data-slide-to="0" class="active"></li>
                                        <li data-target="#crsl-01-sl-01" data-slide-to="1"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img id="" className="rounded-20px d-block w-100" src={img1} alt="Imagem1" />
                                            {/* <img class="d-block w-100" src={img1} alt="Primeiro Slide" /> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img id="" className="rounded-20px d-block w-100" src={img2} alt="Imagem2" />
                                            {/* <img class="d-block w-100" src={img2} alt="Segundo Slide" /> */}
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

                    <ArrowProgress id="prog-section-01-sl-01" />

                </section>

                <section id="section-02" className="">

                    <ArrowRegress id="regr-section-02-sl-01" />

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

                </section>

            </div>

            <div className="slide-02">

                <section id="section-03" className="">

                    <ArrowRegress id="" />

                    <Paragraph id="item-01-sl-02">
                        Nesse módulo, você conhecerá <strong>outras informações</strong> sobre o Sistema de Saúde e Segurança do Trabalho da BSBIOS e,
                        assim, poderá <strong>se prevenir ainda mais</strong> de acidentes, incidentes, desvios e doenças ocupacionais.
                    </Paragraph>

                    <ArrowProgress id="" />

                </section>

                <section id="section-04" className="">

                    <ArrowRegress id="" />

                    <Paragraph id="item-02-sl-02">
                        <h1 className="text-center my-3">
                            Bem-vindo ao curso<br />
                            <strong>"Saúde e Segurança do Trabalho:" Módulo 2</strong>
                        </h1>
                    </Paragraph>

                    <NextPage
                        id="btn-02-sl-02"
                        currentPageId="introducao"
                        nextPagePath="/permissao-de-trabalho"
                    >
                        Iniciar Curso
                    </NextPage>

                </section>

            </div>

        </div >
    );
}

export default Introducao;