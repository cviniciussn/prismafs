import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
import { Link, Redirect } from 'react-router-dom';
import Paragraph from '../../components/Paragraph';
import ParagraphAndImg from '../../components/ParagraphAndImg';
import Card from '../../components/Card';
import Alert from '../../components/Alert';
import ArrowProgress from '../../components/ArrowProgress';

import img1 from '../../img/img-01-sl-09.jpg';
import NextPage from '../../components/NextPage';

function TrabalhoAQuente() {
    return (
        <div id="trabalho-a-quente">
            <div className="title text-center"><span className="icon"><i class="fas fa-fire-alt"></i></span> Trabalho a Quente</div>
            <hr />
            <div className="slide-09">

                <ParagraphAndImg idItem="" imgSrc={img1}>
                    <strong>Trabalho a Quente</strong>  são todos os que <strong> projetam fagulhas e geram
                    aquecimento como por exemplo solda e corte.</strong><br />
                    <br />
                    Eles possuem um grande potencial de
                    causar < strong > incêndios e explosões</strong>.
                </ParagraphAndImg>

                <ArrowProgress />
                <hr />

                <Alert>
                    <h2 className="text-center">Atenção!</h2>
                    Para a realização de trabalho a quente em qualquer área da Empresa é obrigatório:
                    <ol>
                        <li>
                            Para a realização de trabalho a quente em qualquer área da Empresa é obrigatório:
                        </li>
                        <li>
                            Verificar a atmosfera do local e seus arreadores com <span className="click" data-toggle="modal" data-target="#modal-01-sl-09"><strong><i>equipamento de detecção de gases</i></strong></span>.
                        </li>
                    </ol>
                    <small>Passe o mouse sobre a expressão em destaque</small>
                </Alert>

                <NextPage id="next-page-04" currentPageId="trabalho-a-quente" nextPagePath="/trabalho-em-altura" >
                    Próxima Página
                </NextPage>
                
            </div>
        </div>
    );
}

export default TrabalhoAQuente;