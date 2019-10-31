import React from 'react'
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/bootstrap.min.css.map';
import '../../assets/css/now-ui-kit.css';
import '../../assets/css/now-ui-kit.css.map';
import '../../assets/css/now-ui-kit.min.css';

import {
  Container,
  Row,
  Col,
} from "reactstrap";

export default function HeaderDescription(props) {
    return (
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                {props.children}
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
                        "url(" + require(`../../assets/img/group-working.jpg`) + ")"
                    }}
                  >
                  </div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/cafe.jpg") + ")"
                    }}
                  >
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
    )
}
