import React from 'react';
import 'bootstrap'
import {motion} from 'framer-motion'


function DivArrowNext(props) {

    return (
        <div className="collapse animate__animated animate__slideInDown" id={props.nm}>
            {props.children}
        </div>
    )}

export default DivArrowNext;