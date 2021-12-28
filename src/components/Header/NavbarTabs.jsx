import React from "react";
import { getTabs } from 'common/utilities.jsx';
import '../../styles/style.scss';
import { Link } from "react-router-dom";

export default function NavbarTabs() {
	const tabsData = getTabs();
	console.log(`tabsData`, tabsData)

	return (
			// <Nav className={`justify-content-center`} activeKey={`/`}>
			// </Nav>	{
			//		tabsData.map((tab, index) => {
			//			return <Nav.Link href={tab.link} key={index} style={{marginLeft: '2rem'}}>
			//						{tab.label}
			//					</Nav.Link>
			//		})
			//	}
			//</Nav>
		tabsData.map((tab, index) => {
			return <Link className='nav-links' to={tab.link} key={index}>
					{tab.label}
				</Link>
		})
	)
}