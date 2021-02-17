import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
import { Link, Redirect } from 'react-router-dom';

import ArrowProgress from "../../components/ArrowProgress";
import Paragraph from "../../components/Paragraph";
import Alert from "../../components/Alert";

import img01 from '../../img/img-01-sl-06.jpg';
import img02 from '../../img/img-02-sl-06.jpg';
import img03 from '../../img/img-03-sl-06.jpg';

function BloqueioEletromecanico() {
    return (
        <div id="bloqueio-eletromecanico">
            <h1 className="title text-center opacity-0"><span className="icon"><i class="fas fa-lock"></i></span> Bloqueio Eletromecânico</h1>

            <hr />

            <div className="slide-06">

                <div id="item-01-sl-06" className="">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <p className="my-3">
                                A Política de Bloqueio Eletromecânico da BSBIOS estabelece que:
                            </p>
                        </div>
                    </div>
                </div>


                <Alert id="item-02-sl-06">
                    <strong>ANTES</strong> de executar qualquer intervenção, <strong>TODOS</strong> devem realizar bloqueio e identificação
                    de <strong>TODAS</strong> as energias perigosas de <strong>QUALQUER</strong> equipamento.
                </Alert>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                    </div>
                </div>

                {/* >>> */}
                <hr />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <button className="btn btn-outline-custom dropdown-toggle py-3 my-3" type="button" data-toggle="collapse" data-target="#teste1" role="button" aria-expanded="false" aria-controlsdata-target="#collapseExample">
                                Bloqueio Elétrico
                            </button>
                            <div className="collapse multi-collapse" id="teste1">
                                <img src={img01} className="card-img my-1" />
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <button className="btn btn-outline-custom dropdown-toggle py-3 my-3" type="button" data-toggle="collapse" data-target="#teste2" role="button" aria-expanded="false" aria-controlsdata-target="#collapseExample">
                                Bloqueio Mecânico
                            </button>
                            <div className="collapse multi-collapse" id="teste2">
                                <img src={img02} className="card-img my-1" />
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <button className="btn btn-outline-custom dropdown-toggle py-3 my-3" type="button" data-toggle="collapse" data-target="#teste3" role="button" aria-expanded="false" aria-controlsdata-target="#collapseExample">
                                Cartão de Bloqueio
                            </button>
                            <div className="collapse multi-collapse" id="teste3">
                                <img src={img03} className="card-img my-1" />
                            </div>
                        </div>
                    </div>
                </div>




            </div>


            <div className='slide-07'>
                <hr />

                {/* SLIDE 7 */}

                <div className="container-fluid" id="">
                    <div className="row">
                        <div className="col-md-10">
                            {/* Texto deve aparecer num balão */}
                            <p className="my-3" id="">Mas quem será o responsável por solicitar o bloqueio e identificar as energias perigosas dos equipamentos?</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="container-fluid" id="">
                    <div className="row">
                        <div className="col-md-10">
                            {/* ALERTA EM AZUL */}

                            <p className="my-3" id=""><strong>Fique Atento!</strong></p>
                            <p className="my-3" id="">
                                O bloqueio e a identificação das energias perigosas do equipamento em que será realizado o trabalho devem ser realizados por <strong>todos os colaboradores, terceiros, temporários e prestadores de serviço que irão realizar a atividade.</strong>

                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slide-08">
                {/* SLIDE 8 */}

                <h1>TRABALHO COM ELETRICIDADE</h1>

                <p class="my-3" id="">
                    Ao trabalhar com <strong>eletricidade</strong>  o colaborador está exposto a riscos, que podem provocar acidentes.
                Para <strong>trabalhar em segurança</strong> , conheça e siga algumas <strong>práticas seguras. </strong>
                </p>
                {/* Apresentar os tópicos um a um. Os tópicos 2, 3 e 6 terão um 
			    “Clique aqui” que, ao serem clicados, deverão apresentar em 
		        uma telinha alpha as respectivas imagens. */}


                <hr />

                <div class="container-fluid" id="">
                    <div class="row">
                        <div class="col-md-10">
                            <p class="my-3" id=""> 1 - Somente eletricistas treinados e qualificados estão autorizados a realizar atividade em linhas elétricas energizadas ou máquinas e equipamentos elétricos. </p>
                            <p class="my-3" id=""> 2 - Estes devem sempre usar os equipamentos de proteção. Clique aqui. </p>
                            <p class="my-3" id=""> 3 - Somente pessoal autorizado pode acessar as Centrais de Controle de Motores (CCM) e Subestações. Clique aqui. </p>
                            <p class="my-3" id="">4 - É proibido o uso de “T”, benjamins ou fios paralelos e equipamentos com plugs incompatíveis com as instalações da Empresa.</p>
                            <p class="my-3" id="">5 - Em caso de dúvida, chame um eletricista.</p>
                            <p class="my-3" id="">6 - Caso necessite realizar bloqueio elétrico, comunique o seu facilitador e/ou gestor da área. Clique aqui.</p>

                            <img id="" src="" alt="imagem do topico 2" />
                            <img id="" src="" alt="imagem do topico 3" />
                            <img id="" src="" alt="imagem do topico" />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default BloqueioEletromecanico;