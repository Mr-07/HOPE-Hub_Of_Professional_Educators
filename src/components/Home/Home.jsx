import home from 'images/Home.jpeg';
import React from "react";


export default function Home() {
    return (
        <>
            <div id={`home-content`}>
                <img src={home} style={{height: '100%'}}/>
            </div>
        </>
    )
}
