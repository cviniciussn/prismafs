import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
import { Link } from 'react-router-dom';

import ArrowProgress from "../../components/ArrowProgress";
import Paragraph from "../../components/Paragraph";
import ParagraphAndImg from "../../components/ParagraphAndImg";
import Alert from "../../components/Alert";
import CircleCollapse from "../../components/CircleCollapse";
import CardCollapsed from "../../components/CardCollapsed";
import Modal from "../../components/Modal";


import img from '../../img/img01.jpg';
import carteiraVrf from '../../img/carteira-verificacao.jpg'

function PermissaoDeTrabalho() {

    $(window).on('load', () => {

        $(document).ready(() => {

            setInterval(() => { $('.title').addClass('animated-middle fadeInDown').removeClass('opacity-0'); }, 1000);

            setInterval(() => { $('#item-01-sl-03').addClass('animated-middle fadeInLeft').removeClass('opacity-0'); }, 2000);

            setInterval(() => { $('#item-02-sl-03').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 9000);

            setInterval(() => { $('#item-03-sl-03').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 14000);

            setInterval(() => { $('#btn-01-sl-03').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 16000);

            $('#btn-01-sl-03').on('click', () => {
                setInterval(() => {
                    setInterval(() => { $('#slide-04').removeClass('display-none'); }, 0);

                    setInterval(() => { $('#item-01-sl-04').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 500);

                    $('#pointer-01-sl-04').on('click', () => {

                        setInterval(() => { $('#btn-01-sl-04').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 5000);

                        $('#btn-01-sl-04').on('click', () => {

                            setInterval(() => {
                                $('#item-02-sl-04').addClass('animated-middle fadeInUp').removeClass('opacity-0');
                            }, 1000);

                            setInterval(() => { $('#btn-02-sl-04').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 3000);
                            $('#btn-02-sl-04').on('click', () => {

                                setInterval(() => { $('#item-01-sl-05').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 1000);

                                setInterval(() => { $('#item-02-sl-05').addClass('animated-middle fadeInUp').removeClass('opacity-0'); }, 2000);
                            });
                        });
                    });
                }, 0);
            });
        });
    });

    return (
        <div>
            <div className="title text-center opacity-0"><span className="icon"><i className="fas fa-clipboard-check"></i></span> Permissão de Trabalho</div>

            <hr />

            <div id="slide-03" className="">

                <ParagraphAndImg
                    idItem="item-01-sl-03"
                    idParagraph=""
                    idImg="img-01-sl-03"
                    imgSrc={img}
                >
                    Algumas atividades necessitam de uma <strong>autorização antes da sua execução</strong> devido ao risco
                    que elas podem oferecer ao colaborador. Essa autorização é chamada <strong>Permissão de Trabalho (PT)</strong>.
                </ParagraphAndImg>

                <hr />
                {/* >>> */}

                <Paragraph id="item-02-sl-03">
                    O objetivo da Permissão de Trabalho é a <strong>prevenção de acidentes</strong> por meio da avaliação dos
                    riscos de cada atividade, <strong>de caráter diferenciado (não rotineiro)</strong>, a ser realizada dentro
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

                <div className="container-fluid">
                    <Paragraph id="item-01-sl-04">
                        Conheça algumas <strong><a className="click" id="pointer-01-sl-04" data-toggle="collapse" data-target="#list-01-sl-04" aria-expanded="false">atividades que necessitam da Permissão de Trabalho</a></strong> para serem realizadas.
                        <br />
                        <small><strong><i>(Clique na área em destaque)</i></strong></small>
                    </Paragraph>

                    <CardCollapsed id="list-01-sl-04">
                        <small>
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
                    </CardCollapsed>
                </div>

                <ArrowProgress id="btn-01-sl-04" />

                <hr />
                {/* >>> */}


                <Alert id="item-02-sl-04">
                    Em caso de dúvida se a atividade necessita de permissão, pergunte ao seu líder ou ao SESMT.
                </Alert>


                <ArrowProgress id="btn-02-sl-04" />
                <hr />

            </div>

            <div id="slide-05" className="">

                <Paragraph id="item-01-sl-05">
                    Existem <strong><a className="click" id="list-01-sl-04" data-toggle="collapse" data-target="#item-01-colpse-sl-05">três tipos</a></strong> de Permissão de Trabalho:
                                <br />
                    <small><strong><i>(Clique na área em destaque)</i></strong></small>

                    <div id="item-01-colpse-sl-05">
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
                </Paragraph>

                <hr />

                <Alert id="item-02-sl-05">
                    <h2 className="text-center">Atenção</h2>
                    <p>
                        A liberação da Permissão de Trabalho para altura e espaço confinado depende de duas situações:
                        <ol>
                            <li>
                                Apresentação da <span><strong><u><i><a className="click" data-toggle="modal" data-target="#modal-01-sl-05">Carteira de Verificação da Pressão Arterial</a></i></u></strong></span>.
                            </li>
                            <li>
                                Ambiente de trabalho totalmente preparado para o início da atividade.
                            </li>
                        </ol>
                    </p>
                </Alert>
                

            </div>

            <Link to="/bloqueio-eletromecano">
                <button id="btn-02" type="button" className="btn btn-custom opacity-0">Avançar</button>
            </Link>

        </div>


    );
}

export default PermissaoDeTrabalho;