// import {NavLink} from 'react-router-dom';
import {Container, Navbar, Nav, Offcanvas} from 'react-bootstrap';
import travelpa from '../images/travelpal-logo.png';
import './Navbar.css';

const NavbarComponent = () => {

  return (
    <>
    {['md'].map((expand) =>(
      <Navbar key={expand} expand={expand} className="bg-teal-500 shadow-lg" sticky="top" collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>
            <img alt='logo' src={travelpa} className='img-fluid' style={{width:'80px'}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Navbar.Brand href='/'>
                  <img alt='logo' src={travelpa} className='img-fluid' style={{width:'100px'}} />
                </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about-us">About</Nav.Link>
                  <Nav.Link href='/contact'>Contact</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href='/login'>Sign in</Nav.Link>
                  <Nav.Link href='/register' className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">
                    Book Now
                  </Nav.Link>
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