import React from 'react';

import {
    Container,
    Header,
    Content,
    SideBar,
    Slide
} from "../../components";

function TiposDeTrabalho() {
    return (
        <div>
            <Container>
                <Header />
                <SideBar />
                <Content>
                    <h1 className="text-center mt-4">Tipos de Trabalho</h1>
                </Content>
            </Container >
        </div>
    );
}

export default TiposDeTrabalho;