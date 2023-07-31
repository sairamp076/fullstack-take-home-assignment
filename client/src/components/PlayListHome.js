import React, { useState, useEffect } from "react";
import styles from "./TrackRow.module.css";
import logo from "../assets/logo.svg";
import { useLocation} from "react-router-dom";
import Nav from "./Nav";
import PlayListTrackHome from "./PlayListTrackHome";
import Footer from "./Footer";
import AudioPlayListPlayer from "./AudioPlayListPlayer";
import AddTracks from "./AddTracks";

function PlayListHome() {
    const location = useLocation();
    const playListId=location.pathname.substring(location.pathname.lastIndexOf("/")+1,location.pathname.length)
    const [playList, setPlayList] = useState([]);
    const [update,setUpdate]=useState(false)
    const [now,setNow]=useState()
    
 const [playFlag,setPlayFlag]=useState(false)
    useEffect(() => {
        //getplaylistdetails
        fetch(`http://localhost:8000/playlists/${playListId}`+"/", { mode: "cors" })
          .then((res) => res.json())
          .then((data) => setPlayList(data));
    
    },[update]);


    const handleRemoveElement = (trackId) => {
   
        const url = `http://localhost:8000/playlists/${playListId}/remove_track/`;
    
        // Make the DELETE request using fetch with the method 'DELETE'
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "track_id":trackId }),
        })
          .then(response => {
            if (response.ok) {
              console.log('track deleted successfully from playlist');
             setUpdate(!update)
          
            } else {
              console.error('Failed to delete playlist.');
            }
          })
          .catch(error => console.error('Error deleting playlist:', error));
    
       
      
    
      };
  return (
    <>
      <Nav/>
      <div class="card mb-5 mt-5 shadow-lg"  style={{width:"800px",marginLeft:"auto",marginRight:"auto"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/music_green.png" class="img-fluid rounded-start" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"># {playList.title}</h5>
        <p class="card-text">{playList.description}.</p>
        <p class="card-text"><small class="text-body-secondary"> {playList.tracks && playList.tracks.length} songs - 8.45 min</small></p>
        Play
        {
        <button className={styles.trackPlay+" mx-3"} onClick={()=>setPlayFlag(true)} style={{color:"white"}}>
       <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 12L8 5V19L20 12Z" fill="white" />
        </svg>

      </button>
}
      {playFlag && playList.tracks && playList.tracks.length && <AudioPlayListPlayer tracks={playList.tracks}/>}
      {playFlag && <div class="mt-3">Now Playing --------<b> Slum Village</b></div>}
      </div>
    </div>
  </div>
</div>
<div class="mt-5 mb-5">
   {playList.tracks && playList.tracks.length && <PlayListTrackHome playList={playList} handleRemoveElement={handleRemoveElement}  setNow={setNow} playFlag={playFlag} setPlayFlag={setPlayFlag}/>
}
</div>
<AddTracks playListId={playList.id} setUpdate={setUpdate} update={update}/>
<Footer/>
    </>
  );
}

export default PlayListHome;