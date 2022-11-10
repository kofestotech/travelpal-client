import {FaPlaneArrival, FaPlaneDeparture, FaCalendarWeek} from 'react-icons/fa';
import {Form,Container,Card,Row,Col,InputGroup} from 'react-bootstrap';
import {useState} from 'react';

const FlightCard = () => {
  const [bookingType, setBookingType] = useState(false);

  return (
    <>
     <Container>
      <Form>
        <Card className='my-2'>
          <Card.Body>
          <Card.Title>Locations</Card.Title>
          <Row xs={1} md={2}>
            <Col>
             <div className='mb-2'>
              <Form.Label>From where ?</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                 <FaPlaneDeparture />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="From where ?"  />
              </InputGroup>
             </div>
            </Col>
            <Col>
             <div className='mb-2'>
              <Form.Label>Where to ?</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                 <FaPlaneArrival />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Where to ?"  />
              </InputGroup>
             </div>
            </Col>
          </Row>
          </Card.Body>
        </Card>
        <Row>
          <Col className='mb-2'>
            <Card className='h-100'>
              <Card.Body>
                <Card.Title>Dates</Card.Title>
                <Form.Label>Flight</Form.Label>
                {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="One Way"
                    name="flight"
                    type={type}
                    id={`inline-${type}-one`}
                    onChange={e => setBookingType(false)}
                  />
                  <Form.Check
                    inline
                    label="Round Trip"
                    name="flight"
                    type={type}
                    id={`inline-${type}-round`}
                    onChange={e => setBookingType(true)}
                  />
                  </div>
                  ))}
                  <div id="departure-date" className="mb-2">
                    <Form.Label>Departure date</Form.Label>
                    <InputGroup>
                     <InputGroup.Text>
                      <FaCalendarWeek />
                     </InputGroup.Text>
                     <Form.Control type="date" />
                    </InputGroup>
                  </div>
                  {
                    bookingType ? (
                      <div id="return-date" className="mb-2">
                        <Form.Label>Return date</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FaCalendarWeek />
                          </InputGroup.Text>
                          <Form.Control type="date" />
                        </InputGroup>
                      </div>
                    ) :""
                  }
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-2'>
            <Card className='h-100'>
              <Card.Body>
                <Card.Title>Details</Card.Title>
                <div className='mb-2'>
                  <Form.Label>Travel class</Form.Label>
                  <Form.Select name='travelClass'>
                    <option value="ECONOMY">Economy</option>
                    <option value="PREMIUM_ECONOMY">Premium Economy</option>
                    <option value="BUSINESS">Business</option>
                    <option value="FIRST">First Class</option>
                  </Form.Select>
                </div>
                <Form.Label>Passengers</Form.Label>
                <div className="mb-2">
                  <InputGroup>
                   <InputGroup.Text>Adults</InputGroup.Text>
                   <Form.Control 
                    type="number" 
                    min="1"
                    defaultValue="1"
                   />
                  </InputGroup>
                  <span id="adults-label" className="form-text">12 years old and older</span>
                </div>
                <div className="mb-2">
                  <InputGroup>
                   <InputGroup.Text>Children</InputGroup.Text>
                   <Form.Control 
                    type="number" 
                    min="0"
                    defaultValue="0"
                   />
                  </InputGroup>
                  <span id="children-label" className="form-text">2 to 12 years old</span>
                </div>
                <div className="mb-2">
                  <InputGroup>
                   <InputGroup.Text>Infants</InputGroup.Text>
                   <Form.Control 
                    type="number" 
                    min="0"
                    defaultValue="0"
                   />
                  </InputGroup>
                  <span id="children-label" className="form-text">Up to 2 years old</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <button id="search-button" className="w-100 btn btn-primary travel-search" >Search</button>
      </Form>
     </Container>
    </>
  )
}

export default FlightCard;