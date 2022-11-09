import NavbarComponent from '../../components/NavbarComponent';
import './Home.css';
import {Container, Row, Col, Card} from 'react-bootstrap';
import mohamedAjufaan from "../../images/mohamed-ajufaan.jpg";
import pierreDeguide from "../../images/pietro-de-grandi-guide.jpg";
import TheBund from "../../images/The-Bund.jpg";
import OperaHouse from "../../images/OperaHouse.jpg";
import kodaijiLight from "../../images/Kodaiji_Light.jpg";
import tsavoEast from "../../images/Tsavo-East-National-Park.jpg";
import maldives from '../../images/maldives.jpg';
import ourika from '../../images/ourika-from-marrakech.jpg';
import mongolia from '../../images/mongolia.jpg';
import FooterComponent from '../../components/FooterComponent';
import FlightCard from '../../components/FlightCard';

const Home = () => {
  return (
    <>
    <NavbarComponent />
    <section className="pt-4">
      <div className="container mx-auto p-5 hero-img">
        <div>
          <h1 className="font-bold text-6xl text-indigo-900 text-center">Explore the world</h1>
          <p className="text-center font-bold text-3xl text-yellow-500 py-6">DISCOVER BEAUTIFUL PLACES WITH US</p>
          <div className="mx-auto rounded py-2">
            {/**Flight booking form component goes here ... */}
            <FlightCard />
          </div>
        </div>
      </div>
      <Container>
      <Row xs={1} md={2} className="explore-section g-4">
        <Col>
        <img alt='tour' className='img-fluid' src={mohamedAjufaan} style={{width:"100%"}} />
        </Col>
        <Col>
          <h1>A new way to explore the world</h1>
          <p className='mb-5'>
            For some time now, travellers have reached travelpal when looking to plan and execute their perfect trip, but now they can also let travelpal lead the way.
          </p>
          <button className='mt-2 explore-btn'>Learn more</button>
        </Col>
      </Row>
      <Row xs={1} md={2} className='explore-section mb-5'>
        <Col className='order-md-first order-last mt-4'>
        <h1>Amazing Travel guide by us</h1>
        <p>
          Packed with tips and advice from our on the ground experts, Travelpal guides is the ultimate resource before and during a trip
        </p>
        </Col>
        <Col>
         <img alt='tour' className='img-fluid' src={pierreDeguide} style={{width:"100%"}} />
        </Col>
      </Row>
      </Container>

      <Container>
      <h4 className='mt-4' style={{color:"#6E7491"}}>Find your next adventure with these <span style={{color:"#605DEC"}}>flight deals</span></h4>
      <Row xs={1} md={3}>
       <Col>
        <Card>
        <Card.Img variant="top" src={TheBund} className="adventure-img" />
        <Card.Body>
         <Card.Title>The Bund, <span className='city'>Shanghai</span> <span className='price'>$598</span></Card.Title>
         <Card.Text>
         China's most international city
         </Card.Text>
        </Card.Body>
        </Card>
       </Col>

       <Col>
       <Card>
        <Card.Img variant="top" src={OperaHouse} className="adventure-img" />
        <Card.Body>
         <Card.Title>Sydney Opera House, <span className='city'>Sydney</span> <span className='price'>$981</span></Card.Title>
         <Card.Text>
         Take a stroll along the famous harbor
         </Card.Text>
        </Card.Body>
        </Card>
       </Col>

       <Col>
       <Card>
        <Card.Img variant="top" src={kodaijiLight} className="adventure-img" />
        <Card.Body>
         <Card.Title>Kodaiji Temple, <span className='city'>Kyoto</span> <span className='price'>$633</span></Card.Title>
         <Card.Text>
         Step back in time in the Gion city
         </Card.Text>
        </Card.Body>
        </Card>
       </Col>
      </Row>
      <Row className='my-5'>
        <Col>
        <Card>
          <Card.Img variant="top" src={tsavoEast}/>
          <Card.Body>
          <Card.Title>Tsavo East National Park, <span>Kenya</span> <span className='price'>$1,248</span></Card.Title>
          <Card.Text>
          Named after the Tsavo River, and opened in April 1984, Tsavo National park is one of the oldest park in Kenya. It is located in the semi-arid Taru Desert.
          </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      </Container>

      <Container>
        <div className='explore'>
          <h2>Explore Unique <span className='stay'>places to stay</span></h2>
        </div>
        <Row xs={1} md={3} className='g-4'>
          <Col>
           <Card>
            <Card.Img variant="top" src={maldives} className="adventure-img"/>
            <Card.Body>
              <Card.Title>Stay among the atolls in <span className='stay'>Maldives</span></Card.Title>
              <Card.Text>
              From the 2nd century AD, the islands where known as the 'Money Isles' due to the abundance of cowry shells, a currency
              of the early ages.
              </Card.Text>
            </Card.Body>
           </Card>
          </Col>

          <Col>
          <Card>
            <Card.Img variant="top" src={ourika} className="adventure-img"/>
            <Card.Body>
              <Card.Title>Experience the Ourika Valley in <span className='stay'>Morocco</span></Card.Title>
              <Card.Text>
              Morocco's Hispano-Moorish architecture blends influences from Berber culture, Spain and contemporary artistic currents
              in the Middle East.
              </Card.Text>
            </Card.Body>
           </Card>
          </Col>

          <Col>
          <Card>
            <Card.Img variant="top" src={mongolia} className="adventure-img"/>
            <Card.Body>
              <Card.Title>Live traditionally in <span className='stay'>Mongolia</span></Card.Title>
              <Card.Text>
              Traditional Mongolian yurts consist of an angled lattice work of wood or bamboo for walls, ribs, and a wheel
              </Card.Text>
            </Card.Body>
           </Card>
          </Col>
        </Row>
        <div className='row py-4 d-flex justify-content-center'>
          <button className='explore-btn' style={{height:"60px"}}>Explore more stay</button>
        </div>
      </Container>
    </section>
    <FooterComponent />
    </>
  )
}

export default Home;