import React from 'react';

function Card(props) {
    return (
        <div className="card col-lg-8 my-3 box-shadow-custom" id={props.id}>
            <div className="card-body justify-content-center">
                {props.children}
            </div>
        </div>
    );
}
export default Card;