import "../../styles/style.scss";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import TabContext from "@mui/lab/TabContext";
import NavbarTabs from "components/Header/NavbarTabs.jsx";

const Navbar = ({children}) => {
	const [value, setValue] = useState("0");

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<React.Fragment>
			<div className="flex-container" style={{position: 'fixed', width: "100%"}}>
				<Box sx={{ width: "100%", typography: "body1", backgroundColor: "white" }}>
					<TabContext value={value} >
						<Box sx={{width: '98vw', display: 'flex'}}>
							 {/* TODO Add scroll functionality for hope button too */}
							<div className={`navbar-div`} style={{fontWeight: 700}}>{`HOPE`}</div>
							<NavbarTabs handleChange={handleChange} />
							<div className={`navbar-div`}><Button variant="contained">{`Contact Us`}</Button></div>
						</Box>
					</TabContext>
				</Box>
			</div>
			{children}
		</React.Fragment>
	);
};

export default Navbar;
