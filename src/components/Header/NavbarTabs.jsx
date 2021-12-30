import React from "react";
import { getTabs } from 'common/utilities.jsx';
import { Link } from "react-router-dom";

export default function NavbarTabs() {
	const tabsData = getTabs();

	return (
		tabsData.map((tab, index) => {
			return <Link className='nav-links' to={tab.link} key={index}>
					{tab.label}
				</Link>
		})
	)
}