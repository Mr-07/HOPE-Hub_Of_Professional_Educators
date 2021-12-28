import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Contact from 'images/ContactUs.svg';

function Testimonials() {
    return (
        <Container fluid className="row-padding">
            <Form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
               <Row>
                    <Col md={6} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Row>
                            <Col md={4}>
                                <Form.Group className="mb-4" controlId="formGroupFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="John" />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-4" controlId="formGroupLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Doe" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                    <Form.Group className="mb-4" controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="abc@example.com" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-4" controlId="formGroupEmail">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="number" placeholder="+919876543210" />
                                    </Form.Group>
                                </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <Form.Group className="mb-4" controlId="formGroupEmail">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" placeholder="Message" />
                                </Form.Group>
                            </Col>
                            <Col md={8}>
                                <Form.Group className="mb-4" controlId="formGroupEmail">
                                    <Form.Label>Contact Hours</Form.Label>
                                    <Form.Control type="text" placeholder="9:00AM - 7:30PM" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}><div style={{padding: '1rem', background: '#2F2E41', color: 'white', textAlign: 'center', fontWeight: 'bold', border: '1px solid transparent', borderRadius: '0.2rem'}}>{'Send Message'}</div></Col>
                        </Row>
                    </Col>
                    <Col md ={6} >
                        <img src={Contact} />
                    </Col>
               </Row>
            </Form>
        </Container>
    )
}

export default Testimonials

