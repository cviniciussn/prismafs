import React from 'react';

import {
    Container,
    Header,
    Content,
    SideBar,
    Buttons,
} from "../../components";

function Home() {

    return (
        <Container>
            <Header />
            <Content>
                <Buttons />
            </Content>
            {/* <SideBar /> */}
        </Container >
    );
}

export default Home;