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

function App() {
  return (
    <div className="App">
      <Router>
        <Container>

          <Header/>

          <Content>
            <Switch>
                <Route path='/' exact><Introducao /></Route>
                <Route path='/permissao-de-trabalho' component={PermissaoDeTrabalho} exact />
                <Route path='/bloqueio-eletromecanico' exact><BloqueioEletromecanico /></Route>
                <Route path='/trabalho-com-eletricidade' exact><TrabalhoComEletricidade /></Route>
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
