import React, { lazy, Suspense } from "react";
import Navbar from "./components/Header/Navbar.jsx";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
const Home = lazy(() => import("components/Home/Home.jsx"));
const Videos = lazy(() => import('components/Videos/Video.jsx'));
const ComputerIelts = lazy(() => import('components/ComputerIelts/ComputerIelts.jsx'));

function HOC(props) {
    return (
        <Suspense fallback={<h1>loading...</h1>}>
            <props.component />
        </Suspense>);
}

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' render={() => {
                        return (<HOC component={Home} />);
                    }}/>
                    <Route path='/computer-ielts' render={() => {
                        return (<HOC component={ComputerIelts} />);
                    }}/>
                    <Route path='/videos' render={() => {
                        return (<HOC component={Videos} />);
                    }} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
