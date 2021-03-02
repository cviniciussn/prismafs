import React from 'react';
import { NavLink } from 'react-router-dom';
import img01 from "../../img/img-01-sl-20.jpg";
import img02 from "../../img/img-02-sl-20.jpg";
import {
    Paragraph,
    Topico,
    Alert,
    ImgZoom,
} from '../../components';

function PlanoDeAcaoEEmergencia() {
    return (
        <Topico id="plano-de-acao-e-emergencia">
            <div className="title text-center opacity-0"><span className="icon"><i class="fas fa-running"></i></span> Plano de Ação e Emergência</div>

            <div id="slide-20">
                <Paragraph>
                    A BSBIOS possui Equipes Treinadas para atuar no combate e primeiros socorros:
                </Paragraph>
                <div className="row d-flex justify-content-center m-3">
                    <div className="col d-flex justify-content-center p-3">
                        <ImgZoom imgSrc={img01} scaleZoom="1.3" height="250" />
                    </div>
                    <div className="col d-flex justify-content-center p-3">
                        <ImgZoom imgSrc={img02} scaleZoom="1.3" height="250" />
                    </div>
                </div>
            </div>

            <div id="slide-21">

            </div>

            <div id="slide-22">
                <Alert title="Importante!">
                    A comunicação de uma Emergência pode ser realizada através de:
                    Rádio comunicador ou telefone
                    Botoeiras/acionadores manuais do sistema de alarme
                </Alert>
            </div>

            <div id="slide-24">
                <Alert title="Atenção!" subtitle="Em caso de alarme de emergência:">
                    <ol>
                        <li>
                            Somente retorne ao seu local de trabalho após receber autorização.
                        </li>
                        <li>
                            Independente do modo que soar o alarme, procure não buscar informações via rádio ou telefone.
                        </li>
                        <li>
                            Apenas escute e aguarde orientações.
                        </li>
                    </ol>
                </Alert>
            </div>

            <NavLink to="regras-gerais-e-dicas">
                <div className="container-fluid text-center">
                    <button className="btn btn-custom my-3 " type="button">
                        <strong>Avançar</strong>
                    </button>
                </div>
            </NavLink>
        </Topico>
    );
}

export default PlanoDeAcaoEEmergencia;