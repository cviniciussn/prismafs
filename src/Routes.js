import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import "./components/index"

import {
    Home,
    PermissaoDeTrabalho
} from "./pages"

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact><Home /></Route>
                <Route path='/permissao-de-trabalho' exact><PermissaoDeTrabalho /></Route>
                <Route path='/bloqueio-eletromecanico' exact></Route>
                <Route path='/tipos-de-trabalho' exact></Route>
                <Route path='/espaco-confinado' exact></Route>
                <Route path='/cargas-e-maquinas' exact></Route>
                <Route path='/produtos-quimicos' exact></Route>
                <Route path='/plano-de-acao-e-emergencia' exact></Route>
                <Route path='/regras-gerais-e-dicas' exact></Route>
            </Switch>
        </Router>
    );
}

export default Routes;