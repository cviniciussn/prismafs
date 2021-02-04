import React from 'react';
// import '../script.js'

import Container from '../Components/Container'
import Header from '../Components/Header'
import Content from '../Components/Content'
import BlackBoard from '../Components/BlackBoard'
// import ButtonsBar from '../Components/ButtonsBar'
import Slider from '../Components/Slider'
import NavBar from '../Components/NavBar'

import img from '../img/slide-1.jpg'
import img1 from './Imagem1.jpg'
import img2 from './Imagem2.jpg'

import $ from 'jquery'

function home() {

    return (
        <Container background="img1">
            <Header />
            <Content>
                <BlackBoard>
                    <Slider img1={img1} img2={img2}/>
                </BlackBoard>
            </Content>
            <NavBar />
        </Container >
    );
}

export default home;