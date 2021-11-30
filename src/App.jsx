import React from "react";
import Navbar from "components/Header/Navbar.jsx";
import {Home, Videos, Courses, Instructor } from 'components/Home/Home.jsx';


const App = () => {
    return (
        <Navbar>
            <Home />
            <Videos />
            <Courses />
            <Instructor />
        </Navbar>
    );
};

export default App;
