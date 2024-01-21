import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Pagenotfound() {
    return (
        <div>
            <Header />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
            <Footer />
        </div>
    )
}
