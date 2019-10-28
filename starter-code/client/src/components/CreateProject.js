import React, { Component } from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/bootstrap.min.css.map';
import '../assets/css/now-ui-kit.css';
import '../assets/css/now-ui-kit.css.map';
import '../assets/css/now-ui-kit.min.css';
import axios from "axios";

import {
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

import VisibleNavbar from "components/Navbars/VisibleNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

export default class CreateProject extends Component {
    constructor(props){
        super(props);
        this.handleChangeProject = this.handleChangeProject.bind(this);
        this.handleSubmitProject = this.handleSubmitProject.bind(this);
    }

    state = {
        name: '', 
        location: '',
        tagline: '', 
        description: '', 
        tags: '', 
        financing: '', 
        timing: '',
        team: '', 
        picture: ''
    }

handleChangeProject(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmitProject(e){
    e.preventDefault(); 
    axios({
        url: "https://localhost:3001/createproject",
        data: this.state,
        method: "POST"
    })
    .then((response)=> {
        this.props.history.push(`/project/${response.data._id}`)
    })
    .catch((error)=> {
        console.log(error)
    })
}

render(){
  return (
    <>
      <VisibleNavbar />
      <div className="wrapper">
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Create Your Project</h2>
                <h5 className="description">
                Roister brings together entrepreneurial talents and early stage projects in need of help.
                No matter if you are a code wizard, legal savage, digital marketing expert, an investor, 
                a ferocious business tycoon, photographer or a visual artist. 
               </h5>
               <h5>There is always someone looking for your expertise.</h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("../assets/img/cafe.jpg") + ")"
                    }}
                  >
                  </div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("../assets/img/group-working.jpg") + ")"
                    }}
                  >
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
        <h3>Fill in the form</h3>
          <Container>
          <div >
            <Input 
              onChange={this.handleChangeProject} 
              value={this.state.name} 
              placeholder="Name of the project" 
              type="text" 
              required name="name"
            ></Input>
            <br></br>
            <Input 
              onChange={this.handleChangeProject} 
              value={this.state.location} 
              placeholder="Location" 
              type="text" 
              required name="location"
            ></Input>
            <br></br>
            <Input 
              onChange={this.handleChangeProject} 
              value={this.state.tagline} 
              placeholder="Taglines" 
              type="text" 
              required name="tagline"
            ></Input>
            <br></br>
            <Input 
              onChange={this.handleChangeProject} 
              value={this.state.description} 
              placeholder="Description"  
              type="text" 
              required name="description"
            ></Input>
            <br></br>
            <Input 
              onChange={this.handleChangeProject} 
              value={this.state.tags} 
              placeholder="#Tags"  
              type="text" 
              required name="tags"
            ></Input>
            <br></br>
            <Input 
              onChange={this.handleChangeProject} 
              value={this.state.financing} 
              placeholder="Financing: Equity or Financial Compensation"  
              type="text" 
              required name="financing"
            ></Input>
            <br></br>
            <Input 
              onChange={this.handleChangeProject} 
              value={this.state.timing} 
              placeholder="Timing"  
              type="text" 
              required name="timing"
            ></Input>
            <br></br>
             <Input 
              onChange={this.handleChangeProject} 
              value={this.state.team} 
              placeholder="Team"  
              type="text" 
              required name="team"
            ></Input>
            <br></br>
            <Input 
              onChange={this.handleChangeProject} 
              value={this.state.picture} 
              placeholder="Upload a picture"  
              type="file" 
              required name="picture"
            ></Input>
            <br></br>
            <button 
              onClick={this.handleSubmitProject}
              type="submit"
            >Submit 
            </button>
          </div>
          </Container>
          </div>
        </div>
      <DefaultFooter />
    </>
  )
}}
