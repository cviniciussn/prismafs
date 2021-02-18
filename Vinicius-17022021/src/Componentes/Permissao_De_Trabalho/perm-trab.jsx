import React from 'react';
import './perm-trab'
import './perm-trab.css'
import img1 from '../../img/PT/1.png'
import img2 from '../../img/PT/2.png'
import img3 from '../../img/PT/3.png'


function Componentes() {
    return (
    
    <div style={{ marginTop: "20px", display:"flex", flexWrap:"wrap", flexDirection:"column"  }} >

        <div style={{marginRight:"0px"}}>
            <button type="button" class="btn btn-primary btn-sm"
                data-toggle="toggle" data-target="#pt" style={{ height: "200px", width: "200px", borderRadius:"50%" }}>
                <h1>PT</h1>
        </button>

            <div id="pt" class="">
                <img src={img1} alt="" />
            </div>
        </div>



        <div style={{marginLeft:"0px"}}>
            <button type="button" class="btn btn-warning btn-sm"
                data-toggle="toggle" data-target="#pet" style={{ height: "200px", width: "200px", borderRadius:"50%" }}>
                <h1>PET</h1>
        </button>

            <div id="pet" class="">
                <img src={img2} alt="" />
            </div>
        </div>


        <div style={{marginRight:"0px"}}>
            <button type="button" class="btn btn-danger btn-sm"
                data-toggle="toggle" data-target="#pte" style={{ height: "200px", width: "200px" , borderRadius:"50%"}}>
                <h1>PTE</h1>
        </button>

            <div id="pte" class="">
                <img src={img3} alt="" />
            </div>
        </div>

</div>
    )}

export default Componentes;