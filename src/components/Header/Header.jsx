import "../../styles/style.scss";
import React, { useState } from "react";
import NavbarTabs from "components/Header/NavbarTabs.jsx";
import { Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className={`navbar`}>
			<Alert />
			<span className={`brand--name`}>{`HOPE`}</span>
			<div className={`nav-heading-with-btn`}>
				<ul><NavbarTabs /></ul>
				<div className={`btn-nav-div`}>
					<Link className='btn-login' to={`/login`}>
						{`Log in `}
					</Link>
				</div>
			</div>
			<div className={`btn-nav-sidebar`} >
				<button>{'Heelo'}</button>
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


export default Header;
