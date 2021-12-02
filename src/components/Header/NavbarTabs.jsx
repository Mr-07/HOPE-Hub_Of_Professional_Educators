import React from "react";
import Tab from "@mui/material/Tab";
import Tabs from '@mui/material/Tabs';
import { getTabs } from 'common/utilities.jsx';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavbarTabs = ({handleChange}) => {
	const tabsData = getTabs();

	const scrollToElement = (index) => {
		document.getElementById(`${tabsData[index].id}-content`).scrollIntoView({behavior: "smooth"});
	};

	const onChange = (event, newValue) => {
		handleChange(newValue);

		// scroll to div
		scrollToElement(newValue);
	}

	return (
		<div style={{display: 'inline-flex', flexGrow: '2', justifyContent: 'center'}}>
			<Tabs onChange={onChange}>
				{
					tabsData.map((tab, index) =>
						<React.Fragment>
							{(tab.isIconPresent) ?
								<Tab icon={<KeyboardArrowDownIcon />} iconPosition="right" label={tab.label} value={(index).toString()} key={index}/>
								:
								<Tab label={tab.label} value={(index).toString()} key={index} />
							}
						</React.Fragment>
					)
				}
			</Tabs>
		</div>
	)
}

export default NavbarTabs;