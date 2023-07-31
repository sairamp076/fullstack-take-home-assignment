import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import Nav from "./Nav"
import styles from "./TrackRow.module.css";

function Menu({active,setActive}) {
  

  return (
    <>
       
           <div class="col-sm-2 border bg-secondary-subtle" style={{height:"86vh"}}>
           <div class="button-container">
           <ul style={{listStyle:"none"}}>
            <li style={{marginTop:"100%",marginLeft:"20%"}}>
              <button class={active==true?"btn btn-dark":"btn btn-outline-dark"} style={{border:"none"}} onClick={()=>setActive(!active)}>
                Tracks
              </button>
            </li>
            <li  style={{marginTop:"25%",marginLeft:"20%"}}>
              <button class={active==false?"btn btn-dark":"btn btn-outline-dark"} style={{border:"none"}} onClick={()=>setActive(!active)}>
                Playlists
                </button>
            </li>
          </ul>
            </div>
           </div>
     </>
  );
}

export default Menu;
