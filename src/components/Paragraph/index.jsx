import React from 'react';
import $ from 'jquery';


function Paragraph(props) {

    return (
        <div className="container-fluid" id={props.id} >
            <div className="row">
                <div className="col">
                    <p className="d-flex justify-content-center my-3">
                        {props.children}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Paragraph;