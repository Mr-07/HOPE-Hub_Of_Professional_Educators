import React, { lazy, Suspense } from "react";
import Navbar from "./components/Header/Navbar.jsx";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "common/Loader.jsx";

const Home = lazy(() => import("components/Home/Home.jsx"));
const IELTS = lazy(() => import('components/IELTS/Page.jsx'));
const ComputerIelts = lazy(() => import('components/ComputerIelts/Page.jsx'));
const BandCalculator = lazy(() => import('components/BandCalculator/BandCalculator.jsx'));
const BookATest = lazy(() => import('components/BookATest/BookATest.jsx'));

const App = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/computer-ielts' component={ComputerIelts}/>
                        <Route path='/about-ielts' component={IELTS} />
                        <Route path="/band-calculator" component={BandCalculator} />
                        <Route path="/book-a-test" component={BookATest} />
                    </Switch>
                </div>
            </Router>
        </Suspense>
    );
};

export default App;
