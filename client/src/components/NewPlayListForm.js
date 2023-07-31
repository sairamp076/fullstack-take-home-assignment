import React, { useRef, useState } from 'react';
import styles from "../App.module.css";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
const NewPlayListForm = () => {
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const uuid = uuidv4();
     
        const playlistData = {
          title: title,
          description: desc,
        };
    
        try {
          const response = await fetch("http://localhost:8000/playlists/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(playlistData),
          });
    
          if (!response.ok) {
           
            throw new Error("Failed to create playlist");
          }
        } catch (error) {
          console.error(error);
        }
      };
  const reset = () => {
   setDesc(" ")
   setTitle(" ")
  };

  return (
    <div className="container mt-4" >
          <button  data-bs-toggle="modal" className={styles.addNewButtonHome+" btn btn-secondary rounded-pill"} data-bs-target="#playlistModal">+</button>
      <div
     
        className="modal fade"
        id="playlistModal"
        tabIndex="-2"
        aria-labelledby="playlistModalLabel"
        aria-hidden="true"
        
        
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="playlistModalLabel" style={{color:"black"}}>
                Create a New Playlist
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={()=>reset()}
              ></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label htmlFor="playlistName" className="form-label" style={{color:"black"}}>
                    Playlist Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="playlistName"
                    name="playlistName"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label" style={{color:"black"}}>
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
                  />
                </div>
                <button type="button"  className="btn btn-dark opacity-75" onClick={(e)=>handleSubmit(e)}>
                  Let's Go
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlayListForm;
