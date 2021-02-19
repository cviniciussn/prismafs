import React from 'react';
import $ from 'jquery';
import '../../js/main';

function SquareCollapseText(props) {

    const title = props.title;
    const idBtn = props.idBtn;
    const idCard = props.idCard;

    $(document).ready(() => {

        $("button").on('click', () => {
            $("#" + idCard);

        });
    });

    return (
        <div className="row">
            <button className="cursor-pointer square-custom btn btn-custom box-shadow-custom" id={props.idBtn} type="button">
                {props.title}
            </button>

            <div className="card card-x box-shadow-custom" id={idCard}>
                <div className="card-body p-1" id={props.idImg}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default SquareCollapseText;