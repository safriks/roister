import React from "react";
import '../assets/css/bootstrap.min.css'
import '../assets/css/bootstrap.min.css.map'
import '../assets/css/now-ui-kit.css'
import '../assets/css/now-ui-kit.css.map'
import '../assets/css/now-ui-kit.min.css'

import {
  Container,
  Row,
  Col
} from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "./Headers/LandingPageHeader.js";
import TransparentFooter from "./Footers/TransparentFooter.js";

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar/>  
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                  Roister is for those entrepreneurial top-talents who want to be founding and creating something new rather than
                  working for someone else and for those start-ups who are looking for talented
                  people to join the team in return for a piece of the cake or monetary compensation. 
              </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("../assets/img/cafe.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Roister is where perfect teams are made."<br></br>
                      <br></br>
                      <small>Tommi Lahtinen, Founder of Roister</small>
                    </p>
                  </div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("../assets/img/group-working.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                  Unlike any other online platform, Roister connects talented people
                  with start-ups in their earliest stages. 
                  </h3>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Here is our team</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../assets/img/Tommi.jpeg")}
                    ></img>
                    <h4 className="title">Tommi Lahtinen</h4>
                    <p className="category text-info">Founder</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../assets/img/Aleks.png")}
                    ></img>
                    <h4 className="title">Aleks Safronovs</h4>
                    <p className="category text-info">Co-Founder</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      <TransparentFooter />
    </div>
  </>
);
}

export default LandingPage;
