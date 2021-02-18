import React from 'react';
import 'bootstrap'
import img1 from '../../img/GESTAO/ESQUEMA-GESTAO.png'
import CARROSSEL from "../Pictogramas/pictograma"

// import { Container } from './styles';

function Produtos_Quimicos() {
    return (

        <div>
            <div style={{ width: "100rem" }} className="accordion accordion-flush" id="accordionFlushExample">
                
                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            GESTÃO
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"><p> A gestão dos produtos químicos da BSBIOS é feita pela <strong>GHS</strong> : Sistema Globalmente Harmonizado de classNameificação e Rotulagem de Produtos Químicos (do inglês - Globally Harmonized System of classNameification and Labeling of Chemicals).
                            Tem como objetivo estabelecer critério para orientar e implantar o sistema globalmente harmonizado para classNameificação e rotulagem de produtos químicos utilizados na Empresa, de maneira clara e objetiva para melhor proteção da saúde humana e meio ambiente.</p>
                            <hr />

                            <button type="button" data-toggle="modal" data-target="#exampleModal">
                                <img src={img1} alt="" />
                            </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <img src={img1} alt="" /></div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                {/* --------------------------------- */}


                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            PICTOGRAMAS
                         </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <CARROSSEL></CARROSSEL>
                        </div>
                    </div>
                </div>


                {/* --------------------------------- */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            ARMAZENAMENTO E DESCARTE
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>
                                Todos os produtos químicos devem ser <strong> armazenados em recipientes apropriados e identificados.</strong>
                                <img id="img-01-sl-18" src="" alt="" />
                                <img id="img-02-sl-18" src="" alt="" />

                            </p>

                            <p>O <strong>descarte </strong>dos produtos químicos também deve ser feito de <strong>maneira correta e no local adequado. </strong></p>

                            <div className="alert alert-success" role="alert">
                                <strong> Atenção!</strong>
                                <p> Se você tiver dúvida nesse procedimento, deve certificar-se com o <strong> setor de Meio Ambiente.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* --------------------------------- */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                            MANUSEIO
                                </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">O <strong> manuseio </strong> dos produtos químicos é muito importante e requer um cuidado especial.</div>
                        <div className="card" >
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Leia a FISPQ.</li>
                                <hr />
                                <li className="list-group-item">Se não houver procedimento descrito, solicite a <strong> Permissão de Trabalho.</strong></li>
                                <hr />
                                <li className="list-group-item">Certifique-se que você está usando os EPI’s corretos.</li>
                                <hr />
                                <li className="list-group-item">Localize previamente o <strong> Chuveiro de Emergência </strong> mais próximo. </li>
                                <hr />
                                <li className="list-group-item"> Não faça “mistura” de produtos se você não conhece a compatibilidade dos mesmos.</li>
                                <hr />
                                <li className="list-group-item"> Não acondicione produto químico em embalagem não identificada.</li>
                                <hr />
                                <li className="list-group-item">Não manuseie nenhum produto químico sem ter conhecimento do mesmo. </li>
                                <hr />
                                <li className="list-group-item">Em caso de emergência, siga as instruções da FISPQ. </li>
                            </ul>
                            <img id="img-01-sl-19" src="" alt="" />
                        </div>
                    </div>
                </div>
           
            </div>
        </div>
    );
}

export default Produtos_Quimicos;







