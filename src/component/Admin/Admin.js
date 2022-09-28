import './Admin.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";

import Footer from '../Footer/Footer'
import Cart from './Cart'
import Product from './Product'
import User from './User'

import Login from '../Login/Login'
import CheckLogin from '../CheckLogin/CheckLogin'

var token = document.cookie;
if (token) {
    var decoded = jwt_decode(token);
    console.log(decoded.obj.role);
}


function Admin() {

    const [product, setProduct] = useState([])
    const [user, setUser] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await axios.get(process.env.REACT_APP_API_PRODUCT);
            return res;
        }
        getData().then((res) => setProduct(res.data))
    }, [])

    useEffect(() => {
        async function getData() {
            const res = await axios.get(process.env.REACT_APP_API_USER);
            return res;
        }
        getData().then((res) => setUser(res.data))
    }, [])

    useEffect(() => {
        async function getData() {
            const res = await axios.get(process.env.REACT_APP_API_CART);
            return res;
        }
        getData().then((res) => setCart(res.data))
    }, [])




    const openAdminProduct = () => {
        document.querySelector('.Admin_Product').style.display = 'block';
        document.querySelector('.Admin_Cart').style.display = 'none';
        document.querySelector('.Admin_User').style.display = 'none';

    }

    const openAdminCart = () => {
        document.querySelector('.Admin_Product').style.display = 'none';
        document.querySelector('.Admin_Cart').style.display = 'block';
        document.querySelector('.Admin_User').style.display = 'none';
    }

    const openAdminUser = () => {
        document.querySelector('.Admin_Product').style.display = 'none';
        document.querySelector('.Admin_Cart').style.display = 'none';
        document.querySelector('.Admin_User').style.display = 'block';
    }

    return (
        <>
            {token ? ((decoded.obj.role == 'admin') ? (

                <div>
                    <CheckLogin />
                    <ul className='Menu_Admin'>
                        <li onClick={openAdminProduct}>PRODUCT</li>
                        <li onClick={openAdminUser}>USERS </li>
                        <li onClick={openAdminCart}>CART</li>
                    </ul>
                    <div className='Thong_Ke'>
                        <p>- Product: <strong>{product.length}</strong></p>
                        <p>- User: <strong>{user.length}</strong></p>
                        <p>- Order: <strong>{cart.length}</strong></p>
                    </div>
                    <div className='Admin_Product'><Product /></div>
                    <div className='Admin_Cart'><Cart /></div>
                    <div className='Admin_User'><User /></div>
                    <Footer />
                </div>

            ) : (<h1>Bạn không đủ quyền truy cập</h1>)) : (<Login />)}


        </>
    )
}

export default Admin