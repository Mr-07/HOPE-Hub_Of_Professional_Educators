import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

function AccordionBody({ data, children }) {
    return (
        <div>
            {
                children ?
                    children :
                    <Row>
                        { data.map((city, index) => {
                                return <Col lg={3} sm={12} style={{paddingTop: '2rem'}}>
                                            <Card className={`child-full-width`} key={index}>
                                                        <Card.Img variant="top" style={{minHeight: '16rem', objectFit: 'cover'}}src={city.source} />
                                                        <Card.Body>
                                                            <Card.Text>{city.name}</Card.Text>
                                                        </Card.Body>
                                                </Card>
                                        </Col>
                            })
                        }
                    </Row>
            }
        </div>
    )
}

export default AccordionBody;
