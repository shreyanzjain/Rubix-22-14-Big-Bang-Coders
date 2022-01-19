import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed='top'>
              <Container>
                <Navbar.Brand href="#home">Recette</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#666">Home</Nav.Link>
                    <Nav.Link href="#343">About to expire</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
