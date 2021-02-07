import React from 'react';
import '../../js/main'
import '../../css/style.css'
import '../../fonts/fonts.css'

import logo from '../../img/logo_top4.PNG'

import { Link } from 'react-router-dom'

import $ from 'jquery'

export default function SideBar() {

	// $("#ddd").on("click", function(){
	// 	$("#menuBottom").scrollLeft	+= 100;
	// });

	$("#ddd").on("click", function () {
		document.getElementById("menuBottom").scrollLeft += 50;
	});

	return (
		<div>
			<div className="wrapper d-flex align-items-stretch">
				<nav id="sidebar">
					<div className="custom-menu">
						<button type="button" id="sidebarCollapse" className="btn btn-primary">
							<i className="fa fa-bars"></i>
						</button>
					</div>
				
					<a type="button" className="arrow arrowLeft">
						<i className="bi bi-caret-left-fill"></i>
					</a>
					<a type="button" id="ddd" className="arrow arrowRight">
						<i className="bi bi-caret-right-fill"></i>
					</a>


					<img id="logotype" className="logotype" src={logo} alt="BSBios" />

					<ul id="menuBottom" data-spy="scroll" data-offset="0" className="components m-0">
						<li>
							<Link to="#">
								<span><i className="bi bi-house-door"></i></span>
								<br/>
                        			Introdução
								</Link>
						</li>
						<li>
							<Link to="#">
								<span><i className="bi bi-clipboard-check"></i></span>
								<br/>
									Permissão de trabalho
								</Link>
						</li>
						<li>
							<a href="#">
								<span><i className="bi bi-slash-circle"></i></span>
								<br/>
                        			Bloqueio eletromecânico
								</a>
						</li>
						<li>
							<a href="#">
								<span><i className="bi bi-tools"></i></span>
								<br/>
                        			Tipos de trabalho
								</a>
						</li>
						<li>
							<a href="#">
								<span><i className="bi bi-arrows-angle-contract"></i></span>
								<br/>
                        			Espaço confinado
								</a>
						</li >
						<li>
							<a href="#">
								{/* <span><i className="bi bi-gear"></i></span> */}
								<span><i className="bi bi-truck"></i></span>
								<br/>
                        			Movimentação de cargas
								</a>
						</li >
						<li>
							<a href="#">
								<span><i className="bi bi-geo"></i></span>
								<br/>
                        			Operadores de máquinas
								</a>
						</li >
						<li>
							<a href="#">
								<span><i>7.</i></span>
								{/* <br/> */}
                        			Produtos químicos
								</a>
						</li >
						<li>
							<a href="#">
								<span><i className="bi bi-exclamation-triangle"></i></span>
								<br/>
                        			Plano de Ação e Emergência
								</a>
						</li >
						<li>
							<a href="#">
								<span><i className="bi bi-lightbulb"></i></span>
								<br/>
                        			Regras Gerais e Dicas
								</a>
						</li >
						<li>
							<a href="#">
								<span><i className="bi bi-book"></i></span>
								<br/>
                        			Testando Conhecimentos
								</a>
						</li >
						<li>
							<a href="#">
								<span><i className="bi bi-bullseye">.</i></span>
								<br/>
                        			Conclusão
								</a>
						</li >
					</ul>
				</nav>

				{/* <!-- Page Content  --> */}
				<div id="content">

					<h2 className="mb-4">Sidebar #02</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>

		</div>
	);
}