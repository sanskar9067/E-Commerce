import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cards from '../components/Cards'

export default function Shopping() {
    return (
        <div>
            <Header />

            <div className='container'>
                <Cards />

            </div>

            <Footer />
        </div>
    )
}
