import React from 'react';
import 'bootstrap'


function ArrowProgress(props) {
   const x = () => {
        setTimeout(
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth"
            }, 5000)
        )


    }
    var rrr = "#" + props.rr

    return (
        <div className="text-center p-0"  >
            <a id='' onClick={x} className="btn btn-custom my-3 w-30" type="button" data-toggle="collapse" href={rrr} role="button" aria-expanded="false" aria-controls={props.rr}>
                <i className="fas fa-angle-double-down"></i>
            </a>
        </div >
    );
}

export default ArrowProgress;