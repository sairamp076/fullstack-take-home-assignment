import React from "react";
import styles from "./TrackRow.module.css";

function PlayListTrackRow({ track,handleAddElement,array }) {
  return (
    <div className={styles.trackRow}>
      <button className={styles.trackPlay+" mx-2"}>
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
      <div className={styles.trackInfo}>
        <div className={styles.trackTitle} style={{marginLeft:"50px"}}>{track.title}</div>
        <div className={styles.trackArtist+" mx-5"}>
          {track.main_artists.join(", ")}
        </div>
      </div>
     
      <button class="btn btn-secondary rounded-pill" onClick={() => handleAddElement(track.id)} style={{marginLeft:"auto",marginRight:"50px"}}>
        Add
      </button>
    </div>
  );
}

export default PlayListTrackRow;