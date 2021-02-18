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

function App() {
  return (
    <div className="App">
      <Router>
        <Modal idModal="modal-01-sl-05" title="Carteira de Verificação da Pressão Arterial">
            <img src={carteiraVrf} className="card-img box-shadow-custom w-100" alt="..." />
        </Modal>

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
