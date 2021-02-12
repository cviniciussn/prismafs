import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import "./components/index"

import {
    Introducao,
    PermissaoDeTrabalho,
    BloqueioEletromecanico,
    TiposDeTrabalho,
    EspacoConfinado,
    MovimentacaoDeCargas,
    OperadoresDeMaquinas,
    ProdutosQuimicos,
    PlanoDeAcaoEEmergencia,
    RegrasGeraisEDicas,
    TestandoConhecimentos,
    Conclusao,
} from "./pages"

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact><Introducao /></Route>
                <Route path='/permissao-de-trabalho' exact><PermissaoDeTrabalho /></Route>
                <Route path='/bloqueio-eletromecanico' exact><BloqueioEletromecanico /></Route>
                <Route path='/tipos-de-trabalho' exact><TiposDeTrabalho /></Route>
                <Route path='/espaco-confinado' exact><EspacoConfinado /></Route>
                <Route path='/movimentacao-de-cargas' exact><MovimentacaoDeCargas /></Route>
                <Route path='/operadores-de-maquinas' exact><OperadoresDeMaquinas /></Route>
                <Route path='/produtos-quimicos' exact><ProdutosQuimicos /></Route>
                <Route path='/plano-de-acao-e-emergencia' exact><PlanoDeAcaoEEmergencia /></Route>
                <Route path='/regras-gerais-e-dicas' exact><RegrasGeraisEDicas /></Route>
                <Route path='/testando-conhecimentos' exact><TestandoConhecimentos /></Route>
                <Route path='/conclusao' exact><Conclusao /></Route>
            </Switch>
            
        </Router>
    );
}

export default Routes;