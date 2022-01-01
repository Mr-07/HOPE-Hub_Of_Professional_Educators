import React, { useState } from "react";
import NavbarTabs from "components/Header/NavbarTabs.jsx";
import { Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useAuth } from "auth/AuthContext";
import MenuIcon from '@mui/icons-material/Menu';

const Header = (props) => {
	const { currentUser } = useAuth();
	return (
		<nav className={`navbar`}>
			<Alert />
			<span className={`brand--name`}>{`HOPE`}</span>
			<div className={`nav-heading-with-btn`}>
				<ul><NavbarTabs /></ul>
				<div className={`btn-nav-div`}>
					{
						!currentUser ?
							<Link className='btn-login' to={`/login`}>
								{`Log in `}
							</Link>
							:
							<LogoutButton {...props} />
					}
				</div>
			</div>
			<div className={`btn-nav-sidebar`} >
				<MenuIcon/>
			</div>
		</nav>
	)
}

function Alert() {
	const [show, setShow] = useState(true);
	const handleClose = () => setShow(false);

	return (
	  <>
		<Modal
		  show={show}
		  onHide={handleClose}
		  backdrop="static"
		  keyboard={false}
		>
		  <Modal.Header closeButton>
			<Modal.Title>Coming Soon</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>
			{'This site is under development will be available shortly.'}
		  </Modal.Body>
		</Modal>
	  </>
	);
}

const LogoutButton = ({history}) => {
    const { logout } = useAuth();
    const logoutUser = async() => {
        await logout();
        history.push('/login');
    }
    return (
        <div className={`btn-login`} onClick={logoutUser}>
			{`Log out`}
        </div>
    )
}


export default Header;
