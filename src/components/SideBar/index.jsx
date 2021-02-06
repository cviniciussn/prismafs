import React from 'react';
import '../../js/main'
import '../../css/style.css'
import '../../fonts/fonts.css'

import logo from '../../img/logo_top4.PNG'

import { Link } from 'react-router-dom'


export default function SideBar() {
	return (
		<div>
			<div className="wrapper d-flex align-items-stretch">
				<nav id="sidebar">
					<div className="custom-menu">
						<button type="button" id="sidebarCollapse" className="btn btn-primary">
							<i className="fa fa-bars"></i>
						</button>
					</div>
					{/* <img className="logo" src={logo} alt="BSBios" /> */}
					<ul data-spy="scroll" data-offset="0" className="scrollspy-nav components m-0">
						<li>
							<Link to="/">
								<span><i className="bi bi-house-door-fill"></i></span>
								{/* <br/> */}
                        			Introdução
								</Link>
						</li>
						<li>
							<Link to="permissao-do-trabalho">
								<span><i>1.</i></span>
								{/* <br/> */}
									Permissão do trabalho
								</Link>
						</li>
						<li>
							<a href="#">
								<span><i>2.</i></span>
								{/* <br/> */}
                        			Bloqueio eletromecânico
								</a>
						</li>
						<li>
							<a href="#">
								<span><i>3.</i></span>
								{/* <br/> */}
                        			Tipos de trabalho
								</a>
						</li>
						<li>
							<a href="#">
								<span><i>4.</i></span>
								{/* <br/> */}
                        			Espaço confinado
								</a>
						</li >
						<li>
							<a href="#">
								<span><i>5.</i></span>
								{/* <br/> */}
                        			Movimentação de cargas
								</a>
						</li >
						<li>
							<a href="#">
								<span><i>6.</i></span>
								{/* <br/> */}
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
								<span><i>8.</i></span>
								{/* <br/> */}
                        			Plano de Ação e Emergência
								</a>
						</li >
						<li>
							<a href="#">
								<span><i>9.</i></span>
								{/* <br/> */}
                        			Regras Gerais e Dicas
								</a>
						</li >
						<li>
							<a href="#">
								<span><i>10.</i></span>
								{/* <br/> */}
                        			Testando Conhecimentos
								</a>
						</li >
						<li>
							<a href="#">
								<span><i className="bi bi-bullseye">.</i></span>
								{/* <br/> */}
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