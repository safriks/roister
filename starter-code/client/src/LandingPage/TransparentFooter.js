/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-transparent-footer"
            target="_blank"
          >
            Invision
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/safriks/roister"
            target="_blank"
          >
            Julieta Martinez-Rey & Ines Dimassi
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
