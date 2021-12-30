import "./styles/style.scss";
import Loader from "common/Loader.jsx";
import Footer from "components/Footer.jsx";
import React, { lazy, Suspense } from "react";
import Header from "components/Header/Header.jsx";
import { AuthProvider } from "auth/AuthContext.js";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from 'components/AuthenticatedRoute.jsx';

const Home = lazy(() => import("components/Home/Home.jsx"));
const IELTS = lazy(() => import('components/IELTS/Page.jsx'));
const ComputerIelts = lazy(() => import('components/ComputerIelts/Page.jsx'));
const BandCalculator = lazy(() => import('components/BandCalculator/BandCalculator.jsx'));
const BookATest = lazy(() => import('components/BookATest/BookATest.jsx'));
const Testimonials = lazy(() => import('components/Instructor/Testimonials.jsx'));
const Login = lazy(() => import('components/Instructor/Login.jsx'));
const Dashboard = lazy(() => import("components/Dashboard.jsx"));

const App = () => {
    return (
        <Suspense fallback={<Loader />}>
            <AuthProvider>
                <Router>
                    <>
                        <Header />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path='/about-ielts' component={IELTS} />
                            <Route path="/book-a-test" component={BookATest} />
                            <Route path="/contact-us" component={Testimonials} />
                            <Route path='/computer-ielts' component={ComputerIelts}/>
                            <Route path="/band-calculator" component={BandCalculator} />
                            <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
                        </Switch>
                        <Footer />
                    </>
                </Router>
            </AuthProvider>

        </Suspense>
    );
};

export default App;
