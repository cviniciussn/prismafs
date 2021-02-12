import React from 'react';

import {
    Container,
    Header,
    Content,
    SideBar,
    Slide
} from "../../components";

function MovimentacaoDeCargas() {
    return (
        <div>
            <Container>
                <Header />
                <SideBar />
                <Content>
                    <h1 className="text-center mt-4">Movimentação de Cargas</h1>
                </Content>
            </Container >
        </div>
    );
}

export default MovimentacaoDeCargas;