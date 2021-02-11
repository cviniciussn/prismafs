import React from 'react';

import '../../../css/animate.css'
import '../style.css'
import './script.js'


import '../../../components/ButtonsPanel/script'


// import img01 from '../../../img/img01.jpg'
// import img02 from '../../../img/img02.jpg'

function Introducao() {
    return (
        <div>
            <div className="mySlides">
                <p>
                    Nesse módulo, você conhecerá <strong>outras informações</strong> sobre o Sistema de Saúde e Segurança do Trabalho da
                    BSBIOS e, assim, poderá <strong>se prevenir ainda mais</strong> de acidentes, incidentes, desvios e doenças ocupacionais.
                </p>

                {/* >>> */}

                <h2 className="text-center">
                    Bem-vindo ao curso:<br />
                    <u>Saúde e Segurança do Trabalho – Módulo II</u>
                </h2>
            </div>
        </div>
    );
}

export default Introducao;