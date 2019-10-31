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
            <h4 className="title">Welcome {this.state.user.username}!</h4>
            <h5 className="title">Create your profile</h5>
        </Container>
      </div>
      <div className="section">
        <Container>
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
            <h3 className="title">Location</h3>
            <h3 className="title">Skills</h3>
            <h3 className="title">About me</h3>
            <h3 className="title">Job Position</h3>
            <h3 className="title">Degree</h3>
          <Row>
            <Col className="ml-auto mr-auto" md="6">
              <h4 className="title text-center">My Portfolio</h4>
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
                          src={require("assets/img/bg8-faded.png")}
                        >
                        </img>
                      </a>
                    </Col>
                    <Col md="6">
                      <a href="/createproject">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7-faded.png")}
                        >
                        </img>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </TabPane>
          </Row>
        </Container>
      </div>
      <DefaultFooter/>
    </div>
  </>
    )  
}
}