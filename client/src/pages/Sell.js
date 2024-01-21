import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
export default function Sell() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const handleAddition = async (e) => {
        try {
            const res = await axios.post(`/api/v1/auth/sellingpage`, { name, description, price });
            if (res.data.success) {
                toast.success("Added Successfully");
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }


    return (
        <div>
            <Header />
            <div>
                <form className='logform' onSubmit={handleAddition}>
                    <div>
                        <h1 style={{ textAlign: "center" }}>Add Product</h1><br></br>
                        <div className="mb-3">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Name' required />
                        </div>
                        <div className="mb-3">
                            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Description' required />
                        </div>
                        <div className="mb-3">
                            <input type="tel" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Price' required />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Product</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
