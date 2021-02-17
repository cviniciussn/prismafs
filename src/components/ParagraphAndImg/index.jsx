import React from 'react';

// import { Container } from './styles';

function ParagraphAndImg(props) {
    return (
        <div id={props.idItem} className="container-fluid my-3 mb-3 opacity-0">
            <div className="row g-0 flex-wrap-reverse align-items-center">
                <div id={props.idParagraph} className="col-md-6">
                    <div className="par-05 card-body">
                        {props.children}
                    </div>
                </div>
                <div className="col-md-6">
                    <img id={props.idImg} className="card-img" src={props.imgSrc} alt="Imagem3" />
                </div>
            </div>
        </div>
    );
}

export default ParagraphAndImg;