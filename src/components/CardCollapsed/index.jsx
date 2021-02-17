import React from 'react';

function CardCollapsed(props) {
    return (
        <div className="card collapse col-md-6" id={props.id}>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default CardCollapsed;