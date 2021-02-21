import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
import { Link, NavLink, Redirect } from 'react-router-dom';

import ArrowProgress from "../../components/ArrowProgress";
import Paragraph from "../../components/Paragraph";
import Alert from "../../components/Alert";
import ButtonCollapseImg from "../../components/ButtonCollapseImg";
import Topico from '../../components/Topico';

import img01 from '../../img/img-01-sl-06.jpg';
import img02 from '../../img/img-02-sl-06.jpg';
import img03 from '../../img/img-03-sl-06.jpg';

function BloqueioEletromecanico() {
    return (
        <Topico id="bloqueio-eletromecanico">
            <div className="title text-center opacity-0"><span className="icon"><i class="fas fa-lock"></i></span> Bloqueio Eletromecânico</div>

            <div className="slide-06">

                <Paragraph id="item-01-sl-06">
                    A Política de Bloqueio Eletromecânico da BSBIOS estabelece que:
                </Paragraph>

                <Alert id="item-02-sl-06">
                    <strong>ANTES</strong> de executar qualquer intervenção, <strong>TODOS</strong> devem realizar bloqueio e identificação
                    de <strong>TODAS</strong> as energias perigosas de <strong>QUALQUER</strong> equipamento.
                </Alert>

                <ArrowProgress id="btn-01-sl-06" />
                <hr />

                <div className="container-fluid">
                    <div className="row">

                        <ButtonCollapseImg title="Bloqueio Elétrico" idBtn="" idImg="teste1" imgSrc={img01} />
                        <ButtonCollapseImg title="Bloqueio Mecânico" idBtn="" idImg="teste2" imgSrc={img02} />
                        <ButtonCollapseImg title="Cartão de Bloqueio" idBtn="" idImg="teste3" imgSrc={img03} />

                    </div>
                </div>
            </div>

            <ArrowProgress />
            <hr />

            <div className='slide-07'>

                {/* SLIDE 7 */}

                <Paragraph>
                    Chegou a hora de refletir...
                </Paragraph>

                <Paragraph>
                    Mas quem será o responsável por solicitar o bloqueio e identificar as energias perigosas dos equipamentos?
                </Paragraph>

                <ArrowProgress />
                <hr />

                <Alert title="Fique atento!" idH4="teste2">
                    O bloqueio e a identificação das energias perigosas do equipamento em que será realizado o trabalho
                    devem ser realizados por <strong>todos os colaboradores, terceiros, temporários e prestadores de
                    serviço que irão realizar a atividade.</strong>
                </Alert>

                <NavLink to="/trabalho-com-eletricidade">
                    <div className="container-fluid text-center">
                        <button className="btn btn-custom my-3 " type="button">
                            <strong>Avançar</strong>
                        </button>
                    </div>
                </NavLink>
            </div>
        </Topico >
    );
}

export default BloqueioEletromecanico;