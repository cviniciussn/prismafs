import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <i className="fa fa-bars"></i>
            <nav id="nav-bar" className="fixed-bottom">
                <ul className="nav nav-fill justify-content-center w-100">
                    <li className="nav-item">
                        <Link to="/">
                            {/* <span><i class="bi bi-house-door-fill"></i></span> */}
                            {/* <br/> */}
                        Introdução
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="permissao-do-trabalho">
                            {/* <span><i class="bi bi-bullseye"></i></span> */}
                            {/* <br/> */}
                        Permissão do trabalho
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link>
                            {/* <span><i class="bi bi-bullseye"></i></span> */}
                            {/* <br/> */}
                        Bloqueio eletromecânico
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link>
                            {/* <span><i class="bi bi-bullseye"></i></span> */}
                            {/* <br/> */}
                        Tipos de trabalho
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link>
                            {/* <span><i class="bi bi-bullseye"></i></span> */}
                            {/* <br/> */}
                        Espaço confinado
                    </Link>
                    </li >
                    <li className="nav-item">
                        <Link>
                            {/* <span><i class="bi bi-bullseye"></i></span> */}
                            {/* <br/> */}
                        Movimentação de cargas
                    </Link>
                    </li >
                    <li className="nav-item">
                        <Link>
                            {/* <span><i class="bi bi-bullseye"></i></span> */}
                            {/* <br/> */}
                        Operadores de máquinas
                    </Link>
                    </li >
                    <li className="nav-item">
                        <Link>
                            {/* <span><i class="bi bi-bullseye"></i></span> */}
                            {/* <br/> */}
                        Produtos químicos
                    </Link>
                    </li >
                    <li className="nav-item">
                        <Link>
                            {/* <span><i class="bi bi-bullseye"></i></span> */}
                            {/* <br/> */}
                        Plano de Ação e Emergência
                    </Link>
                    </li >
                    <li className="nav-item">
                        <Link>
                            {/* <span><i class="bi bi-bullseye"></i></span> */}
                            {/* <br/> */}
                        Regras Gerais e Dicas
                    </Link>
                    </li >
                    <li className="nav-item">
                        <Link>
                            {/* <span><i class="bi bi-bullseye"></i></span> */}
                            {/* <br/> */}
                        Testando Conhecimentos
                    </Link>
                    </li >
                    <li className="nav-item">
                        <Link>
                            {/* <span><i class="bi bi-bullseye"></i></span> */}
                            {/* <br/> */}
                        Conclusão
                    </Link>
                    </li >
                </ul >
            </nav >
        </div>
    );
}

export default NavBar;