import React from 'react';
import $ from 'jquery';
import "../index.css";

function Content(props) {


    return (
        <div id="content">
            {props.children}
        </div>
    );
}

export default Content;