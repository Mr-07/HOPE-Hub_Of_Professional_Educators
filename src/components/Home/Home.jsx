import home from 'images/Home.jpeg';
import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    const features = getFeatures();
    return (
        <Container>
            <Row>
               <Col xs={12} style={{marginTop: '5rem'}}>
                    <img src={home} />
               </Col>
            </Row>
            <Row>
                <Container style={{marginTop: '2rem', padding: '2rem',  background: '#263147'}}>
                    <Row>
                        <Col style={{color: 'white', textAlign: 'center'}} xs={12}>
                            <h1>{`Distinctive features of being at HOPE`}</h1>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '2rem'}}>
                        {
                            features.map((feature, index) => {
                                return <Col style={{height: '12rem'}} sm={6} md={4} key={`${index}-2`}>
                                            <Card style={{height: '10rem', background: '#DFC370', color: 'black', fontWeight: 'bold'}} key={index}>
                                                <Card.Body style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    <Card.Text >
                                                        {feature}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                            })
                        }
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}

function getFeatures() {
    return [
        'Strict class size of ten students only.',
        'Weekly progress tests along with regular working and feedback.',
        'Access to weekly Wi-Fi every saturday from 8 to 5.',
        'Homework and lecture notes are organized in online student portal which can be accessed 24x7.',
        'Feel more confident as only genuine resources are used during the preparation as in the real exams.'
    ]
}
