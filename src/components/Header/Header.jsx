import "../../styles/style.scss";
import React from "react";
import NavbarTabs from "components/Header/NavbarTabs.jsx";
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import Logo from 'images/Logo.svg';
import { Calculate } from "@mui/icons-material";

// 2F3355
/* const Header = () => {

	return (
		<React.Fragment>
			<div className="flex-container" style={{position: 'fixed', width: "100%", zIndex: '10000'}}>
				<Navbar collapseOnSelect expand={`lg`} bg={`dark`} variant={`dark`} fixed="top">
					<Container fluid>
						<Navbar.Brand href={`/`}>
							{`HOPE`}
						</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse style={{justifyContent: 'space-between'}}>
							<NavbarTabs />
							<Nav.Link href="#/band-calculator" >
								<Button variant="outline-success">
									{`Band Calculator`}
								</Button>
							</Nav.Link>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</React.Fragment>
	);
}; */

const Header = () => {
	return (
		<navbar style={{display: 'flex', flexDirection: 'row', height: '60px', alignItems: 'center', width: '100%'}}>
			<span className={`brand--name`}>{`HOPE`}</span>
			<div style={{display: 'flex', flexDirection: 'row', height: '100%', width: '80%',  alignItems: 'center'}}>
				<ul><NavbarTabs /></ul>
				<div className={`btn-nav-div`}>
					<div className={`btn-login`}>{`Log in`}</div>
				</div>
			</div>
			<div style={{display: 'none'}}>
				<button>{'Heelo'}</button>
			</div>
		</navbar>
	)
}

export default Header;
