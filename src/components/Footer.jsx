import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { getTabs } from 'common/utilities.jsx';
import { Link } from "react-router-dom";

function Footer() {
    const tabs = getTabs();
    const firstPart = tabs.slice(0, Math.ceil(tabs.length / 2));
    const secondPart = tabs.slice(firstPart.length);
    return (
            <Container fluid style={{background: '#192534', height: '413px', padding: '3rem', display: 'flex', flexDirection: 'column'}} className={`align-items-center justify-content-center`}>
                <Row style={{borderBottom: '1px solid white', padding: '2rem 0', width: '100%'}}>
                    <Col md={4} className={`footer--links-div`}>
                        {
                            firstPart.map((tab, index) => {
                                return <Link className='footer-links' to={tab.link} key={index}>
                                            {tab.label}
                                        </Link>
                            })
                        }
                    </Col>
                    <Col xs={4}>
                        {
                                <div className='footer--brand'>{`HOPE`}</div>
                        }
                    </Col>
                    <Col md={4} className={`footer--links-div`} style={{padding: '0'}}>
                        {
                            secondPart.map((tab, index) => {
                                return <Link className='footer-links' to={tab.link} key={index}>
                                            {tab.label}
                                        </Link>
                            })
                        }
                    </Col>
                </Row>
                <Col xs={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', paddingTop: '2rem'}}>
                    {`© HOPE, Inc ${new Date().getFullYear()}. All rights reserved`}
                </Col>
            </Container>
    )
}

export default Footer;
