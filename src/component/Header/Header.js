import './Header.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React from 'react'


function Header(props) {

    var soluong = props.dataRedux.length
    const handleSearch = () => {


        var list = document.querySelectorAll('.HOME_SHOP_LISTPRODUCT_ITEM')
        var arr = []
        var input = document.getElementById('HEADER_TABLE_SEARCH').value;

        for (let i = 0; i < list.length; i++) {

            if (list[i].childNodes[0].innerText.toUpperCase().includes(input.toUpperCase()) == true) {
                arr.push(list[i]);
            }
        }
        console.log(arr[0].childNodes[2].childNodes[0].src);

        if (arr.length == list.length || arr.length == 0) {
            document.getElementById("HEADER_TABLE").style.display = "none";
        }


        else if (arr.length > 0) {
            document.getElementById("HEADER_TABLE").style.display = "block";
            var content = ''
            for (let i = 0; i < arr.length; i++) {
                content +=
                    `
                        <a href="${arr[i].childNodes[2]}">
                            <img src=${arr[i].childNodes[2].childNodes[0].src} width="60" height="60" />
                        </a>
                        <span>${arr[i].childNodes[0].innerText}</span> <br></br>

                    `
            }

            document.getElementById('HEADER_TABLE').innerHTML = content
        }


    }
    return (
        <div className='HEADER'>

            <div id='HEADER_TABLE'>
                <a href="#">
                    <img src='https://matpetfamily.com/wp-content/uploads/2021/08/41B229EC-90FF-40E2-9C2A-DDA7B3060CA5-270x270.jpeg' width="70" height="70" />
                </a>
                <span>Pug</span><br></br>
            </div>


            <div className='HEADER_TABLE_CONTACT'>
                <i className="fa-solid fa-bell"></i>
                <span> Hotline: (028)7304 0479 hoặc 034 456 6869</span>
            </div>

            <div className='HEADER_TABLE_LOGO'>
                <img
                    src='https://petxinh.cdn.vccloud.vn/wp-content/uploads/2018/09/logo350x120.png'
                />
                <div className='HEADER_TABLE_SEARCH'>
                    <input id='HEADER_TABLE_SEARCH' onInput={() => handleSearch()} placeholder='Nhập sản phẩm cần tìm ...' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <Link to={'/mycart'}>
                    <i className="fa-solid fa-cart-shopping fa-2x"></i>
                </Link>
                <span className='demCart'>{soluong}</span>

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.cart
    }
}


export default connect(mapStateToProps)(Header)

// export default Header