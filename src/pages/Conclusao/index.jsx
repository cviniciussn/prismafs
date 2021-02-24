import React from 'react';
import '../../css/animate.css';
import { Topico } from '../../components';
import $ from 'jquery'

$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });

function Conclusao() {
    return (
        <Topico id="conclusao">
            <h1 className="title text-center opacity">Conclusao</h1>
        </Topico>
    );
}

export default Conclusao;