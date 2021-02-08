import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../js/main';
import '../../css/style.css';

import logo from '../../img/logo_top4.PNG';
import $ from 'jquery';
import '../../js/main';

export default function SideBar() {
	const [count, setCount] = useState(0);

	console.log()
	$(document).ready(function () {
		$(".arrowRight").on("click", function () {
			setCount(count + 1)
		});
		$(".arrowLeft").on("click", function () {
			setCount(count - 1)
		});
		console.log(count)
	})


	return (
		<nav id="sidebar">
			<div className="custom-menu">
				<button type="button" id="sidebarCollapse" className="btn btn-primary">
					<i className="fa fa-bars"></i>
				</button>
			</div>

			<img id="logotype" className="logotype mb-3" src={logo} alt="BSBios" />

			<a type="button" className="arrow arrowLeft">
				<i className="bi bi-caret-left-fill"></i>
			</a>
			<a type="button" className="arrow arrowRight">
				<i className="bi bi-caret-right-fill"></i>
			</a>

			<ul className="menuBar components m-0">
				<li>
					<Link to="#">
						<span className="icon"><i className="bi bi-house-door-fill"></i></span>
						<br />
                        			Introdução
								</Link>
				</li>
				<li>
					<Link to="#">
						{/* <span className="icon"><i className="bi bi-clipboard-check"></i></span> */}
						<span className="icon"><i class="fas fa-clipboard-check"></i></span>
						<br />
									Permissão de trabalho
								</Link>
				</li>
				<li>
					<a href="#">
						<span className="icon"><i className="bi bi-slash-circle"></i></span>
						<br />
                        			Bloqueio eletromecânico
								</a>
				</li>
				<li>
					<a href="#">
						<span className="icon"><i className="bi bi-tools"></i></span>
						<br />
                        			Tipos de trabalho
								</a>
				</li>
				<li>
					<a href="#">
						<span className="icon"><i class="fas fa-compress-alt"></i></span>
						<br />
                        			Espaço confinado
								</a>
				</li >
				<li>
					<a href="#">
						{/* <span className="icon"><i className="bi bi-gear"></i></span> */}
						<span className="icon"><i class="fas fa-truck-loading"></i></span>
						<br />
                        			Movimentação de cargas
								</a>
				</li >
				<li>
					<a href="#">
						{/* <span className="icon"><i className="bi bi-geo"></i></span> */}
						<span className="icon"><i class="fas fa-cogs"></i></span>
						<br />
                        			Operadores de máquinas
								</a>
				</li >
				<li>
					<a href="#">
						<span className="icon"><i className="fas fa-flask"></i></span>
						<br />
                        			Produtos químicos
								</a>
				</li >
				<li>
					<a href="#">
						<span className="icon"><i className="bi bi-exclamation-triangle"></i></span>
						<br />
                        			Plano de Ação e Emergência
								</a>
				</li >
				<li>
					<a href="#">
						<span className="icon"><i className="bi bi-lightbulb"></i></span>
						<br />
                        			Regras Gerais e Dicas
								</a>
				</li >
				<li>
					<a href="#">
						<span className="icon"><i className="bi bi-book"></i></span>
						<br />
                        			Testando Conhecimentos
								</a>
				</li >
				<li>
					<a href="#">
						<span className="icon"><i className="bi bi-bullseye">.</i></span>
						<br />
                        Conclusão
					</a>
				</li >
			</ul>
		</nav>
	);
}