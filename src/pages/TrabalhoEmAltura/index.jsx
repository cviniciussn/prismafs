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

import NextPage from '../../components/NextPage';

import img1 from '../../img/img-01-sl-10.jpg';

function TrabalhoEmAltura() {

    

    return (
        <div id="trabalho-em-altura">
            <div className="title text-center opacity-0"><span className="icon"><i class="fas fa-sort-amount-up-alt"></i></span> Trabalho em Altura</div>
            <div className="slide-10">

                <ParagraphAndImg imgSrc={img1}>
                    Existem alguns <strong>requisitos mínimos</strong> para <strong>atividade em altura</strong>.
                </ParagraphAndImg>
                <hr />

                <small>Clique na área em destaque para conhecê-los.</small>

                <div className="container-fluid justify-content-center py-3 my-3">
                    <div className="col ml-15rem d-inline-flex">
                        <SquareCollapseText title="04" idCard="teste1">
                            Para realização de atividade de trabalho em altura, é obrigatório a verificação da
                            Pressão Arterial (PA) no início da jornada de trabalho.
                        </SquareCollapseText>
                    </div>
                    <div className="col ml-10rem">
                        <SquareCollapseText title="03" idCard="teste1">
                            Em caso de dúvida, consulte o SESMT ou facilitador da área.
                        </SquareCollapseText>
                    </div>
                    <div className="col ml-5rem">
                        <SquareCollapseText title="02" idCard="teste1">
                            Todo trabalho realizado acima de 2m é considerado trabalho em altura.
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
                    <div className="text-center">Esteja sempre com a Carteira de Verificação da Pressão Arterial.</div>
                </Alert>

            </div>

            <NextPage id="next-page-06" currentPageId="trabalho-em-altura" nextPagePath="/espaco-confinado">
                Próxima Página
            </NextPage>

        </div>
    );
}

export default TrabalhoEmAltura;