import React from 'react';

// import { Container } from './styles';

function Carousel() {

    const carouselItem = () => {
        return (
            <div class="carousel-item">
                <img id={props.idImg} className="rounded-20px d-block w-100" src={img1} alt="Imagem1" />
            </div>
        )
    }


    return (
        <div id={props.idCarousel} class="carousel slide box-shadow-custom rounded-20px my-3 opacity-0" data-interval="10000" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target={props.idCarousel} data-slide-to="0" class="active"></li>
                <li data-target={props.idCarousel} data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img id="" className="rounded-20px d-block w-100" src={img1} alt="Imagem1" />
                </div>
                <div class="carousel-item">
                    <img id="" className="rounded-20px d-block w-100" src={img2} alt="Imagem2" />
                </div>
            </div>
            <a class="carousel-control-prev" href={props.idCarousel} role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Anterior</span>
            </a>
            <a class="carousel-control-next" href={props.idCarousel} role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Próximo</span>
            </a>
        </div>
    );
}

export default Carousel;