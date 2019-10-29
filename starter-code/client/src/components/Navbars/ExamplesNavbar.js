import React from "react";
import {getUser, logout} from "../../auth/auth";

import {
  Collapse,
  Button,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  Input,
  Form,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function handleLogout(){
  logout()
}

function ExamplesNavbar(props) {
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
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
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
            href="/login" 
            target="_blank" 
            id="navbar-brand" 
            color="primary">
            Roister
            </Button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            <>{user
            ? <>
            <NavItem>
              <Form action="/action_page.php">
                <Input type="text" placeholder="Search.." name="search"></Input>
                <button type="submit"></button>
              </Form>
            </NavItem>
            <NavItem>
                <NavLink onClick={()=> handleLogout()}>
                  Logout
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/create">
                  Create Profile
                </NavLink>
              </NavItem>
              </>
            : <>
              <NavItem>
                <NavLink href="/">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
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

export default ExamplesNavbar;
