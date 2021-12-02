import React from "react";
import Card from 'common/Card.jsx';
import Introduction from "components/ComputerIelts/Introduction.jsx";
import Frequency from "components/ComputerIelts/Frequency.jsx";

export default function ComputerIelts(props) {
    return (
        <React.Fragment>
            <div style={{padding: '3rem'}}>
                <Introduction />
                <Frequency />
            </div>
        </React.Fragment>
    )
}