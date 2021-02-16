import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
import { Link } from 'react-router-dom';

import img from '../../img/img01.jpg';

function PermissaoDeTrabalho() {

    $(document).ready(() => {

        setInterval(() => { $('.title').addClass('animated-middle fadeInDown').removeClass('opacity-0'); }, 1000 + 3000);

        setInterval(() => { $('#item-01-sl-03').addClass('animated-middle fadeInLeft').removeClass('opacity-0'); }, 4000 + 3000);

        setInterval(() => { $('#item-02-sl-03').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 9000 + 3000);

        setInterval(() => { $('#item-03-sl-03').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 14000 + 3000);

        setInterval(() => { $('#btn-01-sl-03').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 19000 + 3000);

        $('#btn-01-sl-03').on('click', () => {
            // setInterval(() => { $('#slide-03').addClass('animated-middle fadeOutUp'); }, 1000 + 3000);
            // setInterval(() => { $('#slide-03').addClass('display-none'); }, 3000 + 3000);
            setInterval(() => {
                // alert('hahah')
                $('#slide-04').removeClass('display-none');
                $('#item-04-sl-04').addClass('animated-middle fadeInUp').removeClass('opacity-0');
            }, 4000);
        });

        <div>

            {/* // setInterval(() => {
    
            //     setInterval(() => {
            //         $('#slide-04').removeClass('display-none')
            //         setInterval(() => {
            //         }, 500);
    
            //         setInterval(() => {
            //             $('#item-04-sl-04').addClass('animated-middle fadeInUp').removeClass('opacity-0');
    
            //         }, 1500);
            //     }, 0);
            // }, 500);
    
            // setInterval(() => {
            //     $('#item-05-sl-04').addClass('animated-middle fadeInUp').removeClass('opacity-0');
    
            // }, 1500);
            // setInterval(() => {
            //     $('#btn-01-sl-04').addClass('animated-middle fadeInUp').removeClass('opacity-0');
    
            //     $('#btn-01-sl-04').on('click', () => {
            //         // $('#slide-04').addClass('animated-middle fadeOutUp')
            //     });
    
            // }, 500); */}

        </div>

        $('#btn-dropdown-01').on('click', () => {
            $('#atv-list').slideDown();

        });

    })

    return (
        <div>
            <div className="title text-center opacity-0">Permissão de Trabalho</div>
            <hr />
            <div id="slide-03" className="">
                <div id="item-01-sl-03" className="container-fluid my-3 mb-3 opacity-0">
                    <div className="row g-0 flex-wrap-reverse align-items-center">
                        <div className="col-md-6">
                            <div className="par-05 card-body">
                                Algumas atividades necessitam de uma <strong>autorização antes da sua execução</strong> devido ao risco
                                que elas podem oferecer ao colaborador. Essa autorização é chamada <strong>Permissão de Trabalho (PT)</strong>.
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img id="img-01-sl-03" className="card-img" src={img} alt="Imagem3" />
                        </div>
                    </div>
                </div>

                <hr />
                {/* >>> */}

                <div className="container-fluid opacity-0 " id="item-02-sl-03" >
                    <div className="row">
                        <div className="col-md-12">
                            <p className="my-3">
                                O objetivo da Permissão de Trabalho é a <strong>prevenção de acidentes</strong> por meio da avaliação dos riscos de cada
                                atividade, <strong>de caráter diferenciado (não rotineiro)</strong>, a ser realizada dentro da propriedade da BSBIOS.
                            </p>
                        </div>
                    </div>
                </div>

                <hr />
                {/* >>> */}

                <div className="container-fluid opacity-0" id="item-03-sl-03" >
                    <div className="row g-0">
                        <div className="col-md-10">
                            <p className="my-3">
                                Com a Permissão de Trabalho, a Empresa garante que somente os colaboradores aptos ao desempenho da atividade
                                adentrem à área de risco e a realizem com segurança.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid text-center">
                    <button className="btn btn-custom my-3 opacity-0" id="btn-01-sl-03" type="button">Avançar</button>
                </div>

            </div>

            <div id="slide-04" className="display-none">



                <div id="item-04-sl-04" className="container-fluid opacity-0">
                    <div className="row">
                        <div className="col-md-10">
                            <p className="mt-3">
                                Conheça algumas <strong><a id="btn-dropdown-01">atividades que necessitam da Permissão de Trabalho</a></strong> para serem realizadas.
                            </p>

                            <small id="atv-list" className="box collapse">
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
                            </small>
                        </div>

                        <hr />

                    </div>
                </div>

                {/* >>> */}

                <p id="item-05-sl-04" className="opacity-0">
                    Em caso de dúvida se a atividade necessita de permissão, pergunte ao seu líder ou ao SESMT.
                </p>

                <button id="btn-01-sl-04" type="button" className="btn btn-custom opacity-0">Avançar</button>
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
                    <button id="btn-02" type="button" className="btn btn-custom opacity-0">Avançar</button>
                </Link>

            </div>


        </div>
    );
}

export default PermissaoDeTrabalho;