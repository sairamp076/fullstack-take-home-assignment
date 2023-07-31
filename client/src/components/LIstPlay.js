import React from "react";
import styles from "./TrackRow.module.css";
import { useNavigate } from 'react-router-dom';
function ListPlay({playList,handleDelete}) {
    const navigate = useNavigate();
    const calculateTotalLength = () => {
        let totalLength = 0;
        for (const track of playList.tracks) {
          totalLength += (track.length)/60;
        }
        return totalLength.toFixed(2);
      };

const navigateUrl=(id)=>{
    navigate(`/playlist/${id}`);
}

  return (
  
    <tr key={playList.id}>
      <th scope="row">     <img src="https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/music_green.png" class="img-fluid rounded-start" alt="..." 
    style={{width:"50px",height:"50px"}}></img> </th>
      <td class="h2" style={{fontFamily:"initial"}}  >
        <button class="btn btn-light" onClick={()=>navigateUrl(playList.id)}>
        # {playList.title}
        </button>
        </td>
      <td class="h5 text-muted">{playList.description}</td>
      <td>
        <div class="row h5">
        {playList.tracks.length} songs
        </div>
        <div class="row text-muted">
            {calculateTotalLength()} minutes
        </div>
        </td>
      <td>
        <button class="btn btn-outline-danger" style={{border:"none",fontSize:"30px"}} onClick={()=>handleDelete(playList.id)}>
        -
        </button>
        </td>
    </tr>


  );
}

export default ListPlay;
