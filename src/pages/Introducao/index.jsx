import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
// import { Link, Redirect } from 'react-router-dom';
import img1 from '../../img/img01.jpg';
import img2 from '../../img/img02.jpg';


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

        setInterval(() => { $('.title').addClass('animated-middle fadeInDown').removeClass('opacity-0'); }, 1000 - 2000);

        setInterval(() => { $('#img-01-sl-01').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 5000 - 2000);

        setInterval(() => { $('#img-02-sl-01').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 8000 - 2000);

        setInterval(() => { $('#item-01-sl-01').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 12000 - 2000);

        setInterval(() => { $('#hr-01-sl-01').addClass('animated-middle fadeIn').removeClass('opacity-0'); }, 12500 - 2000);

        setInterval(() => { $('#item-02-sl-01').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 17000 - 2000);

        setInterval(() => { $('#hr-02-sl-01').addClass('animated-middle fadeIn').removeClass('opacity-0'); }, 17500 - 2000);

        setInterval(() => { $('#item-03-sl-01').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 22000 - 2000);

        setInterval(() => { $('#btn-01-sl-01').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 28000 - 2000);

        $('#btn-01-sl-01').on('click', () => {

            setInterval(() => { $('#item-01-sl-02').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 2000 - 2000);

            setInterval(() => { $('#hr-01-sl-02').addClass('animated-middle fadeIn').removeClass('opacity-0'); }, 2500 - 2000);

            setInterval(() => { $('#item-02-sl-02').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 12000 - 2000);

            setInterval(() => { $('#hr-02-sl-02').addClass('animated-middle fadeIn').removeClass('opacity-0'); }, 12500 - 2000);

            setInterval(() => { $('#btn-02-sl-02').addClass('animated-middle slideInLeft').removeClass('opacity-0'); }, 15000 - 2000);

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
                        <div className="col-md-5">
                            <img id="img-01-sl-01" className="card-img my-3 opacity-0" src={img1} alt="Imagem1" />
                        </div>
                        <div className="col-md-5">
                            <img id="img-02-sl-01" className="card-img my-3 opacity-0" src={img2} alt="Imagem2" />
                        </div>
                    </div>

                    <div id="item-01-sl-01" className="opacity-0">
                        <div className="row justify-content-center">
                            <div className=" text-center col-md-10">
                                <p className="text-center my-3">
                                    Imagens como essas nos chocam e podem gerar um certo receio em você, não é mesmo?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr id="hr-01-sl-01" className="opacity-0" />

                <div id="item-02-sl-01" className="container-fluid opacity-0">
                    <div className="row">
                        <div className="col-md-10">
                            <p className="my-3">
                                Mas lembre-se que está ingressando em uma Empresa que tem a segurança como um valor.
                            </p>
                        </div>
                    </div>
                </div>

                <hr id="hr-02-sl-01" className="opacity-0" />

                <div id="item-03-sl-01" className="container-fluid opacity-0">
                    <div className="row">
                        <div className="col-md-10">
                            <p className="my-3">
                                E que, sabendo verificar o risco oferecido pelas tarefas a serem executadas e obtendo os
                                cuidados necessários em sua realização, você pode mudar seu comportamento e evitar esses
                                e vários outros acidentes.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid text-center">
                    <span className="green">
                        <i className="fas fa-angle-double-down my-3 opacity-0" id="btn-01-sl-01" type="button"></i>
                    </span>
                    {/* <a className="btn btn-custom" width="300"  >Avançar</a> */}
                </div>

                <hr/>

            </div>

            <div className="slide-02">

                <div id="item-01-sl-02" className="container-fluid opacity-0">
                    <div className="row">
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
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="my-3">
                                Bem-vindo ao curso<br />
                                <strong>"Saúde e Segurança do Trabalho:" Módulo 2</strong>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container-fluid text-center">
                    <button className="btn btn-custom my-3 opacity-0" width="300" id="btn-02-sl-02" type="button">Iniciar Curso</button>
                </div>

            </div>

        </div >
    );
}

export default Introducao;