import React from "react";
import Card from 'common/Card.jsx';
import { getPageDetails } from './PageDetails.jsx';

function Page() {
    const pageDetails = getPageDetails();

    return (
        <>
            <div style={{padding: '5rem'}}>
                {
                    pageDetails.map((data, index) => {
                        return <Card content={data} key={index} />
                    })
                }
            </div>
        </>
    )
}

export default Page;