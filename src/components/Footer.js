import '../index.css';
import React from 'react';
import { Col, Container, Badge, Row } from 'react-bootstrap';
import footerlogo from '../assets/images/footer-logo.png'
import indiaflag from '../assets/images/india-flag.png'


const  Footer = () => {
  return (
    <>


<footer>
<Container className='footer'>
  <Row className="footercontent">

      <Col md={3} >
          <img src={footerlogo} className="footerlogo" alt='dukaan'/>
      </Col>

    <Col>
    <ul className='footer-nav'>
        <li>
              Contact
        </li>
        <li>
              FAQ's
        </li>
       
      </ul>
    </Col>

    <Col>
    <ul className='footer-nav'>
        <li>
              Tutorials
        </li>
        <li>
              Blog
        </li>
       
      </ul>
    </Col>


    <Col>
    <ul className='footer-nav'>
        <li>
              Privacy 
        </li>
        <li>
              Banned Items
        </li>
        
      </ul>
    </Col>

    <Col >
    <ul className='footer-nav'>
        <li>
              About
        </li>
        <li>
              Jobs <Badge pill bg="light" text="dark">3</Badge>
        </li>
        
      </ul>
    </Col>

    <Col>
      <ul className='footer-nav'>
        <li>
              Facebook
        </li>
        <li>
              Twitter
        </li>
        <li>
              Linkedin
        </li>
      </ul>

    </Col>
  </Row>

    <div className='copyright'>
        <p>
          Dukaan 2020, All rights reserved.
        </p>

          <p>
          Made in <img src={indiaflag} className="indiaflag" alt="india"/>
          </p>
    </div>

</Container>
</footer>


    </>
  );  
}

export default Footer;
