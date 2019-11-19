import '../assets/css/bootstrap.min.css';
import '../assets/css/bootstrap.min.css.map';
import '../assets/css/now-ui-kit.css';
import '../assets/css/now-ui-kit.css.map';
import '../assets/css/now-ui-kit.min.css';
import React, { Component } from 'react';
import instance from "../auth/customAxios";

import {
  Input,
  Container,
  Button,
} from "reactstrap";

import DefaultFooter from "components/Footers/DefaultFooter.js";
import ExamplesNavbar from './Navbars/ExamplesNavbar';
import HeaderDescription from "./Headers/HeaderDescription";

export default class CreateProject extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: "", 
          location: "",
          tagline: "", 
          description: "", 
          tags: "", 
          financing: "", 
          timing: "",
          // team: "", 
          picture: "",
          user: "",
          errorMessage:""
      }
        this.formRef = React.createRef();
        this.handleInputUploadProject = this.handleInputUploadProject.bind(this);
        this.handleChangeProject = this.handleChangeProject.bind(this);
        this.handleSubmitProject = this.handleSubmitProject.bind(this);
    }

handleChangeProject(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmitProject(e){
    var formData = new FormData(this.formRef.current);
    e.preventDefault(); 
    debugger
    instance({
        method: "POST",
        url: `${process.env.REACT_APP_Server_API}/createproject`,
        headers: {
          'Content-Type': 'multipart/form-data'
      },
        data: formData,

    })
    .then((response)=> {
        this.props.history.push("/project")
    })
    .catch((error)=> {
        console.log(error)
    })
}

handleInputUploadProject(e){
  const data = new FormData();
    data.append('file', e.target.files[0]);
    data.append('name', 'some value user types');
    data.append('description', 'some value user types');
    this.setState({picture: data})
}

render(){
  return (
    <>
  <ExamplesNavbar navLinksBlack={true} className="text-black" />
      <div className="wrapper">
        <HeaderDescription>
            <h2 className="title">Create Your Project</h2>
              <h5 className="description">
              Roister brings together entrepreneurial talents and early stage projects in need of help.
              No matter if you are a code wizard, legal savage, digital marketing expert, an investor, 
              a ferocious business tycoon, photographer or a visual artist. 
              </h5>
            <h5>There is always someone looking for your expertise.</h5>
            <a className="scroll-down"
              href="#section1">
              <span>⬇️</span>
            </a>  
        </HeaderDescription>
        <section id="section1">
          <div className="section section-team text-center">
            <h3>Fill in the form</h3>
              <Container>
                <form encType="multipart/form-data" ref={this.formRef}>
                  <Input 
                    onChange={this.handleChangeProject} 
                    value={this.state.name} 
                    placeholder="Name of the project" 
                    type="text" 
                    required name="name"
                  ></Input>
                  <br></br>
                  <Input 
                    onChange={this.handleChangeProject} 
                    value={this.state.location} 
                    placeholder="Location" 
                    type="text" 
                    required name="location"
                  ></Input>
                  <br></br>
                  <Input 
                    onChange={this.handleChangeProject} 
                    value={this.state.tagline} 
                    placeholder="Short description of your project" 
                    type="text" 
                    required name="tagline"
                  ></Input>
                  <br></br>
                  <Input 
                    onChange={this.handleChangeProject} 
                    value={this.state.description} 
                    placeholder="Full description of your project"  
                    type="text" 
                    required name="description"
                  ></Input>
                  <br></br>
                  <Input 
                    onChange={this.handleChangeProject} 
                    value={this.state.tags} 
                    placeholder="#Tags"  
                    type="text" 
                    required name="tags"
                  ></Input>
                  <br></br>
                  <Input 
                    onChange={this.handleChangeProject} 
                    value={this.state.financing} 
                    placeholder="What are you looking for : Equity or Financial Compensation ?"  
                    type="text" 
                    required name="financing"
                  ></Input>  
                  <br></br>
                  <Input 
                    onChange={this.handleChangeProject} 
                    value={this.state.timing} 
                    placeholder="What are your availability : Full-time or Part-time ?"  
                    type="text" 
                    required name="timing"
                  ></Input> 
                  <br></br>
                  <Button className="btn-round">
                  <Input 
                    onChange={(e) => this.handleInputUploadProject(e)}  
                    placeholder="Upload a picture"  
                    type="file" 
                    required name="picture"
                  ></Input>
                  </Button>
                  <br></br>
                  <Button 
                    onClick={this.handleSubmitProject}
                    type="submit"
                    color="info"
                    className="btn-round"
                    >Submit 
                  </Button>
                </form>
              </Container>
            </div>
          </section>
        </div>
      <DefaultFooter />
    </>
  )
}}
