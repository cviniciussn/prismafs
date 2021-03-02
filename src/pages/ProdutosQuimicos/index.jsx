import React from 'react';
import { NavLink } from 'react-router-dom';
import Paragraph from '../../components/Paragraph';
import ImgZoom from '../../components/ImgZoom';

import img01 from "../../img/img-01-sl-18.jpg";
import img02 from "../../img/img-02-sl-18.jpg";
// import img03 from "../../img/img-03-sl-18.jpg";
import img04 from "../../img/img-01-sl-19.png";
import img14 from "../../img/img-01-sl-16.png";
import Topico from '../../components/Topico';

function ProdutosQuimicos() {

    return (
        <Topico id="produtos-quimicos">
            <div className="title text-center opacity-0"><span className="icon"><i className="fas fa-flask"></i></span> Produtos Químicos</div>

            <div id="slide-15">
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn click" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Gestão #1
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <Paragraph>
                                A gestão dos produtos químicos da BSBIOS é feita pela <strong>GHS</strong>: Sistema Globalmente Harmonizado de
                                Classificação e Rotulagem de Produtos Químicos (do inglês - Globally Harmonized System of
                                Classification and Labeling of Chemicals).
                            </Paragraph>
                            <Paragraph>
                                Tem como objetivo estabelecer critério para orientar e implantar o sistema globalmente harmonizado
                                para classificação e rotulagem de produtos químicos utilizados na Empresa, de maneira clara e
                                objetiva para melhor proteção da saúde humana e meio ambiente.
                            </Paragraph>

                            <hr />

                            <div className="container py-3">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-6">
                                        <img className="card-img rounded box-shadow-custom" src={img14} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn click collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Pictogramas #2
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <Paragraph>
                                Os pictogramas <strong>alertam para o perigo dos produtos químicos</strong>. Eles são distribuídos pela Empresa
                                e <strong>seus significados devem ser de seu conhecimento</strong>.
                            </Paragraph>
                            <div></div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn click collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Armazenamento e descarte #3
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-sm-12 col-lg-6">
                                        <Paragraph>
                                            Todos os produtos químicos devem ser <strong>armazenados</strong> em <strong>recipientes apropriados e identificados</strong>.
                                        </Paragraph>
                                    </div>

                                    <div className="row m-3">
                                        <div className="col p-3">
                                            <ImgZoom imgSrc={img01} scaleZoom="1.3" height="150" />
                                        </div>
                                    </div>
                                    <div className="row m-3">
                                        <div className="col p-3">
                                            <ImgZoom imgSrc={img02} scaleZoom="1.3" height="150" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFour">
                            <h5 className="mb-0">
                                <button className="btn click collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                    Manuseio #4
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-sm-12 col-lg-6">
                                        <Paragraph>
                                            O <strong>manuseio</strong> dos produtos químicos é muito importante e requer um <strong>cuidado especial</strong>.
                                        </Paragraph>
                                    </div>



                                    <div className="row m-3">
                                        <div className="col p-3">
                                            <ImgZoom imgSrc={img04} scaleZoom="1.2" height="200" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <NavLink to="plano-de-acao-e-emergencia">
                <div className="container-fluid text-center">
                    <button className="btn btn-custom my-3 " type="button">
                        <strong>Avançar</strong>
                    </button>
                </div>
            </NavLink>
        </Topico>
    );
}

export default ProdutosQuimicos;