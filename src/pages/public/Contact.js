import {Container, Row, Col, Form,} from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import FooterComponent from '../../components/FooterComponent';
import {FaAddressBook, FaPhone, FaMailBulk, FaWhatsapp} from 'react-icons/fa';
import React,{useState} from 'react';

const Contact = () => {
  const [validated, setValidated] = useState(false);
  // const [formValues, setFormValues] = useState('');

  // function handleChange(event){
  //   setFormValues({
  //       ...formValues,
  //       [event.target.name] : event.target.value
  //   })
  // }

  function handleSubmit(e){
    // e.preventDefault();
    const form = e.currentTarget;
    if(form.checkValidity() === false){
      e.preventDefault();
    }
  }

  return (
    <>
     <NavbarComponent/>
     <section className="py-4">
       <Container>
        <Row xs={1} md={2}>
          <Col>
            <h2 className="mt-4">Office Contact</h2>
            <h5>Address <FaAddressBook style={{color:"#1C4594"}} /> : Suite B14 Ultimate Plaza, Abakiliki Street, Awka, Anambra state, Nigeria</h5>
            <br />
            <h5>Telephone <FaPhone style={{color:"#1C4594"}} /> : +234 905 507 1201,   +234 708 025 5353</h5>
            <br />
            <h5>WhatsApp <FaWhatsapp style={{color:"green"}} /> : +234 708 025 5353</h5>
            <br />
            <h5>Email <FaMailBulk style={{color:"#1C4594"}} /> : hello@travelpal.com.ng</h5>
          </Col>

          <Col>
           <h2 className="mt-4">Contact form</h2>
           <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <Row xs={1} md={2}>
              <Col>
               <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" name="firstname" />
               </Form.Group>
              </Col>
              <Col>
               <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" name="lastname" />
               </Form.Group>
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col>
               <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" name="phone" />
               </Form.Group>
              </Col>
              <Col>
               <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email Address" name="email"/>
               </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
               <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={2} style={{resize:"none"}} className="mb-3" placeholder="write your message here ...." name="message" />
               </Form.Group>
              </Col>
            </Row>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Send</button>
           </Form>
          </Col>
        </Row>
       </Container>
     </section>
     <FooterComponent />
    </>
  )
}

export default Contact;