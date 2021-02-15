import React from 'react';
import "../index.css"

function Content(props) {
    return (
        <div id="content">
                {props.children}
        </div>
    );
}

export default Content;