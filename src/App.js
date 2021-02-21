import React from 'react'
import {
  Container,
  Header,
  Content,
  SideBar,
  Slide
} from "./components";
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
} from "./pages";
import Modals from "./components/Modals";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'

import { AnimatePresence, motion } from "framer-motion";


function App() {
  
  
  return (
    <div className="App">
      <Router>

        <Modals />

        <Container>
          <Header/>
          <Content>

            <AnimatePresence>
              <Switch   >
                  <Route path='/' exact component={Introducao} />
                  <Route path='/permissao-de-trabalho' exact component={PermissaoDeTrabalho} />
                  <Route path='/bloqueio-eletromecanico' exact component={BloqueioEletromecanico} />
                  <Route path='/trabalho-com-eletricidade' exact component={TrabalhoComEletricidade} />
                  <Route path='/trabalho-a-quente' exact component={TrabalhoAQuente} />
                  <Route path='/trabalho-em-altura' exact component={TrabalhoEmAltura} />
                  <Route path='/espaco-confinado' exact component={EspacoConfinado} />
                  <Route path='/movimentacao-de-cargas' exact component={MovimentacaoDeCargas} />
                  <Route path='/operadores-de-maquinas' exact component={OperadoresDeMaquinas} />
                  <Route path='/produtos-quimicos' exact component={ProdutosQuimicos} />
                  <Route path='/plano-de-acao-e-emergencia' exact component={PlanoDeAcaoEEmergencia} />
                  <Route path='/regras-gerais-e-dicas' exact component={RegrasGeraisEDicas} />
                  <Route path='/testando-conhecimentos' exact component={TestandoConhecimentos} />
                  <Route path='/conclusao' exact component={Conclusao} />
              </Switch>
            </AnimatePresence>

          </Content>
          <SideBar />
        </Container>
        </Router>
    </div>
  );
}

export default App;
