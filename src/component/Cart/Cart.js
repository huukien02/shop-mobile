import './Cart.css'
import axios from 'axios';
import React, { useState } from 'react'
import { connect } from 'react-redux'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Login from '../Login/Login';
import CheckLogin from '../CheckLogin/CheckLogin';


var token = document.cookie;

function Cart(props) {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [note, setNote] = useState('')

    // console.log(props.dataRedux);
    var listProduct = props.dataRedux;

    var total = 0
    for (let i = 0; i < listProduct.length; i++) {
        total += Number(listProduct[i].price)

    }

    /* Delete Cart */
    const deleteProduct = (id) => {
        props.deleteCartRedux(id)
    }

    /* Order */
    const handleOrder = () => {
        if (name == '' && address == '' && phone == '' && note == '') {
            alert("Vui lòng nhập thông tin")
        }
        else {
            var listOrder = JSON.stringify(listProduct)

            axios.post(process.env.REACT_APP_ORDER, { listOrder, name, phone, address, note, total })
                .then(function (response) {
                    console.log(response.data);
                    alert(response.data)
                    window.location = '/'

                })
                .catch(function (error) {
                    alert(error.response.data)
                });

        }

    }

    const showForm = () => {
        var form = document.querySelector('.Parent_Order_Product');
        form.style.display = 'block'
    }

    const close_Form_Order = () => {
        var form = document.querySelector('.Parent_Order_Product');
        form.style.display = 'none'
    }

    return (
        <div>
            {token ? (<div>
                <CheckLogin />
                <Menu /> <br /><br />
                <table className='My_Cart'>
                    <tr>
                        <th>ID</th>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>OTHER</th>
                    </tr>
                    {listProduct.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td><img src={item.img} /></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <i onClick={() => deleteProduct(item.id)} className="fa-solid fa-trash-can"></i>
                                </td>
                            </tr>
                        )
                    })}
                </table>
                <h3 style={{ marginLeft: 750 }}>Total: ${total}</h3>
                <button className='showForm_Order' onClick={showForm}><span>Đặt Hàng</span></button>

                <div className='Parent_Order_Product'>
                    <div className='Order_Product'>
                        <i onClick={close_Form_Order} style={{ marginLeft: 520 }} className="fa-solid fa-square-xmark fa-2x"></i>
                        <input
                            placeholder='Enter Name '
                            onChange={e => setName(e.target.value)}
                            value={name}
                        /> <br />
                        <input
                            placeholder='Enter Address'
                            onChange={e => setAddress(e.target.value)}
                            value={address}
                        /> <br />
                        <input
                            placeholder='Enter Phone'
                            onChange={e => setPhone(e.target.value)}
                            value={phone}
                        /> <br />
                        <input
                            placeholder='Enter Note '
                            onChange={e => setNote(e.target.value)}
                            value={note}
                        /> <br />
                        <button className='OrderNow' onClick={handleOrder}>Order</button>
                    </div>

                </div>

                <Footer /></div>) : (<Login />)}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteCartRedux: (id) => dispatch({ type: 'DELETE_CART', payload: id })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)