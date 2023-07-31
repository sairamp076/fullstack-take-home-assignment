import React, { useState, useEffect } from "react";
import styles from "../App.module.css";
import logo from "../assets/logo.svg";
import TrackRow from "./TrackRow";
import AudioPlayer from "./AudioPlayer";
function Tracks() {

    const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState();
  const [currentPage, setCurrentPage] = useState(1);


  const totalPages = Math.ceil(tracks.length / 6);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const indexOfLastItem = currentPage *6;
  const indexOfFirstItem = indexOfLastItem - 6;
  let [searchText,setSearchText]=useState('')
  const filteredTracks = tracks.filter((track) =>
  track.title.toLowerCase().includes(searchText.toLowerCase())
);
 
  const currentItems = filteredTracks.slice(indexOfFirstItem, indexOfLastItem);
  const [title,setTitle]=useState(0)
  const [order,setOrder]=useState(0)
  const [gener,setGener]=useState(0)
  const [gorder,setGOrder]=useState(0)
  const [time,setTime]=useState(0)
  const [torder,setTOrder]=useState(0)
  function sort(param,order){
  
    if(param==="title" && order===0){

  const sortedDataATitle =currentItems.sort((a,b)=>{
    return a.title.localeCompare(b.title)
  }
  )
setTitle(1)
setOrder(!order)
  setTracks(sortedDataATitle)
}
if(param==="title" && order===1){
  const sortedDataBTitle =currentItems.sort((a,b)=>{
    return b.title.localeCompare(a.title)
  }
  )
  setTitle(2)
  setOrder(!order)
  setTracks(sortedDataBTitle)
}

if(param==="generes" && gorder===0){

  const sortedDataAGTitle =currentItems.sort((a,b)=>{
    return a.genres[0].localeCompare(b.genres[0])
  }
  )
setGener(1)
setGOrder(!gorder)
  setTracks(sortedDataAGTitle)
}
if(param==="generes" && gorder===1){

  const sortedDataBGTitle =currentItems.sort((a,b)=>{
    return b.genres[0].localeCompare(a.genres[0])
  }
  )
setGener(2)
setGOrder(!gorder)
  setTracks(sortedDataBGTitle)
}

if(param=="time" && torder==0){

  const sortedDataATTitle =currentItems.sort((a,b)=>{
    return a.length>b.length?1:-1
  }
  )
setTime(1)
setTOrder(!torder)
  setTracks(sortedDataATTitle)
}

if(param=="time" && torder==1){

  const sortedDataBTTitle =currentItems.sort((a,b)=>{
    return b.length>a.length?1:-1
  }
  )
setTime(0)
setTOrder(!torder)
  setTracks(sortedDataBTTitle)
}
  }
  
  useEffect(() => {
    fetch("http://localhost:8000/tracks/", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => setTracks(data));
  }, []);
  const handlePlay = (track) => setCurrentTrack(track);

  return (
    <>
      <div class="h2 mt-3" style={{fontFamily:"initial",display:"grid",placeItems:"center"}}>
            Tracks for You
            </div>
            <form className="d-flex w-50 mt-4" style={{marginLeft:"16%",marginRight:"auto"}}>
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
      <th scope="col" >        
      <button type="button" class="btn btn-light" style={{border:"none",background:"none"}} onClick={(title)=>sort("title",order)}>
      <span>Song</span>{' '}
      {
        title===0?<i  className={`fa fa-sort`} />: title===1?<i class="fa fa-sort-asc"></i>:<i class="fa fa-sort-desc"></i>
      }
      </button>
      </th>
      <th scope="col" >        
      <button type="button" class="btn btn-light" style={{border:"none",background:"none"}} onClick={(title)=>sort("generes",gorder)}>
      <span>Generes</span>{' '}
      {
        gener===0?<i  className={`fa fa-sort`} />: gener===1?<i class="fa fa-sort-asc"></i>:<i class="fa fa-sort-desc"></i>
      }
      </button>
      </th>
      <th scope="col" >        
      <button type="button" class="btn btn-light" style={{border:"none",background:"none"}} onClick={(title)=>sort("time",torder)}>
      <span>Time</span>{' '}
      {
        time===0?<i  className={`fa fa-sort`} />: time===1?<i class="fa fa-sort-asc"></i>:<i class="fa fa-sort-desc"></i>
      }
      </button>
      </th>
    </tr>
  </thead>
  <tbody>
            {currentItems.map((track, ix) => (
          <TrackRow key={ix} track={track} handlePlay={handlePlay} />
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
         {currentTrack && <AudioPlayer track={currentTrack} />}
    </>
  );
}

export default Tracks