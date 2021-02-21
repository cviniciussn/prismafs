import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../js/main';
import '../../css/style.css';

import logo from '../../img/logo_top4.PNG';
import $ from 'jquery';
import '../../js/main';

export default function SideBar() {
	// const [count, setCount] = useState(0);

	// console.log()
	// $(document).ready(function () {
	// 	$(".arrowRight").on("click", function () {
	// 		setCount(count + 100)
	// 	});
	// 	$(".arrowLeft").on("click", function () {
	// 		setCount(count - 100)
	// 	});
	// })

	


	return (
		<nav id="sidebar" className="opacity-0">
			<div className="custom-menu">
				<button type="button" id="sidebarCollapse" className="btn btn-primary">
					<i className="fa fa-bars"></i>
				</button>
			</div>

			<a type="button" className="arrow arrowLeft">
				<i className="bi bi-caret-left-fill"></i>
			</a>

			<ul className="menuBar components m-0">
				<li>
					<NavLink exact to="/">
						<span className="icon"><i className="bi bi-house-door-fill"></i></span><br />
						Introdução
					</NavLink>
				</li>
				<li>
					<NavLink to="permissao-de-trabalho" id="permissao-de-trabalho">
						{/* <span className="icon"><i className="bi bi-clipboard-check"></i></span> */}
						<span className="icon"><i className="fas fa-clipboard-check"></i></span><br />
						Permissão de Trabalho
					</NavLink>
				</li>
				<li>
					<NavLink to="bloqueio-eletromecanico">
						<span className="icon"><i class="fas fa-lock"></i></span><br />
                     	Bloqueio Eletromecânico
					</NavLink>
				</li>
				<li>
					<NavLink to="trabalho-com-eletricidade">
						<span className="icon"><i class="fas fa-bolt"></i></span><br />
						Trabalho com Eletricidade
					</NavLink>
				</li>
				<li>
					<NavLink to="trabalho-a-quente">
						<span className="icon"><i className="fas fa-fire-alt"></i></span><br />
						Trabalho a Quente
					</NavLink>
				</li>
				<li>
					<NavLink to="trabalho-em-altura">
						<span className="icon"><i class="fas fa-sort-amount-up-alt"></i></span><br />
						Trabalho em Altura
					</NavLink>
				</li>
				<li>
					<NavLink to="espaco-confinado">
						<span className="icon"><i className="fas fa-compress-alt"></i></span><br />
                        Espaço Confinado
					</NavLink>
				</li >
				<li>
					<NavLink to="movimentacao-de-cargas">
						{/* <span className="icon"><i className="bi bi-gear"></i></span> */}
						<span className="icon"><i className="fas fa-truck-loading"></i></span><br />
                        Movimentação de Cargas
					</NavLink>
				</li >
				<li>
					<NavLink to="operadores-de-maquinas">
						{/* <span className="icon"><i className="bi bi-geo"></i></span> */}
						<span className="icon"><i className="fas fa-cogs"></i></span><br />
						Operadores de Máquinas
					</NavLink>
				</li >
				<li>
					<NavLink to="produtos-quimicos">
						<span className="icon"><i className="fas fa-flask"></i></span><br />
						Produtos Químicos
					</NavLink>
				</li >
				<li>
					<NavLink to="plano-de-acao-e-emergencia">
						<span className="icon"><i class="fas fa-running"></i></span><br />
						Plano de Ação e Emergência
					</NavLink>
				</li >
				<li>
					<NavLink to="regras-gerais-e-dicas">
						<span className="icon"><i className="bi bi-lightbulb"></i></span><br />
						Regras Gerais e Dicas
					</NavLink>
				</li >
				<li>
					<NavLink to="testando-conhecimentos">
						<span className="icon"><i className="bi bi-book"></i></span><br />
						Testando Conhecimentos
					</NavLink>
				</li >
				<li>
					<NavLink to="conclusao">
						<span className="icon"><i className="bi bi-bullseye"></i></span><br />
                        Conclusão
					</NavLink>
				</li >
			</ul>
			
			<a type="button" className="arrow arrowRight">
				<i className="bi bi-caret-right-fill"></i>
			</a>
		</nav>
	);
}