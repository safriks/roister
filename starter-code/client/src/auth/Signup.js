import React, { Component } from 'react'
import axios from "axios";
import qs from "qs";

import 'assets/css/bootstrap.min.css'
import 'assets/css/bootstrap.min.css.map'
import 'assets/css/now-ui-kit.css'
import 'assets/css/now-ui-kit.css.map'
import 'assets/css/now-ui-kit.min.css'

import ExamplesNavbar from "auth/ExamplesNavbar.js";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";

export default class Signup extends Component {
   constructor(props){
       super(props);
       this.state = {
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    }
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(e) {
       this.setState({
           [e.target.name]: e.target.value
       })
   }

   handleSubmit(e) {
       e.preventDefault();
       axios({
           method: "POST",
           data: qs.stringify(this.state),
           url: `${process.env.REACT_APP_API}/auth/signup`,
           headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
           }
       })
       .then((response)=> {
           localStorage.setItem('user', JSON.stringify(response.data));
           this.props.history.push("/Login")
       })
       .catch((error)=> {
       })
   }

   render() {
       return (
        <>
        <ExamplesNavbar/>
        <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/mia.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
       }}
        >
        <div className='signup-container'>
          <Row>
            <Card className="className='form-container-signup'" data-background-color="blue">
              <form onSubmit={this.handleSubmit}>
              
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">Sign Up</CardTitle>
                  <div className="social-line">
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="facebook"
                      href="#facebook"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="twitter"
                      href="#twitter"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="google"
                      href="#google"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                  </div>
                </CardHeader>

                <div>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    <Input
                      onChange={this.handleChange} 
                      value={this.state.firstname} 
                      placeholder="First Name" 
                      type="text" 
                      name="firstname"                    
                    ></Input> 
                    </InputGroupAddon>  

                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>                   
                    <Input
                      onChange={this.handleChange} 
                      value={this.state.lastname} 
                      placeholder="Last Name" 
                      type="text" 
                      name="lastname"                    
                    ></Input>   
                    </InputGroupAddon> 
           
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>                   
                    <Input
                      onChange={this.handleChange} 
                      value={this.state.email} 
                      placeholder="Email"
                      type="text"      
                      name='email'              
                    ></Input>     
                    </InputGroupAddon>     

                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_single-02"></i>
                      </InputGroupText>                   
                    <Input
                      onChange={this.handleChange} 
                      value={this.state.username} 
                      placeholder="Username" 
                      type="text" 
                      name="username"                   
                    ></Input>   
                    </InputGroupAddon>  

                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons objects_key-25"></i>
                      </InputGroupText>                   
                    <Input
                      onChange={this.handleChange} 
                      value={this.state.password} 
                      placeholder="Password"  
                      type="password" 
                      name="password"                     
                    ></Input> 
                    </InputGroupAddon>              
                </div>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    type= 'submit'
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </Row>
        </div>
      </div>
    </>
  );
}
}