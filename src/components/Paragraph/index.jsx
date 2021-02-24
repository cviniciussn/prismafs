import React from 'react';
import $ from 'jquery';



function Paragraph(props) {

    return (
        <div className="container-fluid card shadow-lg p-3 mb-5 text-center w-75 p-3" style={{borderRadius:"20px"}} id={props.id} >
            <div className="row card-body">
                <div className="col">
                    <p className="justify-content-center my-2">
                        {props.children}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Paragraph;