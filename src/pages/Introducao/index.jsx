import React from 'react';

import {
    Container,
    Header,
    Content,
    SideBar,
} from "../../components";

import {Link} from 'react-router-dom';

function Introducao() {

    return (
        <div>
            {/* <Container> */}
                {/* <Header /> */}
                {/* <Content> */}
                    <Link to="/permissao-de-trabalho">
                        <button id="btn-start" className="btn btn-success">Iniciar Treinamento</button>
                    </Link>
                {/* </Content> */}
                {/* <SideBar /> */}
            {/* </Container > */}

        </div>
    );
}

export default Introducao;