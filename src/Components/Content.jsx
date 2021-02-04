import React from 'react';
import "../index.css"

function Content(props) {
    return (
        <div id="content" className="container-fluid">
            <div className="row">
                <div className="col">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Content;