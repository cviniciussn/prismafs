import React from 'react';
import $ from 'jquery'

function Slider(props) {

    return (
        <div id="slider" className="carousel slide" data-ride="carousel">
            <div id="slider-content" className="carousel-inner">
                <div id="slider-content-items" className="carousel-item active">
                    <img className="img-fluid" src={props.img1} alt="Primeiro Slide"></img>
                </div>
                <div id="slider-content-items" className="carousel-item">
                    <img className="img-fluid" src={props.img2} alt="Segundo Slide"></img>
                </div>
            </div>

            <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Próximo</span>
            </a>
        </div>
    );
}

export default Slider;