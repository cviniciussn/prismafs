import React from 'react';
import { motion } from "framer-motion";

function ImgZoom(props) {
    const imgSrc = props.imgSrc;
    const height = props.height;
    const width = props.width;
    const scaleZoom = props.scaleZoom

    return (

        <motion.img className="rounded box-shadow-custom"
            height={height}
            width={width}
            src={imgSrc} alt=""
            whileHover={{ scale: scaleZoom }}
        />

    );
}

export default ImgZoom;