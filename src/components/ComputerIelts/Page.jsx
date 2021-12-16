import React from "react";
import Card from 'common/Card.jsx';
import { getPageDetails } from './PageDetails.jsx';
import { Container } from 'react-bootstrap';

function Page() {
    const pageDetails = getPageDetails();

    return (
        <>
            <Container style={{marginTop: `6rem`}}>
                {
                    pageDetails.map((data, index) => {
                        return <Card content={data} key={index} />
                    })
                }
            </Container>
        </>
    )
}

export default Page;