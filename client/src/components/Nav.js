import React, { useState, useEffect } from "react";
import styles from "../App.module.css";
import logo from "../assets/logo.svg";

function Nav() {

    
  return (
    <>
      <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style={{fontFamily:"sans-serif"}}>
    <img src={logo}  class="mt-1 mb-1" style={{width:"25px",height:"25px",marginRight:"10px"}} alt="Logo" />
     Epidemic Sound
      </a>
    </div>

</nav>
    </>
  );
}

export default Nav;