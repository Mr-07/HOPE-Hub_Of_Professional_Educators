import React from 'react'
import { Col } from 'react-bootstrap';

function Image({ source, imageClass }) {
    return (
        <Col md={6} className={`${imageClass} child-full-width`}>
            <img src={ source } />
        </Col>
    )
}

export default Image;
