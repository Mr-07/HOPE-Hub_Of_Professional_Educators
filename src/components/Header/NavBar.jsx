import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarTabs from './NavbarTabs.jsx';

const Navbar = () => {
    return (
        <Row style={{fontSize: 22, padding: 5, top: 5}}>
            <Col className='marginTop-5' style={{marginLeft: 20}} sm={2} xs={6}>
                <Link className='remove-link-prop' to='/'>
                    {`HOPE`}
                </Link>
            </Col>
            <NavbarTabs />
            <Col>
                <Button style={{float: 'right', marginRight: 40, marginTop: 3}}>
                    <Link className='remove-link-prop' to='/login'>
                        {`Login`}
                    </Link>
                </Button>
            </Col>
        </Row>
    );
};

export default Navbar;