import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import "./components/index"

import Introducao from "./pages/Introducao";
import PermissaoDoTrabalho from "./pages/PermissaoDoTrabalho";

const Routes = () => {
  return (
      <Router>
          <Switch>
              <Route path='/' exact>
                  <Introducao />
              </Route>
              <Route path='/permissao-do-trabalho' exact>
                  <PermissaoDoTrabalho/>
              </Route>
              <Route path='/bloqueio' exact>
                  
              </Route>
              <Route path='/tipos-de-trabalho' exact>
                  
              </Route>
              <Route path='/espaco-confinado' exact>
                  
              </Route>
              <Route path='/cargas-e-maquinas' exact>
                  
              </Route>
              <Route path='/produtos-quimicos' exact>
                  
              </Route>
              <Route path='/plano-de-acao-e-emergencia' exact>
                  
              </Route>
              <Route path='/regras-gerais-e-dicas' exact>
                  
              </Route>
          </Switch>
      </Router>
  );
}

export default Routes;