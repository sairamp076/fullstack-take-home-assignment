import React, { useState, useEffect } from "react";
import styles from "../App.module.css";
import logo from "../assets/logo.svg";
import NewPlayListForm from "./NewPlayListForm";
import ListPlay from "./LIstPlay";

function PlayLists() {
    const [playLists, setPlaylists] = useState([]);
    const [clickVal,setClickVal]=useState(0);
    const [isDeleted, setIsDeleted] = useState(false);
   
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState();
    const [currentPage, setCurrentPage] = useState(1);
  
  
    const totalPages = Math.ceil(playLists.length / 5);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
  
    const indexOfLastItem = currentPage *5;
    const indexOfFirstItem = indexOfLastItem - 5;
  
    let [searchText,setSearchText]=useState('')
    const filteredPlayLists = playLists.filter((playlist) =>
    playlist.title.toLowerCase().includes(searchText.toLowerCase())
  );
    const currentItems = filteredPlayLists.slice(indexOfFirstItem, indexOfLastItem);
    useEffect(() => {
      fetch("http://localhost:8000/playlists/", { mode: "cors" })
        .then((res) => res.json())
        .then((data) => setPlaylists(data));
    }, [isDeleted]);
           // Function to handle the DELETE request
           const handleDelete = (id) => {
     
            const url = `http://localhost:8000/playlists/${id}/`;
        
            // Make the DELETE request using fetch with the method 'DELETE'
            fetch(url, {
              method: 'DELETE'
            })
              .then(response => {
                if (response.ok) {
                  console.log('Playlist deleted successfully.');
                  setIsDeleted(true)
              
                } else {
                  console.error('Failed to delete playlist.');
                }
              })
              .catch(error => console.error('Error deleting playlist:', error));
  
           
          
  
          };
    
  return (
    <>
      <div class="h2 mt-3" style={{fontFamily:"initial",display:"grid",placeItems:"center"}}>
            PlayLists for You
            </div>
            <form className="d-flex w-50 mt-4" style={{marginLeft:"16%",marginRight:"auto"}}>
    <input
        type="text"
        className="form-control me-2 border border-dark-subtle"
        placeholder={"Search Playlists"}
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
        style={{color:"black"}}
            
      />
    </form>
            <NewPlayListForm/>
            <table class="table mt-4 table-hover" style={{width:"75%",marginLeft:"16%",marginRight:"auto"}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">PlayList</th>
      <th scope="col">Description</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
 {currentItems.map((playList) => (
  <ListPlay key={playList.id} playList={playList} handleDelete={handleDelete}/>
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
    </>
  );
}

export default PlayLists;