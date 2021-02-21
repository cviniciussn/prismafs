import React from 'react';
import $ from 'jquery';
import { motion } from 'framer-motion';

function ButtonCollapseImg(props) {

    $(document).ready(() => {

        $("button").on('click', () => {

        });
    });

    return (
        <div className="col-md-4 text-center my-3">
            <button className="btn btn-custom rounded-top-custom box-shadow-custom w-100" id={props.idBtn} type="button" data-toggle="collapse"
                data-target={"#" + props.idImg}
                role="button"
                aria-expanded="false"
                aria-controlsdata-target={"#" + props.idImg}>

                {props.title}

            </button>

            <div className="card-body collapse multi-collapse p-0" id={props.idImg}>

                <motion.img src={props.imgSrc} className="w-100 rounded-bottom box-shadow-custom"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                />

            </div>
        </div>
    );
}
export default ButtonCollapseImg;