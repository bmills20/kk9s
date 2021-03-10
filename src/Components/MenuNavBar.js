import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Collapse,
} from "react-bootstrap";
import { CSSTransition } from 'react-transition-group';
import "./MenuNavBar.css";

class SubMenu extends React.Component{
  render(){
    return(
      <React.Fragment>
        <NavDropdown.Item href="/page1">Page 1</NavDropdown.Item>
        <NavDropdown.Item href="/page2">Page 2</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/page1">Page 3</NavDropdown.Item>
      </React.Fragment>
    )
  }
}

export default class MenuNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false
    }
  }

  // Dropdown state events allows for hover instead of click on navbar dropdowns

  handleHover = (event) => {
    this.setState({ showDropDown: true });
  }

  handleLeave = (event) => {
    this.setState({ showDropDown: false });
  }

  render(){
    return (
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="/">KK9s</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/page1">Page 1</Nav.Link>
            <Nav.Link href="/page2">Page 2</Nav.Link>
              <NavDropdown show={this.state.showDropDown} onMouseLeave={this.handleLeave} onMouseEnter={this.handleHover} title="Admin" id="basic-nav-dropdown"> 
                <div className="dropSeparator">  
                  <NavDropdown.Item href="/page1">Page 1</NavDropdown.Item>
                  <NavDropdown.Item href="/page2">Page 2</NavDropdown.Item>
                  <NavDropdown.Item href="/page1">Page 3</NavDropdown.Item>
                </div>
              </NavDropdown>
            
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
