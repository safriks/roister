import React, { Component } from 'react'
import axios from "axios";
import qs from "qs";
import { Link } from "react-router-dom";
import ExamplesNavbar from "../components/Navbars/ExamplesNavbar.js";
import Javascript from "../views/index-sections/Javascript.js";
import {signup} from "./auth";

import 'assets/css/bootstrap.min.css'
import 'assets/css/bootstrap.min.css.map'
import 'assets/css/now-ui-kit.css'
import 'assets/css/now-ui-kit.css.map'
import 'assets/css/now-ui-kit.min.css'

import {
  Card,
  CardBody,
  CardFooter,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button,
  Container,
  Col,
  CardTitle,
} from "reactstrap";

export default class Signup extends Component {
   constructor(props){
       super(props)

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    } 

    state = {
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        skills: "",
        jobposition: "",
        aboutme: "",
        errorMessage:""
    }
       
   handleChange(e) {
       this.setState({
           [e.target.name]: e.target.value
       })
   }

   handleSubmit(e) {
    e.preventDefault();
    signup(this.state)
      .then((response)=> {
        this.props.history.push("/");
      })
      .catch((error)=> {
        this.setState({errorMessage: error.response.data});
      })
 }

   render() {
       return (
        <>
        <ExamplesNavbar/>

        <div className="page-header clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
                backgroundImage: "url(" + require("assets/img/alexander1.jpg") + ")"
              }}
          ></div>
          
          
        <div className="all">
                <div className="text-center">
                  <CardTitle className="title-up" tag="h3">Create your Profile</CardTitle>
                </div>
                <Container>
                  <Col className="ml-auto mr-auto" md="4">
                    <Card className="card-login card-plain">

                    
                      
                      <div className='contains-all'>         
                      
                        <div className='container-profile-1'>
                        <form onSubmit={this.handleSubmit} className="form">
                        <CardBody>
                          <InputGroup 
                            className={
                              "no-border input-lg" 
                            }
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons users_circle-08"></i>
                              </InputGroupText>
                              </InputGroupAddon>
                            <Input 
                            onChange={this.handleChange} 
                            value={this.state.firstname} 
                            placeholder="First Name" 
                            type="text" 
                            required name="firstname"
                            ></Input>
                            </InputGroup>

                            <InputGroup
                              className={
                                "no-border input-lg"
                              }
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons text_caps-small"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input 
                              onChange={this.handleChange}
                              value={this.state.lastname}
                              placeholder="Last Name"
                              type="lastname"
                              required name="lastname"
                              ></Input>
                            </InputGroup>

                            <InputGroup
                              className={
                                "no-border input-lg"
                              }
                            >
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons ui-1_email-85"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input 
                              onChange={this.handleChange}
                              value={this.state.email}
                              placeholder="Email"
                              type="email"
                              required name="email"
                              ></Input>
                            </InputGroup>
                            <InputGroup
                              className={
                                "no-border input-lg"
                              }
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons text_caps-small"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input 
                              onChange={this.handleChange}
                              value={this.state.username}
                              placeholder="Username"
                              type="username"
                              required name="username"
                              ></Input>
                            </InputGroup>

                            <InputGroup
                              className={
                                "no-border input-lg"
                              }
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons text_caps-small"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input 
                              onChange={this.handleChange}
                              value={this.state.password}
                              placeholder="Password"
                              type="password"
                              required name="password"
                              ></Input>
                            </InputGroup>

                            <InputGroup
                              className={
                                "no-border input-lg"
                              } >                          
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons objects_globe"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input 
                              onChange={this.handleChange}
                              value={this.state.location}
                              placeholder="Location"
                              type="location"
                              required name="location"
                              ></Input>
                            </InputGroup>
                            </CardBody>
                            </form>
                            </div>
                            <div className='container-profile-2'>
                            <form onSubmit={this.handleSubmit} className="form">
                            <CardBody>
                            <label className='titles-signup'>Skills</label>
                            <InputGroup
                              className={
                                "no-border input-lg"
                              } >                         
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons sport_trophy"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              
                              <Input 
                              onChange={this.handleChange}
                              value={this.state.skills}
                              placeholder="Skills"
                              type="skills"
                              required name="skills"
                              className='second-input-form'
                              ></Input>
                            </InputGroup>

                            <label className='titles-signup'>Job Position</label>
                            <InputGroup
                              className={
                                "no-border input-lg"
                              } >                         
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons education_agenda-bookmark"></i>
                                </InputGroupText>
                              </InputGroupAddon>                          
                              <Input 
                              onChange={this.handleChange}
                              value={this.state.jobposition}
                              placeholder="Job Position"
                              type="jobposition"
                              required name="jobposition"
                              ></Input>
                            </InputGroup>

                            <label className='titles-signup'>About Me</label>
                            <InputGroup
                              className={
                                "no-border input-lg"
                              } >                         
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons education_glasses"></i>
                                </InputGroupText>
                              </InputGroupAddon>                          
                              <Input 
                              onChange={this.handleChange}
                              value={this.state.aboutme}
                              placeholder="About Me"
                              type="aboutme"
                              required name="aboutme"
                              ></Input>
                            </InputGroup>
                            </CardBody>
                            </form>
                            </div> 
                           
                          </div>
                         
                          <CardFooter className="text-center">
                        <Button
                        type="submit"
                        block
                        className="btn-round"
                        color='primary'
                        size="lg"
                         >
                        Create Profile
                       </Button>
                            <div>
                            <h6>
                                <Link to={"/Login"}
                                  className="link1"                        
                                >
                                  Already have an account? Login. 
                                </Link>
                              </h6>
                            </div>
                          </CardFooter>
                          
                          
                        
                      </Card>
                    </Col>
                  </Container>
                </div>
              </div>

            </>
       )
   }
}