import React from 'react';
import $ from 'jquery';


function Paragraph(props) {

    return (
        <div className="container-fluid" id={props.id} >
            <div className="row">
                <div className="col-md-12">
                    <p className="my-3">
                        {props.children}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Paragraph;