import React from 'react';

function Card(props) {
    return (
        <div className="card col-md-8 my-3 box-shadow-custom" id={props.id}>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}
export default Card;