import React from 'react';

// import { Container } from './styles';

function ArrowProgress(props) {
    return (
        <div className="container-fluid text-center my-3">
            <a id={props.id} className="arrow-progress click opacity-0" type="button">
                <i className="fas fa-angle-double-down"></i>
            </a>
        </div>
    );
}

export default ArrowProgress;