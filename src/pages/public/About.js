import {Container, Row, Col} from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import FooterComponent from '../../components/FooterComponent';

const About = () => {
  return (
    <>
    <NavbarComponent />
    <section className="py-4">
        <h2>This is about us page</h2>
    </section>
    <FooterComponent/>
    </>
  )
}

export default About;