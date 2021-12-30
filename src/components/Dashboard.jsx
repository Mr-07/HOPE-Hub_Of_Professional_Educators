import { db } from 'auth/FirebaseCreds.js';
import { useAuth  } from 'auth/AuthContext.js';
import { Container, Row, Form, Col } from 'react-bootstrap';
import React, { useEffect, useState, useRef } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import { AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function Dashboard() {
    const { currentUser } = useAuth();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    const userId = currentUser.email;

    useEffect(async() => {
        const userData = await getUserData(userId);
        setUser(userData.map((doc) => ({...doc.data()})).shift())
    }, [])

    useEffect(() => {
        if (Object.keys(user).length) setLoading(true)
    }, [user])
    return (
        <>
            {
                loading ?
                    user.type == 'admin' ?
                        <AdminDashboard userData={user} />
                        :
                        <StudentDashboard userData={user} />
                : null
            }
        </>
    )
}

const AdminDashboard = () => {
    const [userData, setUserData] = useState([]);


    useEffect(async() => {
        setUserData(await getAllUserData());
    }, [])

    return (
        <Container fluid>
            <Signup />
            <Row xs={12} className="row-padding flex-container">
                <div className="ag-theme-alpine" style={{height: 400, minWidth: 100, width: 850}}>
                    <AgGridReact
                        rowData={userData}>
                        <AgGridColumn field="first_name" headerName="First Name"></AgGridColumn>
                        <AgGridColumn field="last_name" headerName="Last Name"></AgGridColumn>
                        <AgGridColumn field="email" headerName="Email"></AgGridColumn>
                        <AgGridColumn field="course.value" headerName="Course"></AgGridColumn>
                    </AgGridReact>
                </div>
            </Row>
        </Container>
    )
};

const StudentDashboard = (props) => {
    return (
        <>
            <div>{`Welcome ${props.userData.first_name} ${props.userData.last_name}`}</div>
        </>
    )
}

async function getUserData(userId) {
    const userCollectionRef = collection(db, 'users');
    const getQuery = query(userCollectionRef, where("email", "==", userId));
    const data = await getDocs(getQuery);
    return data.docs;
}

async function getAllUserData() {
    const userCollectionRef = collection(db, 'users');
    const getQuery = query(userCollectionRef, where("type", "!=", 'admin'));
    const data = await getDocs(getQuery);
    return data.docs.map((doc) => ({...doc.data()}))
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Signup = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Row className='flex-container justify-content-end row-padding'>
            <Col md={2} >
                <div onClick={handleOpen} style={{padding: '0.5rem', background: '#3F3D56', color: '#ffffff', cursor: 'pointer', textAlign: 'center', border: '1px solid transparent', borderRadius: '0.4rem'}}>Create User</div>
            </Col>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <FormBody />
            </Modal>
        </Row>
    )
}

const Buttons = ({
    getEmailAndPassword,
    getUserData
}) => {
    const { signup } = useAuth();

    /** create user in firebase authentication */
    const createUser = () => {
        const { email, password } = getEmailAndPassword();
        signup(email, password);
    };

    /** Add entry in db of user */
    const createUserForAuthentication = () => {
        addDoc(collection(db, 'users'), { ...getUserData() }).catch((err) => {
            console.error(err);
        })
    }

    /** When save button is clicked */
    const saveUser = () =>{
        createUser();
        createUserForAuthentication();
    };

    return (
        <Row className="flex-container justify-content-end">
            <Col md={3}>
                <div style={{padding: '0.5rem', background: '#ffffff', color: '#3F3D56', cursor: 'pointer', textAlign: 'center', border: '1px solid #3F3D56', borderRadius: '0.4rem'}}>Reset</div>
            </Col>
            <Col md={3}>
                <div onClick={saveUser} style={{padding: '0.5rem', background: '#3F3D56', color: '#ffffff', cursor: 'pointer', textAlign: 'center', border: '1px solid transparent', borderRadius: '0.4rem'}}>Save</div>
            </Col>
        </Row>
    )
}

const FormBody = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const courseRef = useRef();
    const confirmPasswordRef = useRef();
    const phoneNumberRef = useRef();

    /** get email and password of user */
    const getEmailAndPassword = () => ({
        email: emailRef.current.value,
        password: passwordRef.current.value
    })

    /** get all user data of the user */
    const getUserData = () => ({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value,
        phone_number: phoneNumberRef.current.value,
        course: {
            id: courseRef.current.value,
            value: getCourseNameById(courseRef.current.value)
        },
        type: 'student'
    })

    const getCourseNameById = (id) => {
        const courses = ["Crash", "Express", "Intensive", "Advanced"];
        return courses[id] ? courses[id] : null
    }

    return (
        <Box sx={style}>
            <Row>
                <Col>
                    <Form.Group className="mb-4" controlId="formGroupFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" ref={firstNameRef} placeholder="John" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-4" controlId="formGroupLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" ref={lastNameRef} placeholder="Doe" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-4" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" ref={emailRef} placeholder="abc@example.com" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-4" controlId="formGroupEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number"ref={phoneNumberRef}  placeholder="+919876543210" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-4" controlId="formGroupEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder="*********" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-4" controlId="formGroupEmail">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={confirmPasswordRef}placeholder="*********" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Form.Group className="mb-4" controlId="formGroupEmail">
                    <Form.Label>Course</Form.Label>
                    <Form.Select  ref={courseRef} aria-label="Floating label select example">
                        <option>Select</option>
                        <option value="0">Crash</option>
                        <option value="1">Express</option>
                        <option value="2">Intensive</option>
                        <option value="3">Advanced</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Buttons getEmailAndPassword={getEmailAndPassword} getUserData={getUserData}/>
        </Box>
    )
}

