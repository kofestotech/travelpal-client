import {Container, Row, Col} from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import FooterComponent from '../../components/FooterComponent';
import './About.css';

const About = () => {
  return (
    <>
    <NavbarComponent />
    <section className="py-4">
      <Container>
        <Row xs={1} md={2}>
          <Col>
            <div className="bg-about rounded p-5">
              <h1>About Us</h1>
            </div>
          </Col>
          <Col className="p-4">
            <p>
             TravelPal is a cutting edge company that is obsessed With streamlining and making all aspects of air travel seamless and easy for our costumers. 
             We undertake flight Bookings, hotel bookings, visa Applications and Vacation/Tour packages for our costumers. 
            </p>
            <p>
             At TravelPal we are all about friendship and community. Hence we make sure our vacation trips are packed with events, activities and amenities that makes you feel right at home and brings out the inner child in you to play.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <FooterComponent/>
    </>
  )
}

export default About;