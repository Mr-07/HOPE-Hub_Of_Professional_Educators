import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { getTabs } from 'common/utilities.jsx';
import { Link } from "react-router-dom";

function Footer() {
    const tabs = getTabs();
    return (
        <Container fluid style={{background: 'black', height: '413px', padding: '3rem', display: 'flex'}} className={`align-items-center justify-content-center`}>
            <Row>
                <Col xs={12} style={{display: 'flex', gap: '12rem', flexDirection: 'row'}}>
                    {
                        tabs.map((tab, index) => {
                            return <Link className='footer-links' to={tab.link} key={index}>
                                        {tab.label}
                                    </Link>
                        })
                    }
                </Col>
            </Row>
            <Row style={{borderTop: '1px solid white'}} />
        </Container>
    )
}

export default Footer;
