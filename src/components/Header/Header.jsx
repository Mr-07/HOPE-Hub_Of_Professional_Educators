import "../../styles/style.scss";
import React from "react";
import NavbarTabs from "components/Header/NavbarTabs.jsx";
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import Logo from 'images/Logo.svg';

const Header = () => {
// 2F3355

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
};

export default Header;
