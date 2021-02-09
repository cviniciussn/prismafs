import React from 'react';

function Introducao() {
    return (
        <div>
            <div id="slide01" className="slide-inner">
                <h2 className="text-center mb-4">Introdução</h2>

                {/* Apresentar as fotos uma a uma, após um intervalo de tempo para visualização. Após isso, 
                liberar a seta de avançar. */}

                <img src="" alt="Imagem 1" />{/* Foto de Escada alta como suporte para o trabalhador de gpointstudio na Envato Elements */}

                {/* >>> */}

                <img src="" alt="Imagem 2" />{/* Foto de Receptáculo de plugue de fio elétrico no fundo da parede de concreto de twenty20photos na Envato Elements */}

                {/* >>> */}
                <p>
                    Imagens como essas nos chocam e podem gerar um certo receio em você, não é mesmo?
                </p>
                <p>
                    Mas lembre-se que está ingressando em uma Empresa que tem a segurança como um valor.
                </p>
                <p>
                    E que, sabendo verificar o risco oferecido pelas tarefas a serem executadas
                    e obtendo os cuidados necessários em sua realização, você pode mudar seu comportamento
                    e evitar esses e vários outros acidentes.
                </p>
            </div>
            {/* -------------------------------------------------------------------------------------------- */}
            <div id="slide02">
                <p>
                    Nesse módulo, você conhecerá <strong>outras informações</strong> sobre o Sistema de Saúde e Segurança do Trabalho da
                    BSBIOS e, assim, poderá <strong>se prevenir ainda mais</strong> de acidentes, incidentes, desvios e doenças ocupacionais.
                </p>

                {/* >>> */}

                <h2 className="text-center">
                    Bem-vindo ao curso:
                <br />
                    <u>Saúde e Segurança do Trabalho – Módulo II</u>
                </h2>
            </div>
            {/* -------------------------------------------------------------------------------------------- */}
        </div>
    );
}

export default Introducao;