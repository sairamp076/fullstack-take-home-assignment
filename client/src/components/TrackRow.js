import React from "react";
import styles from "./TrackRow.module.css";

function TrackRow({ track, handlePlay }) {
  return (
  
  
    <tr>
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
    </tr>
  );
}

export default TrackRow;
