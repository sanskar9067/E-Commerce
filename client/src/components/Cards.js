import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Cards() {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/getproduct")
            .then(products => setProduct(products.data))
            .catch(err => console.log(err));
    })

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Buy</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(products => {
                            return (
                                <tr>
                                    <td>{products.name}</td>
                                    <td>{products.description}</td>
                                    <td>{products.price}</td>
                                    <td><Link className="btn btn-dark" to="/payment">Buy Now</Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
