import React from 'react';

function Modal(props) {
    return (
        <div>
            <div className="modal fade" id={props.id} tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                        {props.children}
                </div>
            </div>
        </div>
    )
}
export default Modal;