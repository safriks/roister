import '../assets/css/bootstrap.min.css';
import '../assets/css/bootstrap.min.css.map';
import '../assets/css/now-ui-kit.css';
import '../assets/css/now-ui-kit.css.map';
import '../assets/css/now-ui-kit.min.css';
import React, { Component } from 'react'
import instance from "../auth/customAxios";
import {Link} from 'react-router-dom';

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
            <section id="section1">
                <div className="section section-team text-center">
                    <div className="team">
                        <Row>
                            <Col>
                            <div className="team-player">
                                    <img
                                        alt="project-picture"
                                        className="rounded-circle imageSize img-fluid img-raised"
                                        src={project.picture}
                                    ></img>
                                    <h4 className="title">{project.name}</h4>
                                    <p className="category text-info">{project.location}</p>
                                    <p className="category text-primary">{project.tags}</p>
                                    <p>{project.tagline}</p>
                                    <p className="description">"{project.description}"</p>
                                    <div className="project-styling">
                                        <p className="pTag-project description">💸 {project.financing} </p>
                                        <p className="pTag-project description">🕗 {project.timing}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
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
                            <a className="scroll-down"
                                href="#section1">
                                <span></span>
                                ⬇️
                            </a>
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
