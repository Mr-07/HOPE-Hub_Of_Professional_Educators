import React from "react";

export function Home(props) {
    return (
        <React.Fragment>
            <div id={`home-content`} style={{height: 'calc(100vh - 50px)', backgroundColor: 'red'}} />
                {/* <div></div>
                <div></div> */}
        </React.Fragment>
    )
}
export function Courses(props) {
    return (
        <React.Fragment>
            <div id={`courses-content`} style={{height: 'calc(100vh - 50px)',backgroundColor: 'blue'}} />
                {/* <div></div>
                <div></div> */}
        </React.Fragment>
    )
}
export function Videos(props) {
    return (
        <React.Fragment>
            <div id={`videos-content`} style={{height: 'calc(100vh - 50px)',backgroundColor: 'yellow'}} />
                {/* <div></div>
                <div></div> */}
        </React.Fragment>
    )
}
export function Instructor(props) {
    return (
        <React.Fragment>
            <div id={`instructor-content`} style={{height: 'calc(100vh - 50px)',backgroundColor: 'green'}} />
                {/* <div></div>
                <div></div> */}
        </React.Fragment>
    )
}
