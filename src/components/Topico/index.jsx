import React from 'react';
import { motion } from "framer-motion";

function Topico(props) {
    const id = props.id

    const pageVariants = {
        out: {
            opacity: 0,
            x: "-100vw",
        },
        in: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            x: "100vw",
        }
    };

    const pageTransition = {
        type: 'spring', duration: 1, bounce: 0.25
    };

    return (
        <motion.div id={id}
            variants={pageVariants}
            transition={pageTransition}
            initial="out"
            animate="in"
            exit="exit"
        >
            {props.children}
        </motion.div>
    );
}

export default Topico;