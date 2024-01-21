import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth';

export default function Header() {
    const [auth, setAuth] = useAuth();

    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ''
        })
        localStorage.removeItem('auth');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><i class="fa-solid fa-cart-shopping" style={{ paddingRight: "10px" }}></i>Commerce Connect</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            {
                                !auth.user ? (<>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="/sellingpage">Sell Product</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" to="/shopping">Buy Product</Link>
                                    </li>
                                </>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/sellingpage">Sell Product</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/shopping">Buy Product</Link>
                                        </li>
                                    </>
                                )
                            }

                            {
                                !auth.user ? (<>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Signup">SignUp</Link>
                                    </li>
                                </>) : (<li className="nav-item">
                                    <Link onClick={handleLogout} className="nav-link" to="/Login">Logout</Link>
                                </li>)
                            }

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}
