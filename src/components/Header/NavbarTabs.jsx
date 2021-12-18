import React from "react";
import { getTabs } from 'common/utilities';
import '../../styles/style.scss';
import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function NavbarTabs() {
	const tabsData = getTabs();

	return (
		tabsData.map((tab, index) => {
			return <Col className='marginTop-5' key={index} sm={tab.size}>
				<Link className='remove-link-prop' to={tab.link}>
					{tab.label}
				</Link>
			</Col>
		})
	)
}