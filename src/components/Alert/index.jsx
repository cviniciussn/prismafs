import React from 'react';

// import { Container } from './styles';

function Alert(props) {
    return (
        <div id={props.id} className="py-3">
            <div className="row justify-content-center">
                <div className="col-sm-10 alert alert-warning box-shadow-custom">
                    <p className="">
                        <h3 className="text-center"><strong>{props.title}</strong></h3>
                        <h4 className="text-center">{props.subtitle}</h4>
                        {props.children}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Alert;