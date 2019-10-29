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
        this.formRef = React.createRef();
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
            jobposition: '',
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
    let user = JSON.parse(localStorage.getItem('user'));
    let formData = new FormData(this.formRef.current); 
    axios({
        url: "https://localhost:3001/profile/create",
        data: this.state,
        data1: formData,
            headers: {
                'content-type': 'multipart/form-data'
            },     
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
          <label>
          <input type="file" name="picture"/>
          Upload a profile picture
          </label>
            <img className="photo-container" alt="..." src={require("assets/img/icons-profile.png")}></img>
          </div>
          <h4 className="title">Welcome!</h4>
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
          <form onSubmit={this.handleSubmit} ref={this.formRef}>
          <h3 className="title">Location</h3>
          <input 
          onChange={this.handleChange} 
          value={this.state.location} 
          placeholder="Location"  
          type="text" 
          name="location"/>
          <h3 className="title">Skills</h3>
          <input 
          onChange={this.handleChange} 
          value={this.state.skills} 
          placeholder='Skills'  
          type="text" 
          name='skills'/>
          <h3 className="title">About me</h3>
          <input 
          onChange={this.handleChange} 
          value={this.state.aboutme} 
          placeholder="About Me"  
          type="text" 
          name="aboutme"/>
          <h3 className="title">Job Position</h3>
          <input 
          onChange={this.handleChange} 
          value={this.state.jobposition} 
          placeholder='Job Position'  
          type="text" 
          name='degree'/>
          <h3 className="title">Degree</h3>
          <input 
          onChange={this.handleChange} 
          value={this.state.Degree} 
          placeholder='Degree'  
          type="text" 
          name='degree'/>
          <br></br>
          <button
          onChange={this.handleChange}
              type='submit'
              className="btn-neutral btn-round"
              color="info"
              type= 'submit'
              size="lg"
          >
          Create Profile
          </button>
          </form>
        </Container>
      </div>
      <DefaultFooter/>
    </div>
  </>
    )  
}
}