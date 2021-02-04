import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap-icons'

function NavBar() {
    return (
        <nav id="nav-bar" className="fixed-bottom">
            <ul className="nav nav-fill justify-content-center w-100">
                <li className="nav-item">
                    <Link to="/">
                        <span><i class="bi bi-house-door-fill"></i></span>
                        Introdução
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="permissao-do-trabalho">
                        Permissão do Trabalho
                    </Link>
                </li>
                <li className="nav-item">
                    <Link>
                        Cultura
                    </Link>
                </li>
                <li className="nav-item">
                    <Link>
                        Compromisso
                    </Link>
                </li>
                <li className="nav-item">
                    <Link>
                        IMS + onePSS
                    </Link>
                </li >
                <li className="nav-item">
                    <Link>
                        Objetivos
                    </Link>
                </li >
                <li className="nav-item">
                    <Link>
                        Quem somos
                    </Link>
                </li >
                <li className="nav-item">
                    <Link>
                        Encerramento
                    </Link>
                </li >
            </ul >
        </nav >
    );
}

export default NavBar;