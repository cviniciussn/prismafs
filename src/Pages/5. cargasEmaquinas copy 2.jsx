import React from 'react';
import '../script.js'

import Container from '../Components/Container'
import Header from '../Components/Header'
import Content from '../Components/Content'
import BlackBoard from '../Components/BlackBoard'
// import ButtonsBar from '../Components/ButtonsBar'
// import Slider from '../Components/Slider'
import NavBar from '../Components/NavBar'

function Treinamento() {

    return (
        <Container>
            <Header />
            <Content>
                <BlackBoard>
                    
                </BlackBoard>
            </Content>
            <NavBar />
        </Container >
    );
}

export default Treinamento;