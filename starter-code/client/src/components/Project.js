import '../assets/css/bootstrap.min.css';
import '../assets/css/bootstrap.min.css.map';
import '../assets/css/now-ui-kit.css';
import '../assets/css/now-ui-kit.css.map';
import '../assets/css/now-ui-kit.min.css';
import React, { Component } from 'react'
import instance from "../auth/customAxios";

import {
    Input,
    Container,
    Button,
    Row,
    Col,
  } from "reactstrap";

import ExamplesNavbar from './Navbars/ExamplesNavbar';

export default class Project extends Component {
    constructor(props){
        super(props);
    }

    state = {
        user:"",
        errorMessage: "",
        projects: []
    }

    componentDidMount(){
        instance({
            url: `${process.env.REACT_APP_Server_API}/project`,
            method: "GET"
        })
        .then((response)=> {
            this.setState({user: response.data.user, projects: response.data.projects})
        })
        .catch((error)=> {
            console.log(error)
        })
    }  
    
    render() {
        let projectInfo= this.state.projects.map(project => {
            return (
            <div className="section section-team text-center">
                <>
                    <h3>{project.name}</h3>
                    <h3>{project.location}</h3>
                    <h3>{project.tagline}</h3>
                    <h3>{project.description}</h3>
                    <h3>{project.tags}</h3>
                    <h3>{project.financing}</h3>
                    <h3>{project.timing}</h3>
                    <h3>{project.team}</h3>
                    <img src={project.picture}/>
                </>
            </div>
            )
        })
        return (
            <>
            <ExamplesNavbar navLinksBlack={true} className="text-black" />
                <div className="wrapper">
                <div className="section section-about-us">
                <Container>
                    <Row>
                     <Col className="ml-auto mr-auto text-center" md="8">
                        <h2 className="title">My Projects</h2>
                            <h5 className="description">
                            Here is the place where you can find all the projects you have created. 
                            Members of Roister can look at your projects, so provide as much description as possible.
                            </h5>
                            <h5>👋</h5>
                    </Col>
                    </Row>
                        <div className="separator separator-primary"></div>
                        <div className="section-story-overview">
                            <Row>
                                <Col md="6">
                                    {/* <img 
                                        src={this.state.projects.picture}
                                        className="image-container image-left"
                                    /> */}
                                    <div
                                        className="image-container image-left"
                                        style={{
                                        backgroundImage:
                                            "url(" + require(`../assets/img/Roister-small.png`) + ")"
                                        }}
                                    >
                                    </div>
                                </Col>
                                <Col md="5">
                                    <div
                                        className="image-container image-right"
                                        style={{
                                        backgroundImage:
                                            "url(" + require("../assets/img/cafe.jpg") + ")"
                                        }}
                                    >
                                    </div>
                                    
                                </Col>
                            </Row>
                        </div>
                    {projectInfo}
                </Container>
                </div>
                </div>
            </> 
        )
    }}
