import React from "react";

// import Modal from '../Modal/';
  import carteiraVrf from '../../img/carteira-verificacao.jpg';
  import img08 from '../../img/img-011-sl-08.png';
  import img09 from '../../img/img-012-sl-08.png';
  import img10 from '../../img/img-02-sl-08.jpg';
  import img11 from '../../img/img-03-sl-08.png';
  import img20 from '../../img/img-02-sl-09.jpg';


import Modal from "../Modal";
import Card from "../Card";

function Modals() {
    return (
        <div>
            {/* ----------------------------------------------MODAL--------------------------------------- */}
            {/* Permissão de trabalho */}
            <Modal id="modal-01-sl-05" title="Carteira de Verificação da Pressão Arterial">
                <img src={carteiraVrf} height="300" className="card-img box-shadow-custom" alt="..." />
            </Modal>
            {/* ------------------------------------------------------------------------------------------ */}
            {/* Trabalho com eletricidade */}
            <Modal id="modal-01-sl-08" title="">
                <Card>
                    <div className="container-fluid text-center">
                        <img src={img08} height="300" />
                        <img src={img09} height="300" />
                    </div>
                </Card>
            </Modal>
            <Modal id="modal-02-sl-08" title="Eletricistas e Instrumentistas">
                <Card>
                    <div className="container-fluid text-center">
                        <img src={img10} />
                    </div>
                </Card>
            </Modal>
            <Modal id="modal-03-sl-08" title="Operacionais com NR-10">
                <Card>
                    <div className="container-fluid text-center">
                        <img src={img11} />
                    </div>
                </Card>
            </Modal>

            {/* ---------------------------------------------------------------------------------------- */}
            {/* Trabalho a quente */}
            <Modal id="modal-01-sl-09" title="Operacionais com NR-10">
                <Card>
                    <div className="container-fluid text-center">
                        <img src={img20} />
                    </div>
                </Card>
            </Modal>
            {/* --------------------------------------------MODAL---------------------------------------------- */}
        </div>
    );
}

export default Modals;