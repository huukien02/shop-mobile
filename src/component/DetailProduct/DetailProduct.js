import './DetailProduct.css'

import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom'

import axios from 'axios'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import CheckLogin from '../CheckLogin/CheckLogin'
import Menu from '../Menu/Menu'
import Comment from '../Comment/Comment'

var token = document.cookie;

function DetailProduct() {
    let { id } = useParams()
    var product = {}

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await axios.get(process.env.REACT_APP_API_PRODUCT);
            return res;
        }
        getData().then((res) => setData(res.data))
    }, [])

    for (let i = 0; i < data.length; i++) {
        if (data[i]._id == id) {
            product = data[i]
        }
    }


    return (
        <>
            {token ? (
                <div>
                    <CheckLogin />
                    <Menu />
                    <div className="Detail_Product">
                        <h1>{product.name}</h1>
                        <p>Price: ${product.price}</p>
                        <img src={product.image} />
                        <p>{product.detail}</p>
                        <Link to={`/`}>
                            Back
                        </Link>
                    </div>
                    <Comment idProduct={id} />
                </div>
            ) : (<Login />)}

            <Footer />
        </>
    )
}

export default DetailProduct