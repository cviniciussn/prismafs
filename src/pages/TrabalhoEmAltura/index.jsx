import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
import { Link, Redirect } from 'react-router-dom';
import Paragraph from '../../components/Paragraph';
import ParagraphAndImg from '../../components/ParagraphAndImg';
import Card from '../../components/Card';
import Alert from '../../components/Alert';
import ArrowProgress from '../../components/ArrowProgress';
import SquareCollapseText from '../../components/SquareCollapseText';

import img1 from '../../img/img-01-sl-10.jpg';

function TrabalhoEmAltura() {

    $(window).on('load', function () {
        $(document).ready()
        $("[data-toggle='toggle']").click(function () {
            var selector = $(this).data("target");
            $(selector).toggleClass('in');
        });
    });

    return (
        <div>
            <div className="title text-center opacity-0"><span className="icon"><i class="fas fa-sort-amount-up-alt"></i></span> Trabalho em Altura</div>
            <div className="slide-10">

                <ParagraphAndImg imgSrc={img1}>
                    Existem alguns <strong>requisitos mínimos</strong> para <strong>atividade em altura</strong>.
                </ParagraphAndImg>
                <hr />

                <small>Clique na área em destaque para conhecê-los.</small>

                <div className="container-fluid">

                    <div className="col ml-20rem ml-8rem">
                        <SquareCollapseText title="05" idCard="teste1">
                            Somente colaboradores treinados, autorizados e aptos podem realizar atividade em altura.
                        </SquareCollapseText>
                    </div>
                    <div className="col ml-15rem">
                        <SquareCollapseText title="04" idCard="teste1">
                            Somente colaboradores treinados, autorizados e aptos podem realizar atividade em altura.
                        </SquareCollapseText>
                    </div>
                    <div className="col ml-10rem">
                        <SquareCollapseText title="03" idCard="teste1">
                            Somente colaboradores treinados, autorizados e aptos podem realizar atividade em altura.
                        </SquareCollapseText>
                    </div>
                    <div className="col ml-5rem">
                        <SquareCollapseText title="02" idCard="teste1">
                            Somente colaboradores treinados, autorizados e aptos podem realizar atividade em altura.
                        </SquareCollapseText>
                    </div>
                    <div className="col">
                        <SquareCollapseText title="01" idCard="teste1">
                            Somente colaboradores treinados, autorizados e aptos podem realizar atividade em altura.
                        </SquareCollapseText>
                    </div>

                </div>


                <ArrowProgress />
                <hr />

                <Alert id="">
                    <h2 className="text-center">Atenção!</h2>
                    Esteja sempre com a Carteira de Verificação da Pressão Arterial.
                </Alert>
            </div>

        </div>
    );
}

export default TrabalhoEmAltura;