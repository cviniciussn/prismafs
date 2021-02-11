import React from 'react';

import '../../../css/animate.css'
import '../style.css'
import './script.js'


import '../../../components/ButtonsPanel/script'


import img01 from '../../../img/img01.jpg'
import img02 from '../../../img/img02.jpg'

function Introducao() {
    return (
        <div>
            <div className="mySlides">
                {/* Apresentar as fotos uma a uma, após um intervalo de tempo para visualização. Após isso, 
                liberar a seta de avançar. */}
                <div className="text-center">
                    <img id="img1" className="img-01 text-center opacity-0" src={img01} alt="Imagem 1" />
                    {/* >>> */}

                    <img id="img2" className="img-01 text-center opacity-0" src={img02} alt="Imagem 2" />

                </div>

                {/* >>> */}

                <p id="pgf-01" className=" text-center opacity-0">
                    Imagens como essas nos chocam e podem gerar um certo receio em você, não é mesmo?
                    </p>

                {/* >>> */}

                <p id="pgf-02" className=" text-center opacity-0">
                    Mas lembre-se que está ingressando em uma Empresa que tem a segurança como um valor.
                    </p>

                {/* >>> */}

                <p id="pgf-03" className=" text-center opacity-0">
                    E que, sabendo verificar o risco oferecido pelas tarefas a serem executadas
                    e obtendo os cuidados necessários em sua realização, você pode mudar seu comportamento
                    e evitar esses e vários outros acidentes.
                    </p>
            </div>
        </div>
    );
}

export default Introducao;