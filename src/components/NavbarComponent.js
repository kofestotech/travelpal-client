// import {NavLink} from 'react-router-dom';
import {Container, Navbar, Nav, Offcanvas} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import travelpa from '../images/travelpal-logo.png';
import './Navbar.css';

const NavbarComponent = () => {

  return (
    <>
    {['md'].map((expand) =>(
      <Navbar key={expand} expand={expand} className="bg-teal-500 shadow-lg" sticky="top" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img alt='logo' src={travelpa} className='img-fluid' style={{width:'80px'}} />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <LinkContainer to='/'>
                  <Navbar.Brand>
                    <img alt='logo' src={travelpa} className='img-fluid' style={{width:'100px'}} />
                  </Navbar.Brand>
                </LinkContainer>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto">
                  <LinkContainer to='/'>
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/about-us'>
                   <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link>Contact</Nav.Link>
                  </LinkContainer>
                </Nav>
                <Nav>
                  <LinkContainer to='/login'>
                    <Nav.Link>Sign in</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/register'>
                    <Nav.Link className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">
                      Sign Up
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
      </Navbar> 
      ))}  
    </>
  )
}

export default NavbarComponent;

/**
Home | About Us | Contact | Sign in | Book Now 
<Navbar fixed="top" />

expanded
onToggle 
*/