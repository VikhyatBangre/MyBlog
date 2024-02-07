import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  NavbarText,
} from "reactstrap";
import { NavLink as ReactLink } from "react-router-dom";
import { useState } from "react";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <Navbar color="dark" dark expand="md" fixed="True">
          <NavbarBrand tag={ReactLink} to="/">
            {" "}
            My Blogs{" "}
          </NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink tag={ReactLink} to="/Home">
                  New Feed
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/About">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/Login">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/Signup">
                  Signup
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={ReactLink} to="/Sevices">Services</DropdownItem>
                  <DropdownItem tag={ReactLink} to="/Contact">Contact</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/YouTube">YouTube</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
            <NavbarText tag={ReactLink} to="/AddPost">
              Add Post
            </NavbarText>
            <NavbarText className="ms-2">Logout</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default MyNavbar;
