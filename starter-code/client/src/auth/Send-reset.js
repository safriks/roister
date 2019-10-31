import React, { Component } from 'react'
import instance from "./customAxios";

import 'assets/css/bootstrap.min.css'
import 'assets/css/bootstrap.min.css.map'
import 'assets/css/now-ui-kit.css'
import 'assets/css/now-ui-kit.css.map'
import 'assets/css/now-ui-kit.min.css'

import ExamplesNavbar from "../components/Navbars/ExamplesNavbar.js";

import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Container,
  Col,
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
          instance
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
   <div className="page-header clear-filter" filter-color="blue">
     <div
       className="page-header-image"
       style={{
           backgroundImage: "url(" + require("assets/img/alexander1.jpg") + ")"
         }}
     ></div>
   <div className="all">
           <div className="text-center">
             <CardTitle className="title-up" tag="h3">Reset your Password</CardTitle>
             <h4 className='enter-text'>Enter your email address and a link to reset your password will be sended to you.</h4>
           </div>
           <Container>
             <Col className="ml-auto mr-auto" md="4">
               <Card className="card-login card-plain">
                 <form onSubmit={this.sendEmail} className="form">                 
                   <CardBody>
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
                            onChange={this.handleChange('email')}
                            type="text"
                            vrequired name='email'                         
                            value={email} 
                            placeholder="Email"      
                         ></Input>
                        </InputGroup>
                    </CardBody>               
                  <Button
                    onChange={this.handleChange('email')} 
                    className="btn-round2"
                    color="primary"
                    type= 'submit'
                    size="lg" >
                    Send Email
                  </Button>
                
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
          </Col>
        </Container>
      </div>
    </div>
  </>
);
}}
