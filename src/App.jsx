import React, { lazy, Suspense } from "react";
import Navbar from "./components/Header/Navbar.jsx";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "common/Loader.jsx";

const Home = lazy(() => import("components/Home/Home.jsx"));
const Videos = lazy(() => import('components/Videos/Video.jsx'));
const ComputerIelts = lazy(() => import('components/ComputerIelts/Page.jsx'));

const App = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/computer-ielts' component={ComputerIelts}/>
                        <Route path='/videos' component={Videos} />
                    </Switch>
                </div>
            </Router>
        </Suspense>

    );
};

export default App;
