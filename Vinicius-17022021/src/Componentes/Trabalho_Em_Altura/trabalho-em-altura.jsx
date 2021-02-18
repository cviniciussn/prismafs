import React from 'react';
import './lateral'
import './lateral.css'
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'

function Componentes() {
    return <div style={{ marginTop: "20px", display:"flex", flexWrap:"wrap", flexDirection:"column"  }} >
        <div style={{marginRight:"100px"}}>
            <button type="button" class="btn btn-success btn-sm"
                data-toggle="toggle" data-target="#degrau1" style={{ height: "100px", width: "200px" }}>
                <h1>4</h1>
        </button>

            <div id="degrau1" class="">
                <img src={img4} alt="" />
            </div>
        </div>



        <div style={{marginRight:"300px"}}>
            <button type="button" class="btn btn-warning btn-sm"
                data-toggle="toggle" data-target="#degrau2" style={{ height: "100px", width: "200px" }}>
                <h1>3</h1>
        </button>

            <div id="degrau2" class="">
                <img src={img3} alt="" />
            </div>
        </div>


        <div style={{marginRight:"400px"}}>
            <button type="button" class="btn btn-secondary btn-sm"
                data-toggle="toggle" data-target="#degrau3" style={{ height: "100px", width: "200px" }}>
                <h1>2</h1>
        </button>

            <div id="degrau3" class="">
                <img src={img2} alt="" />
            </div>
        </div>


        <div style={{marginRight:"500px"}}>
            <button type="button" class="btn btn-primary btn-sm"
                data-toggle="toggle" data-target="#degrau4" style={{ height: "100px", width: "200px" }}>
                <h1>1</h1>
        </button>

            <div id="degrau4" class="">
                <img src={img1} alt="" />
            </div>
        </div>


    </div>




}

export default Componentes;