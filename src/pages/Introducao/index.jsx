import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
import { Link, Redirect } from 'react-router-dom';
import img1 from '../../img/img01.jpg';
import img2 from '../../img/img02.jpg';


function Introducao() {

    // ---------------------------------------------------------------------------------------
    // $('#content').scrollTop($('.slide-02').offset().top - $('#content').offset().top + $('#content').scrollTop());
    // ---------------------------------------------------------------------------------------

    $(document).ready(function () {
        setInterval(() => { $('h1').addClass('animated-middle fadeInDown').removeClass('opacity-0'); }, 1000);

        setInterval(() => { $('#img-01-sl-01').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 5000);

        setInterval(() => { 
            $('#img-02-sl-01').addClass('animated-middle fadeInUp').removeClass('opacity-0'); 
        }, 8000);
        
        setInterval(() => { 
            $('.par-01').addClass('animated-middle fadeInUp').removeClass('opacity-0'); 
            // $('#content').animate({scrollTop: $('.par-01').offset().top}, 2000);
        }, 12000);
        
        setInterval(() => {
            // $('#content').animate({scrollTop: $('.par-02').offset().top}, 2000);
        }, 16000);
        setInterval(() => {$('.par-02').addClass('animated-middle fadeInUp').removeClass('opacity-0');}, 17000);
        
        setInterval(() => {
            // $('#content').animate({scrollTop: $('.par-03').offset().top}, 2000);
        }, 21000);
        setInterval(() => { $('.par-03').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 22000);


        setInterval(() => {
            $('#btn-01').addClass('animated-middle fadeInUp').removeClass('opacity-0');
        }, 28000);

        $('#btn-01').on('click', () => {

            setInterval(() => {
                $('.slide-01').addClass('animated-middle fadeOutUp');

                setInterval(() => { $('.slide-01').addClass('display-none'); }, 1000);
            }, 1000);

            setInterval(() => { $('.par-04').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 2000);
            setInterval(() => { $('.par-04').addClass('animated-middle fadeOutUp').removeClass('opacity-0'); }, 11000);
            setInterval(() => { $('.par-04').addClass('display-none'); }, 12000);

            setInterval(() => { $('.item-05').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 12000);

            setInterval(() => {$('#btn-02').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 15000);
        });

        $('#btn-02').on('click', () => {
            $('#introducao').addClass('animated-middle slideOutLeft ');
            
            setInterval(() => {window.location.href="/permissao-de-trabalho";}, 1000);
            // setInterval(() => { $('#introducao').addClass('display-none'); }, 2000);
        });
    });

    return (
        <div id="introducao">
            <div id="" className="slide-01">
                <div className="d-flex flex-wrap justify-content-around">

                    <img id="img-01-sl-01" className="m-3 img opacity-0" src={img1} alt="Imagem1" />
                    <img id="img-02-sl-01" className="m-3 img opacity-0" src={img2} alt="Imagem2" />
                </div>

                <p className="par-01 text-center opacity-0">
                    Imagens como essas nos chocam e podem gerar um certo receio em você, não é mesmo?
                </p>
                <p className="par-02 text-center opacity-0">
                    Mas lembre-se que está ingressando em uma Empresa que tem a segurança como um valor.
                </p>
                <p className="par-03 text-center opacity-0">
                    E que, sabendo verificar o risco oferecido pelas tarefas a serem executadas e obtendo os
                    cuidados necessários em sua realização, você pode mudar seu comportamento e evitar esses
                    e vários outros acidentes.
                </p>

                <button id="btn-01" type="button" className="btn btn-success opacity-0">Clique</button>
            </div>
            <div className="slide-02">
                <p className="par-04 text-center opacity-0">
                    Nesse módulo, você conhecerá <strong>outras informações</strong> sobre o Sistema de Saúde e Segurança do Trabalho da BSBIOS e,
                    assim, poderá <strong>se prevenir ainda mais</strong> de acidentes, incidentes, desvios e doenças ocupacionais.
                    </p>
                <p className="bem-vindo item-05 text-center opacity-0">Bem-vindo ao curso<br />
                    <strong>"Saúde e Segurança do Trabalho:" Módulo 2</strong>
                </p>

                <div className="text-center">
                    {/* <Link to="/permissao-de-trabalho"> */}
                    <button id="btn-02" type="button" className="btn btn-success opacity-0">Iniciar curso</button>
                    {/* </Link> */}
                </div>
            </div>

        </div>
    );
}

export default Introducao;