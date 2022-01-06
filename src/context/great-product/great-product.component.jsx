import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "./great-product.style.scss";

const GreatProduct = ({title, rightSide}) => {
    
    return(
        <section id="great_product">
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <div className="content-wrapper">
                        <Row>
                            <Col lg={12}>
                                <div className="heading-content">
                                    <div className="heading">
                                        <h1>{title ? title : "Let’s build a great product together!"}</h1>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{justifyContent:"center"}}>
                            <Col lg={7}>
                                <div className="form-content">
                                    <div className="form-wrapper">
                                        <div className="heading">
                                            <h2>Tell us about your project:</h2>
                                        </div>
                                        <div className="project-form">
                                            <Form>
                                                <Row>
                                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                                    
                                                    <Form.Control type="text" placeholder="Your Name" />
                                                </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} controlId="formGridEmail">
                                                    
                                                    <Form.Control type="email" placeholder="Email" />
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="formGridPassword">
                                                    
                                                    <Form.Control type="text" placeholder="Phone Number" />
                                                    </Form.Group>
                                                </Row>

                                                <Row className="mb-3">
                                                    <Form.Group as={Col} controlId="formGridEmail">
                                                        <Form.Select defaultValue="Choose...">
                                                            <option>Web app development</option>
                                                            <option>...</option>
                                                        </Form.Select>
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="formGridPassword">
                                                        <Form.Select defaultValue="Choose...">
                                                            <option>Less than $1,000</option>
                                                            <option>...</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Row>

                                                <Row>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                        <Form.Control as="textarea" rows={4} placeholder="Project description: general description, features list, wireframes, mockups? Application: help with existing one or build from scratch"/>
                                                    </Form.Group>
                                                </Row>

                                                <Row>
                                                    <Form.Group controlId="formFile" className="mb-3">
                                                        <Form.Control type="file" />
                                                    </Form.Group>
                                                </Row>
                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5} style={{display:rightSide ? "none" : "show"}}>
                                <div className="what-next-content">
                                    <div className="what-next-wrapper">
                                        <div className="heading">
                                            <h2>What’s next?</h2>
                                        </div>
                                        <div className="detail">
                                            <ol>
                                                <li>We will contact you to discuss the next steps.</li>
                                                <li>In the meantime, you can check our <a href="" alt="" >Portfolio</a>.</li>
                                                <li>We will sign the NDA if required, and start the project discussion.</li>
                                                <li>Our mobile application development company’s experts will analyze your requirements and suggest the best ways to bring your idea to life.</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
        </section>
    )
}

export default GreatProduct;