import React from 'react';
import './pictograma.css'
import 'bootstrap'
import  img1 from "../../img/PICTOGRAMAS/CARROSSEL/1.png"
import  img2 from "../../img/PICTOGRAMAS/CARROSSEL/2.png"
import  img3 from "../../img/PICTOGRAMAS/CARROSSEL/3.png"
import  img4 from "../../img/PICTOGRAMAS/CARROSSEL/4.png"
import  img5 from "../../img/PICTOGRAMAS/CARROSSEL/5.png"
import  img6 from "../../img/PICTOGRAMAS/CARROSSEL/6.png"
import  img7 from "../../img/PICTOGRAMAS/CARROSSEL/7.png"
import  img8 from "../../img/PICTOGRAMAS/CARROSSEL/8.png"

 

// import { Container } from './styles';

function Pictogramas() {
  return (
<div style={{margin:"10px auto"}}>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={img1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img3} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img4} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img5} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img6} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img7} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={img8} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>




  )
}

export default Pictogramas;


