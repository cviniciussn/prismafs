import React from 'react';

import {
    Container,
    Header,
    Content,
    SideBar,
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
                </Content>
            </Container >
        </div>
    );
}

export default Treinamento;