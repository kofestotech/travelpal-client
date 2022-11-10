import {Container, Row, Col, Form,} from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import FooterComponent from '../../components/FooterComponent';
import {FaAddressBook, FaPhone, FaMailBulk, FaWhatsapp} from 'react-icons/fa';
import React,{useState} from 'react';

const Contact = () => {
  // const [validated, setValidated] = useState(false);
  const [contacts, setContacts] = useState({});
  const [ errors, setErrors ] = useState({})

  const setField = (field, value) => {
    setContacts({
      ...contacts,
      [field]: value
    })
    //check if errors exist and remove them 
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }

  const findContactErrors = ()=> {
    const {firstname,lastname,email,message} = contacts;
    const newErrors = {};
    if(!firstname || firstname ===''){
      newErrors.firstname ='Please enter firstname';
    }
    if(!lastname || lastname === ''){
      newErrors.lastname = 'Please enter lastname';
    }
    if(!email || email === ''){
      newErrors.email = 'Please enter email';
    }else if(!contacts.email.match(/\S+@\S+\.\S+/)){
      newErrors.email = 'Please enter a valid email address';
    }
    if(!message || message === ''){
      newErrors.message = 'Please enter message';
    }
    return newErrors;
  }

  function handleSubmit(e){
    e.preventDefault();
    //get the form errors 
    const newErrors = findContactErrors();
    // Conditional logic:
    if ( Object.keys(newErrors).length > 0 ) {
      // We got errors!
      setErrors(newErrors)
    } else {
      // No errors! Put any logic here for the form submission!
      alert('Thank you for your feedback!');
      console.log(contacts);
    } 
  }
  
  // console.log(contacts)
  return (
    <>
     <NavbarComponent/>
     <section className="py-4">
       <Container>
        <Row xs={1} md={2}>
          <Col>
            <h2 className="mt-4">Office Contact</h2>
            <h5>Address <FaAddressBook style={{color:"#1C4594", display:'inline'}} /> : Suite B14 Ultimate Plaza, Abakiliki Street, Awka, Anambra state, Nigeria</h5>
            <br />
            <h5>Telephone <FaPhone style={{color:"#1C4594",display:'inline'}} /> : +234 905 507 1201,   +234 708 025 5353</h5>
            <br />
            <h5>WhatsApp <FaWhatsapp style={{color:"green",display:'inline'}} /> : +234 708 025 5353</h5>
            <br />
            <h5>Email <FaMailBulk style={{color:"#1C4594",display:'inline'}} /> : hello@travelpal.com.ng</h5>
          </Col>

          <Col>
           <h2 className="mt-4">Contact form</h2>
           <Form onSubmit={handleSubmit}>
            <Row xs={1} md={2}>
              <Col>
               <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="First Name" 
                  name="firstname" 
                  onChange={ e => setField('firstname', e.target.value) } 
                  isInvalid={ !!errors.firstname }
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.firstname}
                </Form.Control.Feedback>
               </Form.Group>
              </Col>
              <Col>
               <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Last Name" 
                  name="lastname" 
                  onChange={ e => setField('lastname', e.target.value) } 
                  isInvalid={ !!errors.lastname }
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.lastname}
                </Form.Control.Feedback>
               </Form.Group>
              </Col>
            </Row>

            <Row xs={1} md={2}>
              <Col>
               <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" name="phone" onChange={ e => setField('phone', e.target.value) } />
               </Form.Group>
              </Col>
              <Col>
               <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Email Address" 
                  name="email" 
                  onChange={ e => setField('email', e.target.value) }
                  isInvalid={ !!errors.email }
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.email}
                </Form.Control.Feedback>
               </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
               <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={2} 
                  style={{resize:"none"}} 
                  className="mb-3" 
                  placeholder="write your message here ...." 
                  name="message" 
                  onChange={ e => setField('message', e.target.value) } 
                  isInvalid={ !!errors.message }
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.message}
                </Form.Control.Feedback>
               </Form.Group>
              </Col>
            </Row>
            <button className="btn btn-lg btn-primary w-100" type="submit">Send</button>
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