import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
import { Link, Redirect } from 'react-router-dom';

function TiposDeTrabalho() {
    return (
        <div>
            <div id="slide-08">
                <div className="title text-center opacity-0"><span className="icon"><i className="bi bi-tools"></i></span> Trabalho com Eletricidade</div>
                <p>
                    Ao trabalhar com eletricidade o colaborador está exposto a riscos,
                    que podem provocar acidentes. Para trabalhar em segurança, conheça e siga algumas
                    práticas seguras.
                </p>

            </div>

            <div className="slide-09">
                {/* SLIDE 9 */}

                <h1>TRABALHO A QUENTE </h1>


                <div class="container-fluid" id="">
                    <div class="row">
                        <div class="col-md-10">
                            <strong>Trabalho a Quente</strong>  são todos os que < strong > projetam fagulhas e geram
                            aquecimento como por exemplo solda e corte.</strong ><br />
                            <br />
                            Eles possuem um grande potencial de
                            causar < strong > incêndios e explosões.</strong >
                        </div>
                    </div>
                </div>

                <hr />

                {/* ALERTA EM VERDE COM O SEGUINTE TEXTO */}

                <div class="container-fluid" id="">
                    <div class="row">
                        <div class="col-md-10">

                            <strong>Atenção!</strong>

                            <p class="my-3" id="">Para a realização de trabalho a quente em qualquer área da Empresa é obrigatório:</p>
                            <p class="my-3" id="">Solicitar a liberação da Permissão de Trabalho.</p>
                            <p class="my-3" id="">Verificar a atmosfera do local e seus arreadores com {/* o texto a seguir deve ter um Hover para mostrar a imagem abaixo */}equipamento de detecção de gases.</p>

                            <img id="" src="" alt="equipamento de detecção de gases" />
                        </div>
                    </div >
                </div>

                <hr />
            </div>

            <div className="slide-10">
                {/* SLIDE 10 */}

                < h1 > TRABALHO EM ALTURA</h1 >

                {/* AQUI VAI UM INFOGRÁFICO EM ESCADAS, CADA ESCADA CONTEM UM DOS ITENS ABAIXO QUE SÓ SERÃO REVELADOS APÓS O CLIQUE */}

                <div class="container-fluid opacity-0" id="">
                    <div class="row">
                        <div class="col-md-10">
                            <p class="my-3" id="">Somente colaboradores treinados, autorizados e aptos podem realizar atividade em altura.</p>

                            <p class="my-3" id="">Todo trabalho realizado acima de 2m é considerado trabalho em altura.</p>

                            <p class="my-3" id="">Em caso de dúvida, consulte o SESMT ou facilitador da área.</p>

                            <p class="my-3" id="">Para realização de atividade de trabalho em altura, é obrigatório a verificação da Pressão Arterial (PA) no início da jornada de trabalho.</p>

                        </div >
                    </div>
                </div>


                {/* ALERTA EM VERDE */}


                <div class="container-fluid opacity-0" id="">
                    <div class="row">
                        <div class="col-md-10">
                            <strong>ATENÇÃO!</strong>
                            <p class="my-3" id="">Esteja sempre com a Carteira de Verificação da Pressão Arterial.</p>
                        </div >
                    </div>
                </div>
                <hr />
            </div>

        </div>
    );
}

export default TiposDeTrabalho;