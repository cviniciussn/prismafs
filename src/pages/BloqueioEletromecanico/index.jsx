import React from 'react';
import '../../js/main';

import {Link} from 'react-router-dom';

function BloqueioEletromecanico() {
    return (
        <div>
            <div className="slide-06">
                <p>
                    A Política de Bloqueio Eletromecânico da BSBIOS estabelece que:
                </p>
                <p>
                    ANTES de executar qualquer intervenção, TODOS devem realizar bloqueio e identificação
                    de TODAS as energias perigosas de QUALQUER equipamento.
                </p>

                {/* >>> */}

                <div>
                    <div>
                        <div>Bloqueio Elétrico</div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <div>Bloqueio Mecânico</div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <div>Cartão de Bloqueio</div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>

            <div className="slide-07">
                <div>
                    Chegou a hora de refletir...
                </div>

                <div>
                    <h3>Fique atento!</h3>
                    <p>
                        O bloqueio e a identificação das energias perigosas do equipamento em que será
                        realizado o trabalho devem ser realizados por todos os colaboradores, terceiros,
                        temporários e prestadores de serviço que irão realizar a atividade.
                    </p>
                </div>
            </div>

            <Link to="/tipos-de-trabalho">
                <button id="btn-02" type="button" className="btn btn-success">Avançar</button>
            </Link>
        </div>
    );
}

export default BloqueioEletromecanico;