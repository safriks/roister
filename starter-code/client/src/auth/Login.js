import React, { Component } from 'react'
import axios from 'axios';
import qs from "qs";
import { Link } from "react-router-dom";

import ExamplesNavbar from "auth/ExamplesNavbar.js";
// import TransparentFooter from "auth/TransparentFooter.js";

import 'assets/css/bootstrap.min.css'
import 'assets/css/bootstrap.min.css.map'
import 'assets/css/now-ui-kit.css'
import 'assets/css/now-ui-kit.css.map'
import 'assets/css/now-ui-kit.min.css'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
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
           url: `${process.env.REACT_APP_API}/auth/login`,
           headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
           }
       })
       .then((response)=> {
           localStorage.setItem("user", JSON.stringify(response.data))
           this.props.history.push("/")
       })
   }
   render() {
       return (
          //  <>
          // <ExamplesNavbar />
          //      <div>
          //          <form onSubmit={this.handleSubmit}>
          //              <input onChange={this.handleChange} value={this.state.username} placeholder="username" type="text" name="username"/>
          //              <input onChange={this.handleChange} value={this.state.password} placeholder="password"  type="password" name="password"/>
          //              <button type="submit">Submit </button>
          //          </form>
          //      </div>
          //  </>
          <>
       <ExamplesNavbar />
       <div className="page-header clear-filter" filter-color="blue">
         <div
           className="page-header-image"
           style={{
             backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
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

                 <Form action="" className="form" method="">                 
  
                  <CardBody>
                  <form onSubmit={this.handleSubmit}>
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
                      
                      <Input onChange={this.handleChange} value={this.state.username} placeholder="username" type="text" name="username"/>

                      
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
                      
                      <Input onChange={this.handleChange} value={this.state.password} placeholder="password"  type="password" name="password"/>

                    </InputGroup>
                    </form>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      
                      block
                      className="btn-round"
                      color="info"
                      href="#login"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      Get Started
                    </Button>
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
                        <a
                          className="link1"
                          href="#login"
                          onClick={e => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        {/* <TransparentFooter /> */}
      </div>
    </>
       )
   }
}

// import React from "react";
// import ExamplesNavbar from "auth/ExamplesNavbar.js";
// import TransparentFooter from "auth/TransparentFooter.js";

// import 'assets/css/bootstrap.min.css'
// import 'assets/css/bootstrap.min.css.map'
// import 'assets/css/now-ui-kit.css'
// import 'assets/css/now-ui-kit.css.map'
// import 'assets/css/now-ui-kit.min.css'

// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Container,
//   Col
// } from "reactstrap";

// function LoginPage() {
//   const [firstFocus, setFirstFocus] = React.useState(false);
//   const [lastFocus, setLastFocus] = React.useState(false);
//   React.useEffect(() => {
//     document.body.classList.add("login-page");
//     document.body.classList.add("sidebar-collapse");
//     document.documentElement.classList.remove("nav-open");
//     window.scrollTo(0, 0);
//     document.body.scrollTop = 0;
//     return function cleanup() {
//       document.body.classList.remove("login-page");
//       document.body.classList.remove("sidebar-collapse");
//     };
//   });
//   return (
//     <>
//       <ExamplesNavbar />
//       <div className="page-header clear-filter" filter-color="blue">
//         <div
//           className="page-header-image"
//           style={{
//             backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
//           }}
//         ></div>
//         <div className="content">
//           <Container>
//             <Col className="ml-auto mr-auto" md="4">
//               <Card className="card-login card-plain">
//                 <Form action="" className="form" method="">
//                   <CardHeader className="text-center">
//                     <div className="logo-container">
//                       <img
//                         alt="..."
//                         src={require("assets/img/now-logo.png")}
//                       ></img>
//                     </div>
//                   </CardHeader>
//                   <CardBody>
//                     <InputGroup
//                       className={
//                         "no-border input-lg" +
//                         (firstFocus ? " input-group-focus" : "")
//                       }
//                     >
//                       <InputGroupAddon addonType="prepend">
//                         <InputGroupText>
//                           <i className="now-ui-icons users_circle-08"></i>
//                         </InputGroupText>
//                       </InputGroupAddon>
//                       <Input
//                         placeholder="First Name..."
//                         type="text"
//                         onFocus={() => setFirstFocus(true)}
//                         onBlur={() => setFirstFocus(false)}
//                       ></Input>
//                     </InputGroup>
//                     <InputGroup
//                       className={
//                         "no-border input-lg" +
//                         (lastFocus ? " input-group-focus" : "")
//                       }
//                     >
//                       <InputGroupAddon addonType="prepend">
//                         <InputGroupText>
//                           <i className="now-ui-icons text_caps-small"></i>
//                         </InputGroupText>
//                       </InputGroupAddon>
//                       <Input
//                         placeholder="Last Name..."
//                         type="text"
//                         onFocus={() => setLastFocus(true)}
//                         onBlur={() => setLastFocus(false)}
//                       ></Input>
{/* <input onChange={this.handleChange} value={this.state.username} nBlur={() => setLastFocus(false)} onFocus={() => setLastFocus(true)} placeholder="username" type="text" name="username"/> */}

//                     </InputGroup>
//                   </CardBody>
//                   <CardFooter className="text-center">
//                     <Button
//                       block
//                       className="btn-round"
//                       color="info"
//                       href="#pablo"
//                       onClick={e => e.preventDefault()}
//                       size="lg"
//                     >
//                       Get Started
//                     </Button>
//                     <div className="pull-left">
//                       <h6>
//                         <a
//                           className="link"
//                           href="#pablo"
//                           onClick={e => e.preventDefault()}
//                         >
//                           Create Account
//                         </a>
//                       </h6>
//                     </div>
//                     <div className="pull-right">
//                       <h6>
//                         <a
//                           className="link"
//                           href="#pablo"
//                           onClick={e => e.preventDefault()}
//                         >
//                           Need Help?
//                         </a>
//                       </h6>
//                     </div>
//                   </CardFooter>
//                 </Form>
//               </Card>
//             </Col>
//           </Container>
//         </div>
//         <TransparentFooter />
//       </div>
//     </>
//   );
// }

// export default LoginPage;
