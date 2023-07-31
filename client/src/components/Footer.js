import logo from "../assets/logo.svg";
function Footer()
{
    return(
        <footer class="bg-dark" style={{color:"white"}}>
        <div class="container py-5">
          <div class="row py-4">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src={logo}  class="mt-1 mb-1" style={{width:"25px",height:"25px",marginRight:"10px"}} alt="Logo" />
              <p class="font-italic">Epidemic Sounds</p>
              <ul class="list-inline mt-4">
                <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="fa fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fa fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fa fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><i class="fa fa-pinterest"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="vimeo"><i class="fa fa-vimeo"></i></a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">Epidemic Songs</h6>
              <ul class="list-unstyled mb-0">
                <li class="mb-2"><a href="#" style={{color:"white"}}>Tracks</a></li>
                <li class="mb-2"><a href="#" style={{color:"white"}}>Playlists</a></li>
                <li class="mb-2"><a href="#" style={{color:"white"}}>View Playlists</a></li>
                <li class="mb-2"><a href="#" style={{color:"white"}}>Add Playlists</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">Playlists</h6>
              <ul class="list-unstyled mb-0">
                <li class="mb-2"><a href="#" style={{color:"white"}}>Add Playlists</a></li>
                <li class="mb-2"><a href="#" style={{color:"white"}}>View Playlists</a></li>
                <li class="mb-2"><a href="#" style={{color:"white"}}>Add songs</a></li>
                <li class="mb-2"><a href="#" style={{color:"white"}}>Remove songs</a></li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">Epidemic Sounds</h6>
              <p class="text-muted mb-4">Have a musical world</p>
              <div class="p-1">
               Music world-2023
              </div>
            </div>
          </div>
        </div>
    
      
        <div class="bg-light py-4">
          <div class="container text-center">
            <p class="text-muted mb-0 py-2">@ Epidemic sounds- 2023</p>
          </div>
        </div>
      </footer>
    )
}
export default Footer