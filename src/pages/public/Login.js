import NavbarComponent from '../../components/NavbarComponent';
import FooterComponent from '../../components/FooterComponent';
import travelpal from '../../images/travelpal-logo.png';
import {Container, Form} from 'react-bootstrap';
import './Login.css';

const Login = () => {
  return (
    <>
     <NavbarComponent />
     <section className="py-4">
       <Container>
        <div className="login pt-5">
          <img alt="travelpal" src={travelpal} className="mt-4" />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="travelpal-login mb-5">
            <Form className="form-signin">
              <Form.Group className="mb-2">
                <Form.Control type="email" placeholder="Email address" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </Form>
          </div>
        </div>
       </Container>
     </section>
     <FooterComponent/>
    </>
  )
}

export default Login;
