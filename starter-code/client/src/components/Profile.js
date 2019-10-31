import React, { Component } from 'react';
import instance from "../auth/customAxios";

import {
    Button,
    Nav,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip
  } from "reactstrap";

 import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
 import DefaultFooter from "components/Footers/DefaultFooter.js";

export default class Profile extends Component {
    constructor(props){
        super(props);
    }

    state = {
          user: "",
          projects:[]
        }

  componentDidMount(){
      instance({
        url: `${process.env.REACT_APP_Server_API}/Profile`,
        method: "GET"
    })
    .then((response)=>{
      this.setState({user: response.data.user, projects: response.data.projects})
    })
    .catch((err)=>{
      console.log(err)
    })
  }

render(){
    return(           
    <>
    <ExamplesNavbar />
    <div className="wrapper">
      <div className="page-header clear-filter page-header-small" filter-color="blue">
        <div className="page-header-image" style={{backgroundImage: "url(" + require("assets/img/alexander.jpg") + ")"}}
        ></div>
        <Container>
          <div>
            <img className="photo-container" alt="..." src={this.state.user.picture}></img>
          </div>
          <h2 className="title">Welcome {this.state.user.firstname}</h2>
          <h3>{this.state.user.jobposition}</h3>
        </Container>
      </div>
      <div className="section">
        <Container>
          <div className="button-container">
            <Button color='primary' className="btn-round" size="lg">
              Connect
            </Button>
            <div class="left">   
            <button class="social-signin messages">Messages</button>
            <button class="social-signin messages">Settings</button>
            <button class="social-signin messages">Edit Profile</button>
          </div>

           <div class="right">   
            <button class="social-signin facebook">Follow me on Facebook</button>
            <button class="social-signin twitter">Follow me on Twitter</button>
            <button class="social-signin google">Follow me on Google+</button>
          </div>
            <Button
              className="btn-round btn-icon"
              color="default"
              id="tooltip515203352"
              size="lg"
            >
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
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip340339231">
              Follow me on Instagram
            </UncontrolledTooltip>
          </div>        

          <div className='profile-details-container'>
          <h4 className='title text-center'>Location</h4>
          <h4>{this.state.user.location}</h4>
          <h4 className='title text-center'>Skills</h4>
          <h4>{this.state.user.skills}</h4>
          <h4 className='title text-center'>About me</h4>
          <h4>{this.state.user.aboutme}</h4>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="6">
              <h4 className="title text-center">My Projects</h4>
              <div className="nav-align-center">
                <Nav
                  className="nav-pills-info nav-pills-just-icons"
                  pills
                  role="tablist"
                >
                </Nav>
              </div>
            </Col>
              <TabPane tabId="pills1">
                <Col className="ml-auto mr-auto" md="10">
                  <Row className="collections">
                    <Col md="6">
                      <a href="/createproject">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/create.png")}
                        >
                        </img>
                      </a>
                    </Col>
                    <Col md="6">
                      <a href="/project">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/see.png")}
                        >
                        </img>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </TabPane>
          </Row>
          <br></br>
        </Container>
      </div>
      <DefaultFooter/>
    </div>
  </>
    )  
}
}