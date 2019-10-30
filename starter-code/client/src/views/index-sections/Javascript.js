import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Modal,
  ModalBody,
  Row,
  Col,
} from "reactstrap";

// core components
function Javascript(props) {
  const [modal1, setModal1] = React.useState(false);

  return (
      <>
        {props.errorMessage === "" 
          ? 
          <Container>
                <Row id="modals">
                  <Col md="12">
                    <Button
                      type="submit"
                        block
                        className="btn-round"
                        color='primary'
                        size="lg"
                    >
                    Get Started
                    </Button>
                  </Col>
                </Row>
            </Container>
            :
            <Container>
              <Row id="modals">
                <Col md="12">
                  <Button
                     type="submit"
                      block
                      className="btn-round"
                      color='primary'
                      size="lg"
                    onClick={() => setModal1(true)}
                  >
                  Get Started
                  </Button>
                    <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                      <div className="modal-header justify-content-center">
                        <button
                          className="close"
                          type="button"
                          onClick={() => setModal1(false)}
                        >
                          <i className="now-ui-icons ui-1_simple-remove"></i>
                        </button>
                        <h4 className="title title-up">Oops! Something went wrong</h4>
                      </div>
                    <ModalBody>
                      <p>
                     {props.errorMessage}. Try again or click on "Need Help?" to reset it.
                      </p>
                    </ModalBody>
                      <div className="modal-footer">
                        <Button
                          color="danger"
                          type="button"
                          onClick={() => setModal1(false)}
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                  </Col>
                </Row>
              </Container>
        }   
        </>
    );
}

export default Javascript;