import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "./Headbar.css"
import logo2 from '../../../images91/logo2.png'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { FaUser } from "react-icons/fa";

// ✅ added helper to close mobile menu
const closeCollapse = () => {
  const nav = document.getElementById("responsive-navbar-nav"); // ✅
  if (nav && nav.classList.contains("show")) {                  // ✅
    nav.classList.remove("show");                              // ✅
  }                                                             // ✅
};

function Headbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary irHEYc">
        <Container className='joy1'>
          <Navbar.Brand as={Link} to="/" onClick={closeCollapse}> {/* ✅ added onClick */}
            <img src={logo2} alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">

              <NavDropdown title="Home" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/" onClick={closeCollapse}>Home</NavDropdown.Item> {/* ✅ */}
                <NavDropdown.Item>Home 2</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/about" onClick={closeCollapse}>About</Nav.Link> {/* ✅ */}

              <NavDropdown title="Home Furniture" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/bedroom" onClick={closeCollapse}>Bedroom</NavDropdown.Item> {/* ✅ */}
                <NavDropdown.Item as={Link} to="/dining" onClick={closeCollapse}>Dining</NavDropdown.Item> {/* ✅ */}
                <NavDropdown.Item as={Link} to="/living" onClick={closeCollapse}>Living</NavDropdown.Item> {/* ✅ */}
              </NavDropdown>

              <NavDropdown title="Office Furniture" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/lounge" onClick={closeCollapse}>Lounge</NavDropdown.Item> {/* ✅ */}
                <NavDropdown.Item as={Link} to="/officeC" onClick={closeCollapse}>Office Chair</NavDropdown.Item> {/* ✅ */}
                <NavDropdown.Item as={Link} to="/officeT" onClick={closeCollapse}>Office Table</NavDropdown.Item> {/* ✅ */}
              </NavDropdown>

              <NavDropdown title="Hospital Furniture" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/hospitalB" onClick={closeCollapse}>Hospital Bed</NavDropdown.Item> {/* ✅ */}
                <NavDropdown.Item as={Link} to="/hospitalU" onClick={closeCollapse}>Hospital Utility</NavDropdown.Item> {/* ✅ */}
              </NavDropdown>

              <Nav.Link as={Link} to="/Map" onClick={closeCollapse}>Contact</Nav.Link> {/* ✅ */}
            </Nav>

            <Nav>
              <Nav.Link>
                <div className='ad1'>
                  <Link to='/addtoCart' onClick={closeCollapse}><FaShoppingCart /></Link> {/* ✅ */}
                </div>
              </Nav.Link>

              <Nav.Link>
                <div className='ad111'>
                  <Link to='/login1' onClick={closeCollapse}><FaUser /></Link> {/* ✅ */}
                </div>
              </Nav.Link>

              <Nav.Link eventKey={2} onClick={closeCollapse}>Dank memes</Nav.Link> {/* ✅ */}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>     
    </>
  )
}

export default Headbar;
