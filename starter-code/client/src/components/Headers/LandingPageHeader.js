import React, {useState} from "react";
import instance from "../../auth/customAxios";

import {
  Form,
  NavItem,
  Container,
} from "reactstrap";

function Home() {
  let pageHeader = React.createRef();
  const [searchPhrase, setSearchPhrase] = useState("");
  let test = undefined
  const handleSubmit = (e) => {
    e.preventDefault();
    instance
    .get(`${process.env.REACT_APP_Server_API}/search?searchPhrase=${searchPhrase}`)
    .then((response)=>{
      test = response.data
      debugger
    })
    .catch((err)=>{
      debugger
    })
  }

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
});

  return (
    <>
      <div className="page-header page-header-small" >
        <div 
          className="page-header-image" 
          style={{backgroundImage: "url(" + require("../../assets/img/simone.jpg") + ")"}} 
          ref={pageHeader}>
        </div>
          <div className="content-center">
            <Container>
              <p className="title1">ABOUT ROISTER</p>
                <p>Welcome to the world's most innovative network of entrepreneurs</p>
                  <NavItem id="searchbar">
                    <Form>
                      <input className="searchbar" 
                        type="text" 
                        value={searchPhrase}
                        onChange={e => setSearchPhrase(e.target.value)}
                        placeholder="Search for skills..." 
                        name="search">
                      </input>
                      <button 
                        className="searchbar-button" 
                        type="submit"
                        onClick={handleSubmit}>
                        Search
                      </button>
                    </Form>
                  </NavItem>
                <br></br>
            </Container>
          </div>
      </div>
    </>
  );
}

export default Home;
