import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
import { Link } from 'react-router-dom';

import ArrowProgress from "../../components/ArrowProgress";
import Paragraph from "../../components/Paragraph";
import Alert from "../../components/Alert";
import CircleCollapse from "../../components/CircleCollapse";

import img from '../../img/img01.jpg';

function PermissaoDeTrabalho() {


    $(document).ready(() => {

        $('.circle').on('click', () => {
            $('.card-of-circle').toggleClass('active');
        })


        setInterval(() => { $('.title').addClass('animated-middle fadeInDown').removeClass('opacity-0'); }, 1000);

        setInterval(() => { $('#item-01-sl-03').addClass('animated-middle fadeInLeft').removeClass('opacity-0'); }, 2000);

        setInterval(() => { $('#item-02-sl-03').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 9000);

        setInterval(() => { $('#item-03-sl-03').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 14000);

        setInterval(() => { $('#btn-01-sl-03').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 16000);

        $('#btn-01-sl-03').on('click', () => {
            setInterval(() => {
                setInterval(() => { $('#slide-04').removeClass('display-none'); }, 0);

                setInterval(() => { $('#item-01-sl-04').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 500);

                $('#atv-list').on('click', () => {

                    setInterval(() => { $('#btn-01-sl-04').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 5000);

                    $('#btn-01-sl-04').on('click', () => {
                        setInterval(() => {
                            $('#item-02-sl-04').addClass('animated-middle fadeInUp').removeClass('opacity-0');
                        }, 4000);
                    });








                });
            }, 0);
        });
    });

    return (
        <div>
            <div className="title text-center opacity-0"><span className="icon"><i className="fas fa-clipboard-check"></i></span> Permissão de Trabalho</div>

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


                <Paragraph id="item-02-sl-03">
                    O objetivo da Permissão de Trabalho é a <strong>prevenção de acidentes</strong> por meio da avaliação dos
                    riscos de cadaatividade, <strong>de caráter diferenciado (não rotineiro)</strong>, a ser realizada dentro
                    da propriedade da BSBIOS.
                </Paragraph>

                <hr />
                {/* >>> */}


                <Paragraph id="item-03-sl-03">
                    Com a Permissão de Trabalho, a Empresa garante que somente os colaboradores aptos ao desempenho da atividade
                    adentrem à área de risco e a realizem com segurança.
                </Paragraph>

                <ArrowProgress id="btn-01-sl-03" />

                <hr />

            </div>

            <div id="slide-04" className="display-none">

                <div id="item-01-sl-04" className="container-fluid py-3 opacity-0">

                    <div className="row">
                        <div className="col-md-10 mt-3">
                            <p>
                                Conheça algumas <strong><a className="click" id="atv-list" data-toggle="collapse" data-target="#list-01-sl-04">atividades que necessitam da Permissão de Trabalho</a></strong> para serem realizadas.
                                <br />
                                <small><strong><i>(Clique na área em destaque)</i></strong></small>
                            </p>
                        </div>
                    </div>
                    <small className="collapse" id="list-01-sl-04">
                        <div className="card-body">
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
                    </small>
                </div>

                <hr />


                <ArrowProgress id="btn-01-sl-04" />


                <hr />
                {/* >>> */}


                <Alert id="item-02-sl-04">
                    Em caso de dúvida se a atividade necessita de permissão, pergunte ao seu líder ou ao SESMT.
                </Alert>

                <hr />
            </div>

            <div id="slide-05" className="">

                <div id="item-01-sl-05" className="">
                    <div className="row">
                        <div className="col-md-10 mt-3">
                            <p>
                                Existem <strong><a className="click" id="atv-list" data-toggle="collapse" data-target="#list-01-sl-04">três tipos</a></strong> de Permissão de Trabalho:
                                <br />
                                <small><strong><i>(Clique na área em destaque)</i></strong></small>
                            </p>
                        </div>
                    </div>


                    <CircleCollapse
                        id=""
                        title="PT"
                        classNameRow="row d-flex flex-row align-items-center"
                        classNameButton="square btn btn-primary"
                        classNameBtnCircle="circle rounded-circle align-items-center"
                    >

                        Documento utilizado para avaliar e aprovar a realização das seguintes atividades:
                        trabalho em altura, com químicos, içamento de carga/escavações, a quente e com risco.
                    </CircleCollapse>

                    <CircleCollapse
                        id=""
                        title="PET"
                        classNameRow="row d-flex flex-row align-items-center"
                        classNameButton="square btn btn-warning"
                        classNameBtnCircle="circle rounded-circle align-items-center"
                    >

                        Documento utilizado para avaliar e aprovar a realização das seguintes atividades:
                        trabalho em altura, com químicos, içamento de carga/escavações, a quente e com risco.
                    </CircleCollapse>

                    <CircleCollapse
                        id=""
                        title="PTE"
                        classNameRow="row d-flex flex-row align-items-center"
                        classNameButton="square btn btn-danger"
                        classNameBtnCircle="circle rounded-circle align-items-center"
                    >

                        Documento utilizado para avaliar e aprovar a realização das seguintes atividades:
                        trabalho em altura, com químicos, içamento de carga/escavações, a quente e com risco.
                    </CircleCollapse>


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


    );
}

export default PermissaoDeTrabalho;