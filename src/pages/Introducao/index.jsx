import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
// import { Link, Redirect } from 'react-router-dom';
import img1 from '../../img/img01.jpg';
import img2 from '../../img/img02.jpg';

import ArrowProgress from "../../components/ArrowProgress";
import Paragraph from "../../components/Paragraph";

function Introducao() {

    // ---------------------------------------------------------------------------------------
    // $('#content').scrollTop($('.slide-02').offset().top - $('#content').offset().top + $('#content').scrollTop());
    // ---------------------------------------------------------------------------------------


    // $('#content').animate({
    //     scrollTop: $('').offset().top
    // }, 1000, function () {
    //     // Callback after animation
    //     // Must change focus!
    //     var $target = $(target);
    //     
    //     if ($target.is(":focus")) { // Checking if the target was focused
    //         return false;
    //     } else {
    //         $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
    //          // Set focus again
    //     };
    // });

    // $(window).on('load', () => {
    //     $('#content').animate({
    //         scrollTop: $('#item-02-sl-01').offset().top
    //     }, 1000);

    //     console.log($('#item-02-sl-01').offset().top)
    // })

    $(document).ready(function () {

        setInterval(() => { $('.title').addClass('animated-middle fadeInDown').removeClass('opacity-0'); }, 1000);

        setInterval(() => { $('#crsl-01-sl-01').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 2000);

        setInterval(() => { $('#item-01-sl-01').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 8000);

        setInterval(() => { $('#hr-01-sl-01').addClass('animated-middle fadeIn').removeClass('opacity-0'); }, 8500);

        setInterval(() => { $('#item-02-sl-01').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 12000);

        setInterval(() => { $('#hr-02-sl-01').addClass('animated-middle fadeIn').removeClass('opacity-0'); }, 12500);

        setInterval(() => { $('#item-03-sl-01').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 20000);

        setInterval(() => { $('#btn-01-sl-01').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 26000);

        $('#btn-01-sl-01').on('click', () => {

            setInterval(() => { $('#item-01-sl-02').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 1000);

            setInterval(() => { $('#hr-01-sl-02').addClass('animated-middle fadeIn').removeClass('opacity-0'); }, 1500);

            setInterval(() => { $('#item-02-sl-02').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 11000);

            setInterval(() => { $('#hr-02-sl-02').addClass('animated-middle fadeIn').removeClass('opacity-0'); }, 11500);

            setInterval(() => { $('#btn-02-sl-02').addClass('animated-middle slideInLeft').removeClass('opacity-0'); }, 14000);

        });

        $('#btn-02-sl-02').on('click', () => {
            $('#introducao').addClass('animated-middle slideOutLeft ');

            $("#header").addClass('animated-middle slideOutUp');
            $("#sidebar").addClass('animated-middle slideOutDown');

            $("#sidebar").addClass('animated-middle fadeOut');

            setInterval(() => { window.location.href = "/permissao-de-trabalho"; }, 1000);
            // setInterval(() => { $('#introducao').addClass('display-none'); }, 2000);
        });
    });

    return (
        <div id="introducao">

            <div id="" className="slide-01">

                <div className="container-fluid">

                    <div className="row justify-content-center">

                        <div className="col-md-6">

                            <div id="crsl-01-sl-01" class="carousel slide carousel-fade box-shadow-custom rounded-20px my-3 opacity-0" data-interval="10000" data-ride="carousel">
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

                <hr id="hr-01-sl-01" className="opacity-0" />

                <Paragraph id="item-02-sl-01">
                    Mas lembre-se que está ingressando em uma Empresa que tem a segurança como um valor.
                </Paragraph>


                <hr id="hr-02-sl-01" className="opacity-0" />


                <Paragraph id="item-03-sl-01">
                    E que, sabendo verificar o risco oferecido pelas tarefas a serem executadas e obtendo os
                    cuidados necessários em sua realização, você pode mudar seu comportamento e evitar esses
                    e vários outros acidentes.
                </Paragraph>


                <ArrowProgress id="btn-01-sl-01" />

                <hr />

            </div>

            <div className="slide-02">

                <div id="item-01-sl-02" className="container-fluid opacity-0">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <p className="my-3">
                                Nesse módulo, você conhecerá <strong>outras informações</strong> sobre o Sistema de Saúde e Segurança do Trabalho da BSBIOS e,
                                assim, poderá <strong>se prevenir ainda mais</strong> de acidentes, incidentes, desvios e doenças ocupacionais.
                            </p>
                        </div>
                    </div>
                </div>

                <hr id="hr-01-sl-02" className="opacity-0" />

                <div id="item-02-sl-02" className="container-fluid text-center opacity-0">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h1 className="my-3">
                                Bem-vindo ao curso<br />
                                <strong>"Saúde e Segurança do Trabalho:" Módulo 2</strong>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container-fluid text-center">
                    <button className="btn btn-custom my-3 opacity-0" id="btn-02-sl-02" type="button"><strong>Iniciar Curso</strong></button>
                </div>

            </div>

        </div >
    );
}

export default Introducao;