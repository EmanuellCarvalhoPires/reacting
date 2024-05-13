import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
export default function AppHeader(){
    return (
<nav
  class="navbar navbar-expand-xxl" style={{
    backgroundColor: "#651771",
    color: "white",
    padding:"3px",
    width:"100%"
  }}
>
  <div class="container" style={{margin:"0px", maxWidth:"100%"}}>
    <a class="navbar-brand" href="a" style={{color: "white", fontWeight: "bold", fontSize: "20px", marginRight:"50px"}}>
      
      Integra<br></br> Biblio
      
    </a>
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="a" aria-current="page" style={{color: "white", marginLeft: "15px", marginRight:"15px" }}
            >Home
            <span class="visually-hidden">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="a" style={{color: "white", marginLeft: "15px", marginRight:"15px" }}>Login</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="a" style={{color: "white", marginLeft: "15px", marginRight:"15px" }}>Cadastre-se</a>
        </li>
      </ul>
      <form class="d-flex my-2 my-lg-0">
        <input
          class="form-control me-sm-2"
          type="text"
          placeholder="Search"
        />
        <button
          class="btn btn-outline-light bg-light my-2 my-sm-0"
          type="submit"
          style={{color: "gray"}}
        >
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

      
    )
}