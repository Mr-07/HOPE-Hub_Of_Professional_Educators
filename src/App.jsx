import React from "react";
import Navbar from "components/Header/Navbar.jsx";
import Home from 'components/Home/Home.jsx';
import Courses from "./components/Courses/Courses.jsx";
import Videos from "./components/Videos/Video.jsx";
import Instructor from "./components/Instructor/Instructor.jsx";


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
