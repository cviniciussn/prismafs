import React from 'react';

function ArrowProgress(props) {
    return (
        <div className="container-fluid text-center my-3">
            <a id={props.id} className="arrow-swap click opacity-0" type="button">
                <i class="fas fa-angle-double-up"></i>
            </a>
        </div>
    );
}

export default ArrowProgress;