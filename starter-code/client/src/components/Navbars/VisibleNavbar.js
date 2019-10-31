import React from "react";
import {getUser} from "../../auth/auth";

// reactstrap components
import {
  Collapse,
  Button,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function VisibleNavbar() {
  var user = getUser();
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen
      ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) 
      : null}
      <Navbar className={"fixed-top " + navbarColor} id="navbar" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header tag="a">
                Dropdown header
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                One more separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <Button 
            href="/" 
            target="_blank" 
            id="navbar-brand" 
            color="primary">
            Roister
            </Button>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            <>{user 
            ? <><NavItem>
                <NavLink 
                href="/"
                id="links">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                href="/Roister"
                id="links">
                  About Us
                </NavLink>
              </NavItem>
              </>
            : <><NavItem>
                <NavLink
                href="/"
                id="links">
                  Logout
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                href="/"
                id="links">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                href="/Roister"
                id="links">
                  About Us
                </NavLink>
              </NavItem>
              </>
            }</>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default VisibleNavbar;
