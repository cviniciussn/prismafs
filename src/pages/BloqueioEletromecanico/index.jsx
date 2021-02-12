import React from 'react';

import {
    Container,
    Header,
    Content,
    SideBar,
    Slide
} from "../../components";

function BloqueioEletromecanico() {
    return (
        <div>
            <Container>
                <Header />
                <SideBar />
                <Content>
                    <h1 className="text-center mt-4">Bloqueio Eletromecânico</h1>
                </Content>
            </Container >
        </div>
    );
}

export default BloqueioEletromecanico;