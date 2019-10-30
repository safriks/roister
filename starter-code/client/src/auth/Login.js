import React, { Component } from 'react'
import axios from 'axios';
import qs from "qs";
import { Link } from "react-router-dom";
import ExamplesNavbar from "../components/Navbars/ExamplesNavbar.js";
import Javascript from "../views/index-sections/Javascript.js";
import {login} from "./auth";

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
  Col
} from "reactstrap";


export default class Login extends Component {
   constructor(props){
       super(props)
      
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }

   state = {
       username: "",
       password: "",
       errorMessage: ""
   }


   handleChange(e) {
       this.setState({
           [e.target.name]: e.target.value
       })
   }

   handleSubmit(e) {
      e.preventDefault();
      login(this.state)
        .then((response)=> {
          this.props.history.push("/createproject");
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
                backgroundImage: "url(" + require("assets/img/austin1.jpg") + ")"
              }}
            ></div>
            <div className="all">
              <div>
                <p className='roister-name'>ROISTER</p>
              </div>
              <div>
                <p className='roister-para'>Welcome to the world's most innovative network of entrepreneurs</p>
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
                              value={this.state.username}
                              placeholder="username"
                              type="text" 
                              required name="username"
                              />
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
                              
                              <Input onChange={this.handleChange} value={this.state.password} placeholder="password"  type="password" required name="password"/>

                            </InputGroup>
                          </CardBody>
                          <CardFooter className="text-center">

                          <Javascript errorMessage={this.state.errorMessage}/>
                            
                            <div className="pull-left">
                              <h6>
                                <Link to={"/Signup"}
                                  className="link1"                        
                                >
                                  Create Account  
                                </Link>
                              </h6>
                            </div>
                            <div className="pull-right">
                              <h6>
                                <Link to={"/Send-reset"}                             
                                  className="link1"
                                  
                                >
                                  Forgot your password?
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
