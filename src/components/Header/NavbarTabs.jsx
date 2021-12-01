import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import React from "react";
import { getTabs } from 'common/utilities.jsx';

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
			<TabList onChange={onChange}>
				{
					tabsData.map((tab, index) => {
						return <Tab label={tab.label} value={(index).toString()} key={index} />
					})
				}
			</TabList>
		</div>
	)
}

export default NavbarTabs;