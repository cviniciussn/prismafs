import React from 'react';
import $ from 'jquery';
import '../../css/animate.css';
import { Link, Redirect } from 'react-router-dom';
import Paragraph from '../../components/Paragraph';
import Card from '../../components/Card';
import Alert from '../../components/Alert';
import ArrowProgress from '../../components/ArrowProgress';
import NextPage from '../../components/NextPage';

function TrabalhoComEletricidade() {
    return (
        <div id="trabalho-com-eletricidade">
            <div id="slide-08">
                <div className="title text-center opacity-0"><span className="icon"><i class="fas fa-bolt"></i></span> Trabalho com Eletricidade</div>

                <Paragraph id="item-01-sl-08">
                    Ao trabalhar com eletricidade o colaborador está exposto a riscos,
                    que podem provocar acidentes. Para trabalhar em segurança, conheça e siga algumas
                    práticas seguras.
                </Paragraph>

                <hr />

                <Card>
                    <small>
                        <ol>
                            <li>
                                Somente eletricistas treinados e qualificados estão autorizados a realizar atividade
                                em linhas elétricas energizadas ou máquinas e equipamentos elétricos.
                            </li>
                            <li>
                                Estes devem sempre usar os equipamentos de proteção.
                                <br />
                                <span className="click"><strong><u><i><a data-toggle="modal" data-target="#modal-01-sl-08">Clique aqui</a></i></u></strong></span>.
                            </li>
                            <li>
                                Somente pessoal autorizado pode acessar as Centrais de Controle de Motores (CCM)
                                e Subestações.
                                <br />
                                <span className="click"><strong><u><i><a data-toggle="modal" data-target="#modal-02-sl-08">Clique aqui</a></i></u></strong></span>.
                            </li>
                            <li>
                                É proibido o uso de “T”, benjamins ou fios paralelos e equipamentos com plugs
                                incompatíveis com as instalações da Empresa.
                            </li>
                            <li>
                                Em caso de dúvida, chame um eletricista.
                            </li>
                            <li>
                                Caso necessite realizar bloqueio elétrico, comunique o seu facilitador e/ou
                                gestor da área.
                                <br />
                                <span className="click"><strong><u><i><a data-toggle="modal" data-target="#modal-03-sl-08">Clique aqui</a></i></u></strong></span>.
                            </li>
                        </ol>
                    </small>
                </Card>

                <ArrowProgress />
                <hr />

                <Alert>
                    <h2 className="text-center">Atenção</h2>
                        Esteja sempre com a Carteira de Verificação da Pressão Arterial.
                </Alert>

                <NextPage id="next-page-03" currentPageId="trabalho-com-eletricidade" nextPagePath="/trabalho-a-quente" >
                    Próxima Página
                </NextPage>
            </div>
        </div>
    );
}

export default TrabalhoComEletricidade;