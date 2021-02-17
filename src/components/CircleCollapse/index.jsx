import React from 'react';
import $ from 'jquery';
// import { Container } from './styles';

function CircleCollapse(props) {


    return (
        <div id="card-custom" className="container-fluid py-3">
            <div className={props.classNameRow}>

                <buttom className={props.classNameButton} type="button">
                    {props.title}
                </buttom>
                <div className={props.classNameBtnCircle}>
                    {props.title}
                </div>

                <div className="card card-of-circle card-body">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default CircleCollapse;