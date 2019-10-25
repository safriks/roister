// import React, { Component } from 'react'
// import axios from "axios";
// import qs from "qs";
// import 'assets/css/bootstrap.min.css'
// import 'assets/css/bootstrap.min.css.map'
// import 'assets/css/now-ui-kit.css'
// import 'assets/css/now-ui-kit.css.map'
// import 'assets/css/now-ui-kit.min.css'

// export default class Signup extends Component {
//    constructor(props){
//        super(props);
//        this.state = {
//         username: "",
//         firstname: "",
//         lastname: "",
//         email: "",
//         password: ""
//     }
//        this.handleChange = this.handleChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);
//    }

//    handleChange(e) {
//        this.setState({
//            [e.target.name]: e.target.value
//        })
//    }

//    handleSubmit(e) {
//        e.preventDefault();
//        axios({
//            method: "POST",
//            data: qs.stringify(this.state),
//            url: `${process.env.REACT_APP_API}/auth/signup`,
//            headers: {
//                'Content-Type': 'application/x-www-form-urlencoded'
//            }
//        })
//        .then((response)=> {
//            debugger
//            localStorage.setItem('user', JSON.stringify(response.data));
//            this.props.history.push("/Login")
//        })
//        .catch((error)=> {
//            debugger
//        })
//    }

//    render() {
//        return (
//            <>
//                <div>
//                    <form onSubmit={this.handleSubmit}>
//                        <input onChange={this.handleChange} value={this.state.username} placeholder="username" type="text" name="username"/>
//                        <input onChange={this.handleChange} value={this.state.firstname} placeholder="firstname" type="text" name="firstname"/>
//                        <input onChange={this.handleChange} value={this.state.lastname} placeholder="lastname" type="text" name="lastname"/>
//                        <input onChange={this.handleChange} value={this.state.email} placeholder="email" type="text" name="email"/>
//                        <input onChange={this.handleChange} value={this.state.password} placeholder="password"  type="password" name="password"/>
//                        <button type="submit">Submit </button>
//                    </form>
//                </div>
//            </>
//        )
//    }
// }

import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row
} from "reactstrap";

import ExamplesNavbar from "auth/ExamplesNavbar.js";

// core components

function SignUp() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>
    <ExamplesNavbar />
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
        }}
      >
        <div class='signup-container'>
          <Row>
            <Card className="className='form-container-signup'" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Sign Up
                  </CardTitle>
                  <div className="social-line">
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="facebook"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="google"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                  </div>
                </CardHeader>

                <div>
                  <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="First Name..."
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (lastFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Last Name..."
                      type="text"
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (emailFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email..."
                      type="text"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    ></Input>
                  </InputGroup>
                </div>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="/"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
        </div>
      </div>
    </>
  );
}

export default SignUp;