import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <div className='foot'>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-body-secondary">© 2023 Commerce Connect, Inc</p>
                    <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </Link>
                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary">About</Link></li>
                        <li className="nav-item"><Link to="https://github.com/sanskar9067" className="nav-link px-2 text-body-secondary">GitHub</Link></li>
                        <li className="nav-item"><Link to="https://www.linkedin.com/in/sanskar-sinha/" className="nav-link px-2 text-body-secondary">LinkedIn</Link></li>

                    </ul>
                </footer>
            </div>

        </div>
    )
}
