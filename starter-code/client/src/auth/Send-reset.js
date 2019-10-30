import React, { Component } from 'react'
import axios from "axios";

import 'assets/css/bootstrap.min.css'
import 'assets/css/bootstrap.min.css.map'
import 'assets/css/now-ui-kit.css'
import 'assets/css/now-ui-kit.css.map'
import 'assets/css/now-ui-kit.min.css'

import ExamplesNavbar from "../components/Navbars/ExamplesNavbar.js";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  Input,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";

export default class Sendreset extends Component {
   constructor(){
       super();
       this.state = {
        email: "",
        showError: false,
        messageFromServer: ''
    }
   }

   handleChange = name => event => {
       this.setState({
           [name]: event.target.value,
       });
   }

   sendEmail = e => {
       e.preventDefault();
       if(this.state.email === ''){
           this.setState({
               showError: false,
               messegeFromServer: ''
           });
       } else{
           axios
           .post('http://localhost:3001/forgotPassword', {
               email: this.state.email,
           })
           .then(response =>{
               console.log(response);
               if(response.data === 'email not in db'){
                   this.setState({
                       showError: true,
                       messageFromServer: '',
                  })
               }
               else if(response.data === 'recovery email sent'){
               this.setState({            
                    showError: false,
                    messageFromServer: 'recovery email sent',
               })
            }
           })
           .catch(error => {
               console.log(error.data)
           })
       }
   }

   render() {
       const {email, messageFromServer, showNullError, showError} = this.state;
       return (
        <>
        <ExamplesNavbar/>
        <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/unsplash.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
       }}
        >
        <div className='signup-container'>
          <Row>
            <Card className="form-container-signup" data-background-color="blue">

              <form onSubmit={this.sendEmail}>

              <div className='form-all'>
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">Reset your Password</CardTitle>
                  </CardHeader>
                  <h4 className='enter-text'>Enter your email address and we'll send you a link to reset your password.</h4>
                
                <div class='signup-form'>
                <InputGroupAddon className='inputs-signin' addonType="prepend">                   
                      <div className='input-space'> 
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>    
                      </div>               
                    <Input
                        onChange={this.handleChange('email')} 
                        type="text"      
                        required name='email'                         
                        value={email} 
                        placeholder="Email"             
                    ></Input>     
                    </InputGroupAddon>             
                </div>
                <CardFooter className="text-center">
                  <button
                    onChange={this.handleChange('email')} 
                    className="btn-neutral btn-round"
                    color="info"
                    type= 'submit'
                    size="lg" >
                    Send Email
                  </button>
                </CardFooter>
                </div>
              </form>
              {showNullError && (
                  <div>
                      <p>The email address cannot be null</p>
                  </div>
              )}
              {showError && (
                  <div>
                      <p>That email address isn't recognised. Please try again or register for a new account.</p>
                  </div>
              )}
              {messageFromServer === 'recovery email sent' && (
                  <div className='email-sent-container'>
                      <h4 className='email-sent-text'>Email sent to your email address.</h4>
                      <p className='email-sent-text text-p'>Check the link we've sent you. If you didn't request this, you can ignore this email and no changes will be made in your account.</p>
                  </div>
              )}
            </Card>
          </Row>
        </div>
      </div>
    </>
  );
}
}