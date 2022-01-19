import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'

function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed='top'>
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
              <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">The final destination to save your basket.</h2>
                <div class="md:w-3/5 md:pl-6">
                  <p class="leading-relaxed text-base">The world is very concerned with eating clean and green these days. Intermittent fasting, Veganism and keto diet are terms we have all heard and maybe even tried. But a lot of these need time effort and most importantly resources.
	
	Food waste is still a big concern. The fast lifestyles make people buy in bulk and get things fast and easy. With food and grocery delivery services it is even simpler to just get stuff on hands. So, the value of what we have is reduced greatly and we just throw things that are old and expired. All the resource and energy consumption will contribute to leaving a carbon footprint on the planet
	
	With RECETTE you can keep track of your groceries and make sure to use them up before they go out of date. Keep adding in whatever you purchase and have it all in one place. It is easy to use on all your devices too. 
	
	Happy Eating!!!</p>
                  <p class="leading-relaxed text-base">Nathani Juhi | Dahikar Sneha | Jaiswal Ved | Jain Shreyans</p>
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
