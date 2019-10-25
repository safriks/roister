import React, { Component } from 'react';
import axios from "axios";

import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip
  } from "reactstrap";

 import ExamplesNavbar from "auth/ExamplesNavbar.js";
 import DefaultFooter from "components/Footers/DefaultFooter.js";

export default class CreateProfile extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
            firstname: '',
            lastname: '',
            username: '',
            location: '',
            aboutme: '',
            degree: '',
            skills: '',
            financing: '',
            timing: '',
            picture: '',
            portfolio: {
                education: '',
                experience: '',
                accomplishments: '',
                samples: '',
                references: ''
            }
        }

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit(e) {
    e.preventDefault(); 
    axios({
        url: "https://localhost:3001/profile/create",
        data: this.state,
        method: "POST"
    })
    .then((response)=> {
        this.props.history.push(`/profile/${response.data._id}`)
    })
    .catch((error)=> {
        
    })
    
}

render(){
    return(           
    //   <div className='form'>
    //   <form onSubmit={this.handleSubmit}>
    //     <input onChange={this.handleChange} value={this.state.firstname} placeholder="firstname" type="text" name="firstname"/>
    //     <input onChange={this.handleChange} value={this.state.lastname} placeholder="lastname" type="text" name="lastname"/>
    //     <input onChange={this.handleChange} value={this.state.username} placeholder="username" type="text" name="username"/>
    //     <input onChange={this.handleChange} value={this.state.location} placeholder="location"  type="text" name="location"/>
    //     <input onChange={this.handleChange} value={this.state.degree} placeholder="degree" type="text" name="degree"/>
    //     <input onChange={this.handleChange} value={this.state.skills} placeholder="skills" type="text" name="skills"/>
    //     <input onChange={this.handleChange} value={this.state.financing} placeholder="financing" type="text" name="financing"/>
    //     <input onChange={this.handleChange} value={this.state.timing}  placeholder="timing" type="text" name="timing"/>
    //     <input onChange={this.handleChange} value={this.state.summary}  placeholder="summary" type="text" name="summary"/>
    //     <input onChange={this.handleChange} value={this.state.picture}  placeholder="picture" type="text" name="picture"/>
    //     <input onChange={this.handleChange} value={this.state.portfolio}  placeholder="portfolio" type="text" name="portfolio"/>
    //     <button onChange={this.handleChange} type="submit">Submit </button>
    //   </form>
    //   </div>
    <>
    <ExamplesNavbar />
    <div className="wrapper">
    <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/jan.jpg") + ")"
          }}
          
        ></div>
        <Container>
          <div >
            <img className="photo-container" alt="..." src={require("assets/img/icons-profile.png")}></img>
          </div>
          <input 
          onChange={this.handleChange} 
          value={this.state.firstname} 
          placeholder="firstname" 
          type="text" 
          name="firstname"
          />
          <input 
          onChange={this.handleChange} 
          value={this.state.lastname} 
          placeholder="lastname" 
          type="text" 
          name="lastname"
          />
          <input 
          onChange={this.handleChange} 
          value={this.state.username} 
          placeholder="username" 
          type="text" 
          name="username"
          />
          <p className="category">Location</p>
          <input 
          onChange={this.handleChange} 
          value={this.state.location} 
          placeholder="location"  
          type="text" 
          name="location"/>
        </Container>
      </div>
      <div className="section">
        <Container>
        <h3 className="title">Skills</h3>
          <input 
          onChange={this.handleChange} 
          value={this.state.skills} 
          placeholder='skills'  
          type="text" 
          name='skills'/>
          <div className="button-container">
            <Button className="btn-round" color="info" size="lg">
              Follow
            </Button>
            <Button
              className="btn-round btn-icon"
              color="default"
              id="tooltip515203352"
              size="lg"
            >
              <i className="fab fa-twitter"></i>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip515203352">
              Follow me on Twitter
            </UncontrolledTooltip>
            <Button
              className="btn-round btn-icon"
              color="default"
              id="tooltip340339231"
              size="lg"
            >
              <i className="fab fa-instagram"></i>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip340339231">
              Follow me on Instagram
            </UncontrolledTooltip>
          </div>
          <h3 className="title">About me</h3>
          <input 
          onChange={this.handleChange} 
          value={this.state.aboutme} 
          placeholder="aboutme"  
          type="text" 
          name="aboutme"/>
          <h3 className="title">Degree</h3>
          <input 
          onChange={this.handleChange} 
          value={this.state.Degree} 
          placeholder='degree'  
          type="text" 
          name='degree'/>
          <Row>
            <Col className="ml-auto mr-auto" md="6">
              <h4 className="title text-center">My Portfolio</h4>
              <div className="nav-align-center">
                <Nav
                  className="nav-pills-info nav-pills-just-icons"
                  pills
                  role="tablist"
                >
                  <NavItem>
                    {/* <NavLink
                      className={pills === "1" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setPills("1");
                      }}
                    > */}
                      <i className="now-ui-icons design_image"></i>
                    {/* </NavLink> */}
                  </NavItem>
                  <NavItem>
                    {/* <NavLink
                      className={pills === "2" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setPills("2");
                      }}
                    > */}
                      <i className="now-ui-icons location_world"></i>
                    {/* </NavLink> */}
                  </NavItem>
                  <NavItem>
                    {/* <NavLink
                      className={pills === "3" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setPills("3");
                      }}
                    > */}
                      <i className="now-ui-icons sport_user-run"></i>
                    {/* </NavLink> */}
                  </NavItem>
                </Nav>
              </div>
            </Col>
            {/* <TabContent className="gallery" activeTab={"pills" + pills}> */}
              <TabPane tabId="pills1">
                <Col className="ml-auto mr-auto" md="10">
                  <Row className="collections">
                    <Col md="6">
                      <img
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/bg1.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/bg3.jpg")}
                      ></img>
                    </Col>
                    <Col md="6">
                      <img
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/bg8.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/bg7.jpg")}
                      ></img>
                    </Col>
                  </Row>
                </Col>
              </TabPane>
              <TabPane tabId="pills2">
                <Col className="ml-auto mr-auto" md="10">
                  <Row className="collections">
                    <Col md="6">
                      <img
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/bg6.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/bg11.jpg")}
                      ></img>
                    </Col>
                    <Col md="6">
                      <img
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/bg7.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/bg8.jpg")}
                      ></img>
                    </Col>
                  </Row>
                </Col>
              </TabPane>
              <TabPane tabId="pills3">
                <Col className="ml-auto mr-auto" md="10">
                  <Row className="collections">
                    <Col md="6">
                      <img
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/bg3.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/bg8.jpg")}
                      ></img>
                    </Col>
                    <Col md="6">
                      <img
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/bg7.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/bg6.jpg")}
                      ></img>
                    </Col>
                  </Row>
                </Col>
              </TabPane>
            {/* </TabContent> */}
          </Row>
        </Container>
      </div>
      <DefaultFooter />
    </div>
  </>
    )  
}
}