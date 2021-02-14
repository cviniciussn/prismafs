import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';

function Introducao() {

    // ---------------------------------------------------------------------------------------
    // $('#content').scrollTop(
    //     $('#teste').on('click', () => {
    //         setInterval(() => {
    //             $('.slide-02').addClass('animated-middle fadeIn').removeClass('display-none')
    //             $('.par-04').addClass('animated-middle fadeIn').removeClass('opacity-0');
    //         }, 1000);

    //         setInterval(() => {
    //             let $content = $('#content')
    //             $content.scrollTop(
    //                 $('.slide-02').offset().top - $content.offset().top + $content.scrollTop()
    //             );
    //         }, 500);
    //     })
    // );
    // ---------------------------------------------------------------------------------------

    $(window).on('load', function () {
        setInterval(() => {
            $('h1').addClass('animated-middle fadeInUp').removeClass('opacity-0');

            setInterval(() => {
                $('.par-01').addClass('animated-middle fadeIn').removeClass('opacity-0');

                setInterval(() => {
                    $('.par-02').addClass('animated-middle fadeIn').removeClass('opacity-0');

                    setInterval(() => {
                        $('.par-03').addClass('animated-middle fadeIn').removeClass('opacity-0');

                        setInterval(() => {
                            $('.slide-01').addClass('animated-middle fadeOutUp');

                            setInterval(() => {
                                $('.slide-01').addClass('display-none');

                                setInterval(() => {
                                    $('.par-04').addClass('animated-middle fadeInUp').removeClass('opacity-0');

                                    setInterval(() => {
                                        $('.par-04').addClass('animated-middle fadeOutUp').removeClass('opacity-0');

                                        setInterval(() => {
                                            $('.par-04').addClass('display-none');

                                            setInterval(() => {
                                                $('.item-05').addClass('animated-middle fadeInUp').removeClass('opacity-0');

                                                setInterval(() => {
                                                    $('#btn-01').addClass('animated-middle fadeInUp').removeClass('opacity-0');

                                                    setInterval(() => {

                                                    }, 500);
                                                }, 2000);
                                            }, 0);
                                        }, 1000);
                                    }, 5000);
                                }, 0);
                            }, 1000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    });

    return (
        <div id="introducao">
            <div id="" className="slide-01">
                <img src="" alt="Imagem1" />
                <img src="" alt="Imagem2" />

                <p className="par-01 opacity-0">
                    Imagens como essas nos chocam e podem gerar um certo receio em você, não é mesmo?
                </p>
                <p className="par-02 opacity-0">
                    Mas lembre-se que está ingressando em uma Empresa que tem a segurança como um valor.
                </p>
                <p className="par-03 opacity-0">
                    E que, sabendo verificar o risco oferecido pelas tarefas a serem executadas e obtendo os
                    cuidados necessários em sua realização, você pode mudar seu comportamento e evitar esses
                    e vários outros acidentes.
                </p>
            </div>
            <div className="slide-02">
                <p className="par-04 opacity-0">
                    Nesse módulo, você conhecerá <strong>outras informações</strong> sobre o Sistema de Saúde e Segurança do Trabalho da BSBIOS e,
                    assim, poderá <strong>se prevenir ainda mais</strong> de acidentes, incidentes, desvios e doenças ocupacionais.
                    </p>
                <p className="bem-vindo item-05 opacity-0">Bem-vindo ao curso<br />
                    <strong>"Saúde e Segurança do Trabalho:" Módulo 2</strong>
                </p>

                <Link to="/permissao-de-trabalho">
                    <button id="btn-01" type="button" className="btn btn-success opacity-0">Iniciar curso</button>
                </Link>
            </div>

        </div>
    );
}

export default Introducao;