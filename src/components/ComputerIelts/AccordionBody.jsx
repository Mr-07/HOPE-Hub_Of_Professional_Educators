import React from 'react'
import { Card } from 'react-bootstrap';

function AccordionBody({ data }) {
    console.log(`data`, data)
    return (
        <div style={{display: 'flex', flexDirection: 'row',  gap: '2rem'}}>
            { data.map((city, index) => {
                    return <Card style={{ width: '18rem' }} key={index}>
                                <Card.Img variant="top" style={{ width: '18rem', height: '14rem', objectFit: 'cover'}}src={city.source} />
                                <Card.Body>
                                    <Card.Text>{city.name}</Card.Text>
                                </Card.Body>
                        </Card>
                })
            }
        </div>


    )
}

export default AccordionBody;
