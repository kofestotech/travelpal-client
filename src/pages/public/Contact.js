import {Container, Row, Col} from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import FooterComponent from '../../components/FooterComponent';

const Contact = () => {
  return (
    <>
     <NavbarComponent/>
     <section className="py-4">
       <Container>
        <h2>hello from contact</h2>
       </Container>
     </section>
     <FooterComponent />
    </>
  )
}

export default Contact;