import React from 'react';

import {
    Container,
    Header,
    Content,
    SideBar,
    ButtonsPanel
} from "../../components";

import Slide01 from "../Treinamento/Introducao/slide01";
import Slide02 from "../Treinamento/Introducao/slide02";

function Treinamento() {
    return (
        <div>
            <Container>
                <Header />
                <SideBar />
                <Content>
                    <div className="blackboard">
                        <h2 className="text-center mb-4">Introdução</h2>
                        <Slide01 />
                        <Slide02 />
                    </div>
                    <ButtonsPanel />
                </Content>
            </Container >
        </div>
    );
}

export default Treinamento;