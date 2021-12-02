import React from "react";
import { Button } from "@material-ui/core";
import { getTabs } from 'common/utilities.jsx';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import '../../styles/style.scss';

const NavbarTabs = ({handleChange}) => {
	const tabsData = getTabs();

	return (
		<div style={{display: 'inline-flex', flexGrow: '2', justifyContent: 'center'}}>
			{
				tabsData.map((tab, index) =>
					(tab.isIconPresent) ?
						<Button
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