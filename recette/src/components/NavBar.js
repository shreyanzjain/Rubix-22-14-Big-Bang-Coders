import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'

function NavBar() {
    return (
        <div>
            <Navbar expand='lg' bg='dark' variant='dark'>
              <Container>
                <Navbar.Brand href="#home">Recette</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#666">Inventory</Nav.Link>
                    <Nav.Link href="#343">About to expire</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <section class="text-gray-600 body-font">
              <div class="container px-5 pt-10 pb-32 mx-auto flex flex-wrap">
                <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">The final destination to save your basket.</h2>
                <div class="md:w-3/5 md:pl-6">
                  <p class="leading-relaxed text-base"><br/><br/><br/>Keep track of your inventory, all at one single place. This application will aid you in your journey to become a better human.</p>
                  <p class="leading-relaxed text-base"><br/><br/><br/><br/><br/>Nathani Juhi | Dahikar Sneha | Jaiswal Ved | Jain Shreyans</p>
                  <div class="flex md:mt-4 mt-6">
                    <a href='#666' class='no-underline mx-auto'>
                      <button class="inline-flex text-black font-semibold bg-emerald-300 border-0 py-1 px-4 focus:outline-none hover:bg-emerald-400 rounded">Go to inventory.</button>
                      </a>    
                  </div>
                </div>
              </div>
            </section>
        </div>
    )
}

export default NavBar
