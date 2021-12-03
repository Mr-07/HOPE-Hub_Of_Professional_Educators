import React from 'react'
import photo from 'images/comp-ielts.jpg';

export default function Introduction() {
    return (
        <div className="card-container">
            <div style={{flexGrow: 2, flexDirection: "column", display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                <span style={{fontSize: '2.5em'}}>{`Take IELTS on computer`}</span>
                <span>{`Results in 2-5 days. Now available in India`}</span>
            </div>
            <div style={{flewGrow: 1, justifyContent:"flex-end", display: 'flex'}}>
                <img style={{height: '100%', width: '80%', objectFit: 'cover'}} src={photo} />
            </div>
        </div>
    )
}
