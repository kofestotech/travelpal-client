import React from 'react';
import NavbarComponent from '../../components/NavbarComponent';
import FooterComponent from '../../components/FooterComponent';
import {Container, Row, Col} from 'react-bootstrap';

const Register = () => {
  return (
    <>
    <NavbarComponent />
    <section className="py-4">
      <Container>
      <h2>This is signup page</h2>
      </Container>
    </section>
    </>
  )
}

export default Register;