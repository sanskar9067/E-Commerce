import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from "../context/auth";
import hero from "../assets/hero.jpg"
import { Link } from 'react-router-dom';

export default function Home() {
    const [auth, setAuth] = useAuth()
    return (
        <div>
            <Header />
            <div>
                <div className="container col-xxl-8 px-4 py-5 main-hero">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={hero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to <br></br>Commerce Connect</h1>
                            <p className="lead">
                                Luxlane is an enticing e-commerce destination that redefines luxury shopping with its distinctive blend of sophistication and style. As you enter the virtual realm of Luxlane, you're greeted with a carefully curated selection of premium products designed to elevate your lifestyle.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <Link to="/sellingpage" className="btn btn-dark">Sell Product</Link>
                                <Link to="/shopping" className="btn btn-dark">Buy Product</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container px-4 py-5" id="hanging-icons">
                    <h2 className="pb-2 border-bottom">Way to proceed</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="col d-flex align-items-start">

                            <div>
                                <h3 className="fs-2 text-body-emphasis">Sign Up</h3>
                                <p>Sign up or login to continue.</p>

                            </div>
                        </div>
                        <div className="col d-flex align-items-start">

                            <div>
                                <h3 className="fs-2 text-body-emphasis">Sell Product</h3>
                                <p>Sell you belongings at your own price.</p>

                            </div>
                        </div>
                        <div className="col d-flex align-items-start">

                            <div>
                                <h3 className="fs-2 text-body-emphasis">Buy Products</h3>
                                <p>Buy any product of your choice at reasonable amount.</p>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
}