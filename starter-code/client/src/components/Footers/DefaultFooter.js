import React from "react";
import { Container } from "reactstrap";

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="/Roister"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                >   Privacy & Terms            
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                >  Made in 🇳🇱      
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
    </>
  );
}

export default DefaultFooter;
