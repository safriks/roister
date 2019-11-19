import React, {useState} from "react";
import instance from "../../auth/customAxios";
import {Link} from 'react-router-dom';

import {
  Form,
  NavItem,
  Container,
} from "reactstrap";
import { strictEqual } from "assert";

function Home() {
  let pageHeader = React.createRef();

  const [state, setSearchPhrase] = useState({
    searchPhrase: '',
    result: ''
  });

  const updateSearchPhrase = e => {
    setSearchPhrase({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const updateResult = result => {
    setSearchPhrase({
      ...state,
      result: result
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    instance
    .get(`${process.env.REACT_APP_Server_API}/search?searchPhrase=${state.searchPhrase}`)
    .then((response)=>{
      updateResult(response.data)
    })
    .catch((err)=>{ 
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
      <div className="page-header clear-filter page-header-small" filter-color="blue">
        <div 
          className="page-header-image" 
          style={{backgroundImage: "url(" + require("../../assets/img/henry.jpg") + ")"}} 
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
                        value={state.searchPhrase}
                        onChange={e => updateSearchPhrase(e)}
                        placeholder="Search for skills..." 
                        name="searchPhrase">
                      </input>
                      <button 
                        className="searchbar-button" 
                        type="submit"
                        onClick={handleSubmit}>
                        Search
                      </button>
                      {state.result ? 
                      <>{state.result.map(currentValue => {
                          return (                          
                            <div id="search-result">
                            <Link id='unique-result' to={`/profile/${currentValue._id}`}>{currentValue.firstname}</Link>
                            </div>                          
                            )}
                      )} </> 
                      : null}
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
