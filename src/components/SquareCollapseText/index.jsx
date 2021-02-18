import React from 'react';
import $ from 'jquery';

function SquareCollapseText(props) {

    $(document).ready(() => {

        $("button").on('click', () => {

        });
    });

    return (
        <div className="row my-3">

            <div className="click square-custom btn-custom box-shadow-custom" id={props.idBtn} type="button" data-toggle="collapse"
                data-target={"#" + props.idCard}
                role="button"
                aria-expanded="false"
                aria-controlsdata-target={"#" + props.idCard}>

                {props.title}
            </div>

            <div className="card collapse" id={props.idCard}>
                <div className="card-body p-0" id={props.idImg}>
                    {props.children}
                </div>
            </div>

        </div>
    );
}
export default SquareCollapseText;