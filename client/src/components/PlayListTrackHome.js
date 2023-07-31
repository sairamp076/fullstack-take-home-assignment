import React, { useState, useEffect } from "react";
import styles from "./TrackRow.module.css";
import logo from "../assets/logo.svg";
import TrackRow from "./TrackRow";
import AudioPlayer from "./AudioPlayer";
import AudioPlayListPlayer from "./AudioPlayListPlayer";
function PlayListTrackHome({playList, handleRemoveElement,setNow}) {

  const [currentTrack, setCurrentTrack] = useState();
  const [currentPage, setCurrentPage] = useState(1);



  const totalPages = Math.ceil(playList.tracks.length / 5);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const indexOfLastItem = currentPage *5;
  const indexOfFirstItem = indexOfLastItem - 5;

  let [searchText,setSearchText]=useState('')
  const filteredTracks = playList.tracks.filter((track) =>
  track.title.toLowerCase().includes(searchText.toLowerCase())
);
  const currentItems = filteredTracks.slice(indexOfFirstItem, indexOfLastItem);

  const handlePlay = (track) => setCurrentTrack(track) && setNow(track.title);
  return (
    <>
      <div class="h2 mt-3" style={{fontFamily:"initial",display:"grid",placeItems:"center"}}>
            Tracks for You
            </div>
            <form className="d-flex w-25 mt-4" style={{marginLeft:"16%",marginRight:"auto"}}>
    <input
        type="text"
        className="form-control me-2 border border-dark-subtle"
        placeholder={"Search Songs"}
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
        style={{color:"black"}}
            
      />
    </form>
            <table class="table mt-4 table-hover" style={{width:"75%",marginLeft:"16%",marginRight:"auto"}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Song</th>
      <th scope="col">Generes</th>
      <th scope="col">Time</th>
      <th scope="col">Remove Track</th>
    </tr>
  </thead>
  <tbody>
            {currentItems.map((track, ix) => (
           <tr key={ix}>
           <th scope="row">
           <button className={styles.trackPlay} onClick={() => handlePlay(track)}>
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
             </th>
           <td>
           <div className={styles.trackTitle}>{track.title}</div>
             <div className={styles.trackArtist}>
               {track.main_artists.join(", ")}
             </div>
           </td>
           <td>{track.genres}</td>
           <td>{(track.length/60).toFixed(2)} min</td>
           <td> <button class="btn btn-secondary rounded-pill" onClick={() =>  handleRemoveElement(track.id)} style={{marginLeft:"auto"}}>
        Remove
      </button></td>
         </tr>
        ))}
        </tbody>
        </table>
        <div style={{display:"flex",justifyContent:"center"}}>
            <div class="button-group mb-2" style={{marginLeft:"55px"}}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button class="btn btn-outline-success"
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={currentPage === pageNumber}
            >
              {pageNumber}
            </button>
          )
        )}
        </div>
      </div>
         {currentTrack &&  <AudioPlayer track={currentTrack} />}
         
    </>
  );
}

export default PlayListTrackHome