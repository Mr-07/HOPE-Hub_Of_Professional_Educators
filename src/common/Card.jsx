import React from 'react';

export default function Card(props) {
    return (
        <React.Fragment>
            <div className="card-container">
                {props.children}
            </div>
        </React.Fragment>
    )
}
