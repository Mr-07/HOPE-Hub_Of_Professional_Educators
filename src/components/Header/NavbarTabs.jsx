import React from "react";
import { getTabs } from 'common/utilities.jsx';
import '../../styles/style.scss';
import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { LinearProgress } from "@mui/material";

export default function NavbarTabs() {
	const tabsData = getTabs();

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
			return <Col className='marginTop-5' key={index} sm={tab.size}>
				<Link className='remove-link-prop' to={tab.link}>
					{tab.label}
				</Link>
			</Col>
		})
	)
}