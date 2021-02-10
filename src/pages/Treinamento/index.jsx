import React from 'react';

import {
    Container,
    Header,
    Content,
    SideBar,
    ButtonsPanel
} from "../../components";

import Introducao from "../Treinamento/Introducao/index";

function Treinamento() {
    return (
        <div>
            <Container>
                <Header />
                <SideBar />
                <Content>
                    <Introducao />
                    <ButtonsPanel />
                </Content>
            </Container >
        </div>
    );
}

export default Treinamento;