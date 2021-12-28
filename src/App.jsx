import React, { lazy, Suspense } from "react";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer.jsx";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "common/Loader.jsx";
import { AuthProvider } from "auth/AuthContext.js";

const Home = lazy(() => import("components/Home/Home.jsx"));
const IELTS = lazy(() => import('components/IELTS/Page.jsx'));
const ComputerIelts = lazy(() => import('components/ComputerIelts/Page.jsx'));
const BandCalculator = lazy(() => import('components/BandCalculator/BandCalculator.jsx'));
const BookATest = lazy(() => import('components/BookATest/BookATest.jsx'));
const Testimonials = lazy(() => import('components/Instructor/Testimonials.jsx'));
const Login = lazy(() => import('components/Instructor/Login.jsx'));

const App = () => {
    return (
        <Suspense fallback={<Loader />}>
            <AuthProvider>
                <Router>
                    <>
                        <Header />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/computer-ielts' component={ComputerIelts}/>
                            <Route path='/about-ielts' component={IELTS} />
                            <Route path="/band-calculator" component={BandCalculator} />
                            <Route path="/contact-us" component={Testimonials} />
                            <Route path="/book-a-test" component={BookATest} />
                            <Route path="/login" component={Login} />
                        </Switch>
                        <Footer />
                    </>
                </Router>
            </AuthProvider>

        </Suspense>
    );
};

export default App;
