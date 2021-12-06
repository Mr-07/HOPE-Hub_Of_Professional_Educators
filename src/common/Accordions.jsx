import React from 'react'
import { Accordion } from 'react-bootstrap';

function Accordions({ header, children, eventKey }) {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>{children}</Accordion.Body>
        </Accordion.Item>
    )
}

export default Accordions;
