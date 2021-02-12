import React from 'react';

import {
    Container,
    Header,
    Content,
    SideBar,
} from "../../components";

import { Link } from 'react-router-dom';

function ProdutosQuimicos() {

    return (
        <Container>
            <Header />
            <Content>
                <h1 className="text-center mt-4">Produtos Químicos</h1>
            </Content>
            <SideBar />
        </Container >
    );
}

export default ProdutosQuimicos;