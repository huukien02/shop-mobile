import './Home.css'
import { connect } from 'react-redux'

import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom'
import axios from 'axios';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Login from '../Login/Login';
import CheckLogin from '../CheckLogin/CheckLogin';

var token = document.cookie;



function Home(props) {

    var listCart = props.dataRedux;


    const [data, setData] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await axios.get(process.env.REACT_APP_API_PRODUCT);
            return res;
        }
        getData().then((res) => setData(res.data))
    }, [])

    const addToCart = (e, id, name, price, img, detail) => {
        const filter = listCart.filter((item) => {
            return item.id == id
        })

        if (filter.length == 0) {
            var obj = { id, name, price, img, detail }
            props.addToCartRedux(obj)
        }
        if (filter.length != 0) {
            alert("Sản phẩm đã có trong giỏ hàng")
        }

    }

    return (
        <>
            {token ? (<div>
                <div><CheckLogin /></div>
                <Header />
                <Menu />
                <div className='HOME_SHOP'>
                    <div className='HOME_SHOP_NAVBAR'>
                        <h3><i className="fa-solid fa-bars"></i> Danh Mục Sản Phẩm</h3>
                        <ul className='HOME_SHOP_NAVBAR_UL'>
                            <li>IPHONE</li>
                            <li>IPAD</li>
                            <li>SAMSUNG</li>
                            <li>OPPO</li>
                            <li>NOKIA</li>
                        </ul>
                    </div>
                    <div className='HOME_SHOP_LISTPRODUCT'>
                        {data.map((item, index) => {
                            return (
                                <div key={index} className='HOME_SHOP_LISTPRODUCT_ITEM'>
                                    <h4>{item.name}</h4>
                                    <p>Price: <span>$</span>{item.price}</p>
                                    <Link to={`/detail/product/${item._id}`}>
                                        <img src={item.image} />
                                    </Link>
                                    <button className='HOME_SHOP_LISTPRODUCT_BTN' onClick={(e) => addToCart(e, item._id, item.name, item.price, item.image, item.detail)} >ADD</button>

                                </div>
                            )
                        })}
                    </div>
                </div>
                <Footer /></div>) : (<Login />)}

        </>


    )
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCartRedux: (obj) => dispatch({ type: 'ADD_CART', payload: obj })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)