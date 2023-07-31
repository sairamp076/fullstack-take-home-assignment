import React, { useRef, useState,useEffect} from 'react';
import styles from "../App.module.css";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import PlayListTrackRow from './PlayListTrackRow';
const AddTracks = ({playListId,setUpdate,update}) => {
    let [tracks,setTracks]=useState([])
    let [searchText,setSearchText]=useState('')
    useEffect(() => {
        fetch("http://localhost:8000/tracks/", { mode: "cors" })
          .then((res) => res.json())
          .then((data) => setTracks(data));
      }, []);

    const filteredTracks = tracks.filter((track) =>
    track.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddElement = (trackId) => {
   
  
    const url = `http://localhost:8000/playlists/${playListId}/add_track/`;

 
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "track_id":trackId }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Track added:', data);
        setUpdate(!update)
     
      })
      .catch((error) => {
        console.error('Error adding track:', error);
      });
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
          <h5 className="modal-title mx-2" id="playlistModalLabel" style={{color:"black"}}>
                Add Track
              </h5>
   
              <form className="d-flex">
    <input
        type="text"
        className="form-control me-2"
        placeholder="Search Songs"
        value={searchText}
        style={{color:"black"}}
            onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
              <div class="row">
      
</div>
    <div>
   {filteredTracks.map((track, ix) => (
          <PlayListTrackRow key={ix} track={track}  handleAddElement={handleAddElement} array={filteredTracks}/>
        ))}
    </div>
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default AddTracks;
