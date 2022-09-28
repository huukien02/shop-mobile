import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom'

function Menu() {
    return (
        <div>
            <ul className='App-list-link'>
                <li> <Link to='/'>SẢN PHẨM</Link> </li>
                <li> <Link to='/km'>KHUYẾN MÃI</Link> </li>
                <li> <Link to='/tt'>TIN TỨC</Link> </li>
                <li> <Link to='/ht'>HỖ TRỢ</Link> </li>
                <li> <Link to='/lh'>LIÊN HỆ</Link> </li>
            </ul>
        </div>
    )
}

export default Menu