import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
import { Link } from 'react-router-dom';

import img from '../../img/img01.jpg';

function PermissaoDeTrabalho() {

    $(document).ready(() => {

        setInterval(() => { $('h1').addClass('animated-middle fadeInDown').removeClass('opacity-0'); }, 1000);

        setInterval(() => {
            $('#item-01-sl-03').addClass('animated-middle fadeInUp').removeClass('opacity-0');

            setInterval(() => {
                $('#item-02-sl-03').addClass('animated-middle fadeInUp').removeClass('opacity-0');

                setInterval(() => {
                    $('#item-03-sl-03').addClass('animated-middle fadeInUp').removeClass('opacity-0');

                    setInterval(() => {
                        $('#btn-01-sl-03').addClass('animated-middle fadeInUp').removeClass('opacity-0');

                        $('#btn-01-sl-03').on('click', () => {

                            setInterval(() => {
                                // $('#slide-03').addClass('animated-middle fadeOutUp');
                                // setInterval(() => { $('#slide-03').addClass('display-none'); }, 1000);

                                setInterval(() => {
                                    $('#slide-04').removeClass('display-none')
                                    setInterval(() => {
                                    }, 500);

                                    setInterval(() => {
                                        $('#item-04-sl-04').addClass('animated-middle fadeInUp').removeClass('opacity-0');

                                        setInterval(() => {
                                            $('#item-05-sl-04').addClass('animated-middle fadeInUp').removeClass('opacity-0');

                                            setInterval(() => {
                                                $('#btn-01-sl-04').addClass('animated-middle fadeInUp').removeClass('opacity-0');

                                                $('#btn-01-sl-04').on('click', () => {
                                                    // $('#slide-04').addClass('animated-middle fadeOutUp')
                                                });

                                            }, 500);
                                        }, 1500);
                                    }, 1500);
                                }, 0);
                            }, 500);
                        });

                    }, 500);
                }, 500);
            }, 500);
        }, 500);

        $('#atv-01').on('click', () => {
            $('#atv-list').slideToggle();
        });

    })

    return (
        <div>
            <h1 className="topic text-center opacity-0">Permissão de Trabalho</h1>
            <div id="slide-03" className="">

                <div id="item-01-sl-03" className="d-flex flex-wrap justify-content-center align-items-center opacity-0">
                    <p className="par-05 w-50 m-2">
                        Algumas atividades necessitam de uma <strong>autorização antes da sua execução</strong> devido ao risco
                        que elas podem oferecer ao colaborador. Essa autorização é chamada <strong>Permissão de Trabalho (PT)</strong>.
                    </p>
                    <img src={img} alt="Imagem3" className="img m-2" />
                </div>

                {/* >>> */}

                <p id="item-02-sl-03" className="opacity-0">
                    O objetivo da Permissão de Trabalho é a <strong>prevenção de acidentes</strong> por meio da avaliação dos riscos de cada
                atividade, <strong>de caráter diferenciado (não rotineiro)</strong>, a ser realizada dentro da propriedade da BSBIOS.
                </p>

                {/* >>> */}

                <p id="item-03-sl-03" className="opacity-0">
                    Com a Permissão de Trabalho, a Empresa garante que somente os colaboradores aptos ao desempenho da atividade
                    adentrem à área de risco e a realizem com segurança.
                </p>

                <button id="btn-01-sl-03" type="button" className="btn btn-success opacity-0">Avançar</button>
            </div>

            <div id="slide-04" className="display-none">

                <div id="item-04-sl-04" className="opacity-0">
                    <p>
                        Conheça algumas <strong><a id="atv-01">atividades que necessitam da Permissão de Trabalho</a></strong> para serem realizadas.
                    </p>
                    <div id="atv-list" className="">
                        <ul>
                            <li>
                                <i className="fas fa-check"></i> Trabalhos a quente (que geram fagulhas)
                            </li>
                            <li>
                                <i className="fas fa-check"></i> Manuseio de produtos químicos
                            </li>
                            <li>
                                <i className="fas fa-check"></i> Intervenção em equipamentos
                            </li>
                            <li>
                                <i className="fas fa-check"></i> Manutenções de qualquer tipo
                            </li>
                            <li>
                                <i className="fas fa-check"></i> Trabalhos em altura
                            </li>
                            <li>
                                <i className="fas fa-check"></i> Trabalhos em espaços confinados
                            </li>
                            <li>
                                <i className="fas fa-check"></i> Movimentações de materiais com guindastes
                            </li>
                            <li>
                                <i className="fas fa-check"></i> Escavações
                            </li>
                            <li>
                                <i className="fas fa-check"></i> Trabalhos com eletricidade
                            </li>
                        </ul>
                    </div>
                </div>

                {/* >>> */}

                <p id="item-05-sl-04" className="opacity-0">
                    Em caso de dúvida se a atividade necessita de permissão, pergunte ao seu líder ou ao SESMT.
                </p>

                <button id="btn-01-sl-04" type="button" className="btn btn-success opacity-0">Avançar</button>
            </div>

            <div id="slide-05" className="display-none">

                <div id="item-01-sl-05" className="opacity-0">
                    <p>
                        Existem três tipos de Permissão de Trabalho:
                    </p>
                    <div>
                        <div>PT</div>
                        <div>Descrição...</div>
                    </div>
                    <div>
                        <div>PT</div>
                        <div>Descrição...</div>
                    </div>
                    <div>
                        <div>PT</div>
                        <div>Descrição...</div>
                    </div>
                </div>

                <div id="item-02-sl-05" className="opacity-0">
                    <h3>Atenção</h3>
                    <p>
                        A liberação da Permissão de Trabalho para altura e espaço confinado depende de duas situações:
                    </p>
                    <ol>
                        <li>
                            Apresentação da <strong><u><i>Carteira de Verificação da Pressão Arterial</i></u></strong>.
                        </li>
                        <li>
                            Ambiente de trabalho totalmente preparado para o início da atividade.
                        </li>
                    </ol>
                </div>

                <Link to="/bloqueio-eletromecano">
                    <button id="btn-02" type="button" className="btn btn-success opacity-0">Avançar</button>
                </Link>

            </div>


        </div>
    );
}

export default PermissaoDeTrabalho;