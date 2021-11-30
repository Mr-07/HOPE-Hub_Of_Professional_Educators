import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import React from "react";
import { getTabs } from 'common/utilities.jsx';

const NavbarTabs = ({handleChange}) => {
	const tabsData = getTabs();

	const scrollToElement = (index) => {
		// TODO need to change the value for the tabs
		document.getElementById(`${tabsData[index - 1].id}-content`).scrollIntoView({behavior: "smooth"});
	};

	const onChange = (event, newValue) => {
		handleChange(newValue);

		// scroll to div
		scrollToElement(newValue);
	}

	return (
		<div style={{display: 'inline-flex', flexGrow: '2', justifyContent: 'center'}}>
			<TabList onChange={onChange}>
				{
					tabsData.map((tab, index) => {
						return <Tab label={tab.label} value={(index + 1).toString()} key={index} />
					})
				}
			</TabList>
		</div>
	)
}

export default NavbarTabs;