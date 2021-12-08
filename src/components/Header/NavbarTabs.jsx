import React from "react";
import { Button } from "@material-ui/core";
import { getTabs } from 'common/utilities.jsx';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";

const NavbarTabs = () => {
	const tabsData = getTabs();

	return (
		<div style={{display: 'inline-flex', flexGrow: '2', justifyContent: 'center'}}>
			{
				tabsData.map((tab, index) =>
					(tab.isIconPresent) ?
						<Button
							style={{height: '45px', fontSize: '14px'}}
							size="large"
							key={tab.label}
							variant="text"
							component={Link}
							to={tab.link}
							color="default">
							{tab.label} <KeyboardArrowDownIcon />
						</Button>
						:
						<Button
							style={{height: '45px', fontSize: '14px'}}
							size="large"
							key={tab.label}
							variant="text"
							component={Link}
							to={tab.link}
							color="default"
						> {tab.label}
						</Button>
				)
			}
		</div>
	)
}

export default NavbarTabs;