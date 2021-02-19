import React from 'react';
import $ from 'jquery';
import '../../css/style.css';
import { fadeOutLeft } from '../../js/main';


function NextPage(props) {

    var id = props.id;
    var nextPagePath = props.nextPagePath;
    var currentPageId = props.currentPageId;

    $(document).ready(() => {

        $("#" + id).on('click', () => {
            fadeOutLeft("#" + currentPageId, 0)

            console.log('HAHAHA')
            $("#header").addClass('animated-middle slideOutUp');
            $("#sidebar").addClass('animated-middle slideOutDown');

            $("#sidebar").addClass('animated-middle fadeOut');

            setInterval(() => { window.location.href = nextPagePath; }, 2000);
            // setInterval(() => { $('#introducao').addClass('display-none'); }, 2000);
        });

    })

    return (
        <div className="container-fluid text-center">
            <button className="btn btn-custom my-3 " id={id} type="button"><strong>{props.children}</strong></button>
        </div>
    );
}

export default NextPage;