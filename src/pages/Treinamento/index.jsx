import React from 'react';

import {
    Container,
    Header,
    Content,
    SideBar,
} from "../../components";

import Introducao from "./topicos/1. Introducao";

function Treinamento() {
    return (
        <div>
            <Container>
                <Header />
                <SideBar />
                <Content>
                    <Introducao />
                </Content>
            </Container >
        </div>
    );
}

export default Treinamento;