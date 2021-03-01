import React from 'react';
import 'bootstrap'
import {motion, scrollMotionValue} from 'framer-motion'


function DivArrowNext(props) {

    return (
        <motion.div animate={{ scrollMotionValue: 100, duration: 2 }} initial={false}> 
        <div className="collapse animate__animated animate__slideInDown" id={props.nm}>
            {props.children}
        </div>
        </motion.div>
    )}

export default DivArrowNext;