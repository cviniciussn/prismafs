import React from 'react';

function BlackBoard(props) {
    return (
        <div id="blackboard" className="">
            {props.children}
        </div>
    )
}

export default BlackBoard;