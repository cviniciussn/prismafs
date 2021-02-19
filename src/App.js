// import logo from './logo.svg';
import React from 'react'
// import Routes from './Routes'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {
  Introducao,
  PermissaoDeTrabalho,
  BloqueioEletromecanico,
  TrabalhoComEletricidade,
  TrabalhoAQuente,
  TrabalhoEmAltura,
  EspacoConfinado,
  MovimentacaoDeCargas,
  OperadoresDeMaquinas,
  ProdutosQuimicos,
  PlanoDeAcaoEEmergencia,
  RegrasGeraisEDicas,
  TestandoConhecimentos,
  Conclusao,
} from "./pages"

import {
  Container,
  Header,
  Content,
  SideBar,
  Slide
} from "./components";

import Modal from './components/Modal';
  import carteiraVrf from '../src/img/carteira-verificacao.jpg'
  
  import img08 from '../src/img/img-011-sl-08.png'
  import img09 from '../src/img/img-012-sl-08.png'
  import img10 from '../src/img/img-02-sl-08.jpg'
  import img11 from '../src/img/img-03-sl-08.png'

  import img20 from '../src/img/img-02-sl-09.jpg';


import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Router>
        {/* ----------------------------------------------MODAL--------------------------------------- */}
        {/* Permissão de trabalho */}
        <Modal id="modal-01-sl-05" title="Carteira de Verificação da Pressão Arterial">
            <img src={carteiraVrf} height="300" className="card-img box-shadow-custom" alt="..." />
        </Modal>
        {/* ------------------------------------------------------------------------------------------ */}
        {/* Trabalho com eletricidade */}
        <Modal id="modal-01-sl-08" title="">
          <Card>
            <div className="container-fluid text-center">
              <img src={img08} height="300"/>
              <img src={img09} height="300"/>
            </div>
          </Card>
        </Modal>
        <Modal id="modal-02-sl-08" title="Eletricistas e Instrumentistas">
          <Card>
            <div className="container-fluid text-center">
              <img src={img10} />
            </div>
          </Card>
        </Modal>
        <Modal id="modal-03-sl-08" title="Operacionais com NR-10">
          <Card>
            <div className="container-fluid text-center">
              <img src={img11} />
            </div>
          </Card>
        </Modal>

        {/* ---------------------------------------------------------------------------------------- */}
        {/* Trabalho a quente */}
        <Modal id="modal-01-sl-09" title="Operacionais com NR-10">
          <Card>
            <div className="container-fluid text-center">
              <img src={img20} />
            </div>
          </Card>
        </Modal>
        {/* --------------------------------------------MODAL---------------------------------------------- */}

        <Container>

          <Header/>

          <Content>
            <Switch>
                <Route path='/' exact><Introducao /></Route>
                <Route path='/permissao-de-trabalho' component={PermissaoDeTrabalho} exact />
                <Route path='/bloqueio-eletromecanico' exact><BloqueioEletromecanico /></Route>
                <Route path='/trabalho-com-eletricidade' exact><TrabalhoComEletricidade /></Route>
                <Route path='/trabalho-a-quente' exact><TrabalhoAQuente /></Route>
                <Route path='/trabalho-em-altura' exact><TrabalhoEmAltura /></Route>
                <Route path='/espaco-confinado' exact><EspacoConfinado /></Route>
                <Route path='/movimentacao-de-cargas' exact><MovimentacaoDeCargas /></Route>
                <Route path='/operadores-de-maquinas' exact><OperadoresDeMaquinas /></Route>
                <Route path='/produtos-quimicos' exact><ProdutosQuimicos /></Route>
                <Route path='/plano-de-acao-e-emergencia' exact><PlanoDeAcaoEEmergencia /></Route>
                <Route path='/regras-gerais-e-dicas' exact><RegrasGeraisEDicas /></Route>
                <Route path='/testando-conhecimentos' exact><TestandoConhecimentos /></Route>
                <Route path='/conclusao' exact><Conclusao /></Route>
            </Switch>
          </Content>

            <SideBar />

        </Container>
        </Router>
    </div>
  );
}

export default App;
