import React from 'react';
import $ from 'jquery';

function Alert(props) {
    const id = props.id
    const idH4 = props.idH4
    const idH3 = props.idH3

    setInterval(() => {

    }, 5000);

    if ($('#' + idH4).valueOf() === null) {
        $('h4').addClass('display-none');
    } else {
    }

    if ($('#' + idH3).valueOf() === null) {
        $('h3').addClass('display-none');
    } else {
    }

    return (
        <div id={id} className="py-3">
            <div className="row justify-content-center text-center">
                <div className="col-sm-10 alert alert-success box-shadow-custom" style={{borderRadius:"20px"}}>
                    <p className="">
                        <h3 id={idH3} className="text-center"><strong>{props.title}</strong></h3>
                        <h4 id={idH4} className="d-flex justify-content-center">{props.subtitle}</h4>
                        {props.children}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Alert;