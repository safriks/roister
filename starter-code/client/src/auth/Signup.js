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
          ></div>
        <div className="all">
                <div className="text-center">
                  <CardTitle className="title-up" tag="h3">Sign Up</CardTitle>
                </div>
                <Container>
                  <Col className="ml-auto mr-auto" md="4">
                    <Card className="card-login card-plain">
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
                            placeholder="Firstname" 
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
                              placeholder="Lastname"
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
                                  <i className="now-ui-icons text_caps-small"></i>
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
                          </CardBody>
                          <CardFooter className="text-center">
                          <Javascript errorMessage={this.state.errorMessage}/> 
                            <div className="pull-left">
                            <h6>
                                <Link to={"/Login"}
                                  className="link1"                        
                                >
                                  Already have an account? Login. 
                                </Link>
                              </h6>
                            </div>
                            <div className="pull-right">
                              <h6>
                                <a
                                  className="link1"
                                  href="#"
                                  onClick={e => e.preventDefault()}
                                >
                                  Need Help?
                                </a>
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