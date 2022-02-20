import '../index.css';
import React from 'react';
import { useState, useRef } from 'react';

import { Col, Container, Row, Card, Button, Overlay,Toast, OverlayTrigger, Pagination , Tooltip } from 'react-bootstrap';
import rec1 from '../assets/images/Rectangle 124.png'
import rec2 from '../assets/images/Rectangle 125.png'
import rec3 from '../assets/images/Rectangle 126.png'
import rec4 from '../assets/images/Rectangle 127.png'
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import nextimg from '../assets/images/Path 2 Copy.png'


const Body = () => {



  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const target = useRef(null);


  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to Copy
    </Tooltip>
  );

  return (
    <>


      {/* middle section */}


      <section className="middlesection">
        <Container>
          <Row>
            <Col>
              <div className='middleone'>

                <div className="middlecontentone">
                        <h3>
                          Free slogan maker
                        </h3>
                        <p className="simply">
                          Simply enter a term that describes your business, and get up to 1,000  <br></br> relevant slogans for free.
                        </p>

                          <p className="word">
                              Word for your slogan
                          </p>
                          <Toast>
                              <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                <strong className="me-auto">cozy</strong>
                              </Toast.Header>
                          
                          </Toast>

                          <Button className="slogans">
                              Generate slogans
                          </Button>

                          <hr/>
                </div>

                <div className='middle-content-two'>
                  <div className='middle-content-two-title'>
                    <h4>
                      We have generated 1,023 slogans for “cozy”
                    </h4>

                    <Button variant="outline-primary download">Download all</Button>


                  </div>

                  <div className='middle-content-boxes'>
                   
                    <Row>
                      <Col sm={6}>

                        <OverlayTrigger placement="left" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow(!show)} className="box">

                            There is no Sore it will Not Heal, No cool it will not Subdue.

                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                     
                      <Col sm={6}>

                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow1(!show1)} className="box">
                            coziness building for tomorrow
                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show1} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col sm={6}>

                        <OverlayTrigger placement="left" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow(!show)} className="box">

                            There is no Sore it will Not Heal, No cool it will not Subdue.

                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                     
                      <Col sm={6}>

                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow1(!show1)} className="box">
                            coziness building for tomorrow
                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show1} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={6}>

                        <OverlayTrigger placement="left" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow(!show)} className="box">

                            There is no Sore it will Not Heal, No cool it will not Subdue.

                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                     
                      <Col sm={6}>

                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow1(!show1)} className="box">
                            coziness building for tomorrow
                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show1} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={6}>

                        <OverlayTrigger placement="left" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow(!show)} className="box">

                            There is no Sore it will Not Heal, No cool it will not Subdue.

                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                     
                      <Col sm={6}>

                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow1(!show1)} className="box">
                            coziness building for tomorrow
                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show1} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={6}>

                        <OverlayTrigger placement="left" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow(!show)} className="box">

                            There is no Sore it will Not Heal, No cool it will not Subdue.

                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                     
                      <Col sm={6}>

                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow1(!show1)} className="box">
                            coziness building for tomorrow
                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show1} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={6}>

                        <OverlayTrigger placement="left" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow(!show)} className="box">

                            There is no Sore it will Not Heal, No cool it will not Subdue.

                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                     
                      <Col sm={6}>

                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow1(!show1)} className="box">
                            coziness building for tomorrow
                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show1} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={6}>

                        <OverlayTrigger placement="left" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow(!show)} className="box">

                            There is no Sore it will Not Heal, No cool it will not Subdue.

                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                     
                      <Col sm={6}>

                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow1(!show1)} className="box">
                            coziness building for tomorrow
                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show1} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                    </Row>



                    <Row>
                      <Col sm={6}>

                        <OverlayTrigger placement="left" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow(!show)} className="box">

                            There is no Sore it will Not Heal, No cool it will not Subdue.

                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                     
                      <Col sm={6}>

                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
                          <div ref={target} onClick={() => setShow1(!show1)} className="box">
                            coziness building for tomorrow
                          </div>

                        </OverlayTrigger>

                        <Overlay target={target.current} show={show1} placement="left">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              Copied
                            </Tooltip>
                          )}
                        </Overlay>
                      </Col>
                    </Row>


                  </div>
                </div>

                  <div className='middle-content-three'>  
                              <hr/>

                              <div className="page-num">
                                      <Pagination>
                                            
                                            <Pagination.Item active={true}>{1}</Pagination.Item>
                                            <Pagination.Item>{2}</Pagination.Item>
                                            <Pagination.Item>{3}</Pagination.Item>
                                            <Pagination.Item>{1}</Pagination.Item>
                                           
                                            <Pagination.Ellipsis />

                                            <Pagination.Item>{21}</Pagination.Item>
                                      </Pagination>
                               </div>
                               <div className="next-btn">
                                   Next
                                   <img src={nextimg} alt='nextimg'/>
                               </div>

                  </div>            

              </div>
            </Col>
          </Row>
        </Container>


      </section>

      {/* icon section */}
      <section className="icons">
        <Container>
          <Row>
            <Col sm={4}>
              <div className='iconitem'>
                <div className='iconimg'>
                  <img src={icon1} alt="icon" />
                </div>

                <div className='icontitle'>
                  <h5>Search</h5>
                </div>

                <div className='iconcontent'>
                  <p>
                    Simply add a keyword or a term related to
                    your business in the slogan maker search box.
                    Wait for the magic to happen.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className='iconitem'>
                <div className='iconimg'>
                  <img src={icon2} alt="icon" />
                </div>

                <div className='icontitle'>
                  <h5>Select</h5>
                </div>

                <div className='iconcontent'>
                  <p>
                    Choose from thousands of options generated by the slogan maker that fit your needs.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className='iconitem'>
                <div className='iconimg'>
                  <img src={icon3} alt="icon" />
                </div>

                <div className='icontitle'>
                  <h5>Stand out</h5>
                </div>

                <div className='iconcontent'>
                  <p>
                    Congrats on your new slogan. It's time to <br></br> win the world!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* product section */}
      <section className='productsec'>

        <Container>
          <Row>
            <h2 className='producttitle'>
              Try our other free products
            </h2>
          </Row>
          <Row>
            <Col sm={4}>
              <Card className="cards">
                <Card.Img variant="top" src={rec1} />
                <Card.Body>
                  <Card.Title>Privacy Policy Generator</Card.Title>
                  <Card.Text>
                    Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="cards">
                <Card.Img variant="top" src={rec2} />
                <Card.Body>
                  <Card.Title>Terms & Conditions Generator</Card.Title>
                  <Card.Text>
                    Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="cards">
                <Card.Img variant="top" src={rec3} />
                <Card.Body>
                  <Card.Title>Domain Name Generator</Card.Title>
                  <Card.Text>
                    Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


          </Row>
          <Row className='secondrow'>

            <Col md={4}>
              <Card className="cards">
                <Card.Img variant="top" src={rec4} />
                <Card.Body>
                  <Card.Title>Invoice Generator</Card.Title>
                  <Card.Text>

                    Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>

      </section>
    </>
  );
}

export default Body;
