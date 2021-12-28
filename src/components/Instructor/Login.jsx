import React, { useRef } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';
import LoginImage from 'images/Login.svg';
import { useAuth } from 'auth/AuthContext.js';

function Login() {
    const username = useRef();
    const password = useRef();
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await login(username.current.value, password.current.value)
            console.log('login successfully');
        } catch {
            console.log('failed to login');
        }
    }

    return (
        <Container fluid>
            <Row className={`row-padding`}>
                <Col md={6}>
                    <img src={LoginImage} />
                </Col>
                <Col md={6}>

                    <Form style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', width: '50%'}}>
                        <div style={{color: '#2F2E41', fontSize: '50px', fontWeight: 'bold'}}>
                            <div>{'Login'}</div>
                            <div style={{width: '112px', height: '13px', backgroundColor: '#DE6D6D', border: '1px solid transparent', borderRadius: '5px', marginLeft: '0.5rem'}} />
                        </div>
                        <div style={{marginTop: '1rem', width: '100%'}}>
                            <Form.Group className="mb-4" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" ref={username}placeholder="abc@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={password}placeholder="**********" />
                            </Form.Group>
                            <div style={{padding: '1rem', background: '#2F2E41', color: 'white', textAlign: 'center', fontWeight: 'bold', cursor: 'pointer'}} onClick={handleLogin}>{'Login'}</div>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Login;