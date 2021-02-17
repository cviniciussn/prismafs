import React from 'react';

// import { Container } from './styles';

function Alert(props) {
    return (
        <div id={props.id} className="opacity-0">
            <div className="row justify-content-center">
                <div className="col-md-10 alert alert-warning box-shadow-custom">
                    <p className="my-3">
                        {props.children}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Alert;