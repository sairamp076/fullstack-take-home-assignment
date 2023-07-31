import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import Nav from "./Nav"
import styles from "./TrackRow.module.css";
import Menu from "./Menu";
import Tracks from "./Tracks";
import Footer from "./Footer";
import PlayLists from "./PlayLists";

function HomePage() {
  let [active,setActive]=useState(true)

  return (
    <>
      
        <Nav/>
        <div class="row">
           <Menu active={active} setActive={setActive}/>
           <div class="col-sm-9">
            {active && <Tracks/>}
            {!active && <PlayLists/>}
           </div>
        </div>
        <Footer/>
     </>
  );
}

export default HomePage;
