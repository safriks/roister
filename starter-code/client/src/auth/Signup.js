import 'assets/css/bootstrap.min.css'
import 'assets/css/bootstrap.min.css.map'
import 'assets/css/now-ui-kit.css'
import 'assets/css/now-ui-kit.css.map'
import 'assets/css/now-ui-kit.min.css'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Javascript from "../views/index-sections/Javascript.js";
import {signup} from "./auth";

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

import ExamplesNavbar from "../components/Navbars/ExamplesNavbar.js";

export default class Signup extends Component {
   constructor(props){
       super(props)
       this.formRef = React.createRef();
       this.handleInputUpload = this.handleInputUpload.bind(this);
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
        picture:"",
        errorMessage:""
    }
       
   handleChange(e) {
       this.setState({
           [e.target.name]: e.target.value
       })
   }

   handleSubmit(e) {
    var formData = new FormData(this.formRef.current);
    e.preventDefault();
    signup(formData)
      .then((response)=> {
        this.props.history.push("/");
      })
      .catch((error)=> {
        this.setState({errorMessage: error.response.data});
      })
 }

 handleInputUpload(e){
  const data = new FormData();
    data.append('file', e.target.files[0]);
    data.append('name', 'some value user types');
    data.append('description', 'some value user types');
    this.setState({picture: data})
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
                    <form onSubmit={this.handleSubmit} className="form" encType="multipart/form-data" ref={this.formRef}>
                    <div className='contains-all'>         
                      <div className='container-profile-1'>
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
                          </div>
                          <div className='container-profile-2'>
                          <CardBody>
                          <label>Skills</label>
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
                            ></Input>
                          </InputGroup>
                          <label>Job Position</label>
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
                          <label>About Me</label>
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
                          <Input 
                            onChange={(e) => this.handleInputUpload(e)}  
                            placeholder="Upload a picture"  
                            type="file" 
                            required name="picture"
                          ></Input>
                          </CardBody>
                          </div> 
                        </div>
                        <CardFooter className="text-center">
                        <Javascript errorMessage={this.state.errorMessage}/> 
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
                      </form>
                    </Card>
                  </Col>
                </Container>
              </div>
            </div>
          </>
     )
  }
}