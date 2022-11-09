import {Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import travelpal from '../images/travelpal-logo.png';
import facebook from "../images//socials/facebook.svg";
import twitter from "../images/socials/twitter.svg";
import instagram from "../images/socials/instagram.svg";
import linkedin from "../images/socials/linkedin.svg";
import "./Footer.css";

const FooterComponent = () => {
  return (
    <footer className="footer pt-1">
     <Container className="py-2">
       <Row xs={1} md={5} className="footer-content">
        <Col>
        <img alt='travel' src={travelpal} style={{width:"130px",height:""}}/>
        </Col>
        <Col>
           <h2>About</h2>
           <ul>
                <li>
                    <Link to='/about-us'>About Travelpal</Link>
                </li>
                <li> 
                    <Link to='/about-us'>How we work</Link>
                </li>
                <li>
                    <Link to='/about-us'>Blog</Link>
                </li>
            </ul>
        </Col>

        <Col>
          <h2>Partner with us</h2>
            <ul>
                <li>
                    <Link to='/partnership'>Partnership programs</Link>
                </li>
                <li>
                    <Link to='/affiliate'>Affiliate programs</Link>
                </li>
                <li>
                    <Link to='/connectivity'>Connectivity partners</Link>
                </li>
                <li>
                    <Link to='/promotions'>Promotions and events</Link>
                </li>
                <li>
                    <Link to='/loyalty'>Loyalty program</Link>
                </li>
            </ul>
        </Col>

        <Col>
          <h2>Support</h2>
          <ul>
                <li>
                    <Link to='/help-center'>Help center</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact us</Link>
                </li>
                <li>
                    <Link to='/privacy-policy'>Privacy policy</Link>
                </li>
                <li>
                    <Link to='/terms'>Terms of service</Link>
                </li>
                <li>
                    <Link to='/trust-safety'>Trust and safety</Link>
                </li>
            </ul>
        </Col>

        <Col>
          <h2>Get the App</h2>
            <ul>
                <li>
                    <Link to='/'>Travelpal for Android</Link>
                </li>
                <li>
                    <Link to='/'>Travelpal for iOS</Link>
                </li>
            </ul>
        </Col>
       </Row>
     </Container>
     <hr className='footer-divider' />
     <div className="container">
        <div className='footer-bottom'>
            <ul className='socials'>
                <li>
                    <a href='https://www.facebook.com' target="_blank" rel='noopener noreferrer'>
                        <img alt='facebook' src={facebook} />
                    </a>
                </li>
                <li>
                    <a href='https://www.twitter.com' target="_blank" rel='noopener noreferrer'>
                        <img alt='twitter' src={twitter} />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/travelpal.ng' target="_blank" rel='noopener noreferrer'>
                        <img alt='instagram' src={instagram} />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com' target="_blank" rel='noopener noreferrer'>
                        <img alt='linkedin' src={linkedin} />
                    </a>
                </li>
            </ul>
            <p className='text-right copyright'>&copy; {new Date().getFullYear()} Travelpal Limited</p>
        </div>
     </div>
    </footer>
  )
}

export default FooterComponent;