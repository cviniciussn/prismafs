import React from 'react';
import ParagraphAndImg from '../../components/ParagraphAndImg';
import Paragraph from "../../components/Paragraph";

import img01 from "../../img/img-01-sl-13.jpg";
import Alert from '../../components/Alert';
import Topico from '../../components/Topico';
import { NavLink } from 'react-router-dom';

function MovimentacaoDeCargas() {
    return (
        <Topico id="movimentacao-de-cargas">
            <div className="title text-center opacity-0">
                <span className="icon"><i className="fas fa-truck-loading"></i></span> Movimentação de Cargas
            </div>

            <div id="slide-13">
                <ParagraphAndImg imgSrc={img01}>
                    Os trabalhos que envolvem <strong>uso de guindastes ou similares</strong> devem
                    ser feitos por <strong>Empresas habilitadas pela BSBIOS</strong>.
                </ParagraphAndImg>

                <hr />

                <Paragraph>
                    <h4 className="text-center"><strong>É importante saber:</strong></h4>
                    Todo trabalho que envolve <strong>içamento de peças</strong> deve ser feito <strong>somente
                    após</strong> preenchimento da <strong>Permissão de Trabalho</strong>.
                </Paragraph>

                <hr />

                <Alert>
                    <h4 className="text-center">Atenção!</h4>
                    É <strong>proibido</strong> circular ou permanecer <strong>sob peça suspensa</strong>!
                </Alert>

                <NavLink to="operadores-de-maquinas">
                    <div className="container-fluid text-center">
                        <button className="btn btn-custom my-3 " type="button">
                            <strong>Avançar</strong>
                        </button>
                    </div>
                </NavLink>
            </div>
        </Topico>
    );
}

export default MovimentacaoDeCargas;