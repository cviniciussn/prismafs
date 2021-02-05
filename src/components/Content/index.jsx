import React from 'react';
import "../index.css"

function Content(props) {
    return (
        <div id="content" className="card" data-spy="scroll" data-target="#nav-bar">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default Content;