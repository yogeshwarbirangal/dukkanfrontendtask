import '../index.css';
import React from 'react';
import { Col, Container, Row, Button , NavDropdown ,Nav,Navbar } from 'react-bootstrap';
import navlogo from '../assets/images/navbar-logo.png'


const Header = () =>{
  return (
    <>
        <header>
              <Container>
                    <Row>
                    

                            <Navbar expand="lg">
                                <Container>
                                  <Navbar.Brand href="#home">
                                  <div className='navlogo'>
                                          <img src={navlogo}  alt="dukkan"/>
                                  </div>

                                  </Navbar.Brand>
                                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                    
                                      
                                    <div className='navbtns'>
                                                <Button  className="signbtn">Sign In</Button>
                                                <Button variant="light" className="dukkanbtn">Dukaan for PC</Button>
                                      </div>

                                  </Navbar.Collapse>
                                </Container>
                            </Navbar>
                    </Row>
              </Container>
        </header>
    </>
  );  
}

export default Header;
