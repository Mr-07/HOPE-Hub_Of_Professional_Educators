import "../../styles/style.scss";
import Box from "@mui/material/Box";
import React from "react";
import Button from '@mui/material/Button';
import NavbarTabs from "components/Header/NavbarTabs.jsx";
import { Link } from "react-router-dom";
import Logo from 'images/Logo.svg';

const Navbar = () => {

	return (
		<React.Fragment>
			<div className="flex-container" style={{position: 'fixed', width: "100%", zIndex: '10000'}}>
				<Box sx={{ width: "100%", typography: "body1", backgroundColor: "#efefef" }}>
					<Box sx={{width: '98vw', display: 'flex'}}>
						<div className={`navbar-div`} style={{ fontWeight: 700 }}>
							<Link to="/" style={{ textDecoration: 'none', color: "black" }}>
								<div style={{width: '20px', height: '25px'}}>
									<img src={Logo} />
								</div>
							</Link>
						</div>
						<NavbarTabs />
						<div className={`navbar-div`}>
							<Button variant="contained">
								<Link className='remove-link-prop' to='/band-calculator'>
									{`Band Calculator`}
								</Link>
							</Button>
						</div>
					</Box>
				</Box>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
