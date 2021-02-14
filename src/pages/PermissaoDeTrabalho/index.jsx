import React from 'react';
import {Link} from 'react-router-dom';

function PermissaoDeTrabalho() {
    return (
        <div>
            <div className="slide-03">

                <div className="">
                    <p className="par-05 flex-grow-1">
                        Algumas atividades necessitam de uma <strong>autorização antes da sua execução</strong> devido ao risco
                que elas podem oferecer ao colaborador. Essa autorização é chamada <strong>Permissão de Trabalho (PT)</strong>.
                </p>
                    <img src="" alt="Imagem3" className="flex-grow-1" />
                </div>

                {/* >>> */}

                <p className="par-06">
                    O objetivo da Permissão de Trabalho é a <strong>prevenção de acidentes</strong> por meio da avaliação dos riscos de cada
                atividade, <strong>de caráter diferenciado (não rotineiro)</strong>, a ser realizada dentro da propriedade da BSBIOS.
                </p>

                {/* >>> */}

                <p className="par-07">
                    Com a Permissão de Trabalho, a Empresa garante que somente os colaboradores aptos ao desempenho da atividade
                    adentrem à área de risco e a realizem com segurança.
                </p>
            </div>

            <div className="slide-04">

                <div>
                    <p className="par-08">
                        Conheça algumas <strong><a>atividades que necessitam da Permissão de Trabalho</a></strong> para serem realizadas.
                    </p>
                    <div className="">
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

                    {/* >>> */}

                    <p className="">
                        Em caso de dúvida se a atividade necessita de permissão, pergunte ao seu líder ou ao SESMT.
                    </p>
                </div>

                <div className="slide-05">
                    <p>
                        Existem três tipos de Permissão de Trabalho:
                    </p>
                    <div>
                        <div>
                            <div>PT</div>
                            <div>Descrição...</div>
                        </div>
                        <div>
                            <div>PT</div>
                            <div>Descrição...</div>
                        </div>
                        <div>
                            <div>PT</div>
                            <div>Descrição...</div>
                        </div>
                    </div>
                </div>

                <div>
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
                    <button id="btn-02" type="button" className="btn btn-success">Avançar</button>
                </Link>

            </div>

        </div>
    );
}

export default PermissaoDeTrabalho;