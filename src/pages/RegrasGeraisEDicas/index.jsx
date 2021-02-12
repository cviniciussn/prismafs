import React from 'react';

import {
    Container,
    Header,
    Content,
    SideBar,
} from "../../components";

import { Link } from 'react-router-dom';

function RegrasGeraisEDicas() {

    return (
        <Container>
            <Header />
            <Content>
                <h1 className="text-center mt-4">Regras Gerais e Dicas</h1>
            </Content>
            <SideBar />
        </Container >
    );
}

export default RegrasGeraisEDicas;