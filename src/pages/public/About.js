import {Container, Row, Col} from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import FooterComponent from '../../components/FooterComponent';

const About = () => {
  return (
    <>
    <NavbarComponent />
    <section className="py-4">
      <Container>
        <h2>Hello from about page</h2>
      </Container>
    </section>
    <FooterComponent/>
    </>
  )
}

export default About;