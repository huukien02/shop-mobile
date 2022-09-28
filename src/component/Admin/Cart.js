import './Cart.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Cart() {
    const [data, setData] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await axios.get(process.env.REACT_APP_API_CART);
            return res;
        }
        getData().then((res) => setData(res.data))
    }, [])


    const handleCheckOrder = (id) => {
        alert(id)
    }

    const handleDetailOrder = (item) => {
        var detailOrder = JSON.parse(item)

        if (window.confirm("Bạn muốn xem chi tiết đơn hàng này không ?")) {

            document.querySelector('.list-detail').style.display = 'block'
            var content = `<tr>
                <th>ID</th>
                <th>NAME</th>
                <th>IMAGE</th>
                <th>PRICE</th>
            </tr>`

            for (let i = 0; i < detailOrder.length; i++) {
                content += `<tr>
                <td>${i + 1}</td>
                <td>${detailOrder[i].name}</td>
                <td><img src=${detailOrder[i].img}></td>
                <td>${detailOrder[i].price}</td>
            </tr>`

            }
            document.getElementById('listOrder').innerHTML = content;
        }
    }

    const closeList = () => {
        document.querySelector('.list-detail').style.display = 'none'
    }


    return (
        <div>
            <table className='TABLE_CART_ADMIN'>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                    <th>PHONE</th>
                    <th>TOTAL</th>
                    <th>NOTE</th>
                    <th>OTHER</th>
                </tr>
                {data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>${item.total}</td>
                            <td>{item.note}</td>
                            <td>
                                <i onClick={() => handleCheckOrder(item._id)} className="fa-solid fa-circle-check"></i>
                                <i onClick={() => handleDetailOrder(item.listOrder)} className="fa-solid fa-pen-to-square"></i>
                            </td>
                        </tr>
                    )
                })}
            </table> <br />
            <div className='list-detail'>
                <h2><i onClick={closeList} style={{ marginLeft: 1000 }} className="fa-solid fa-square-xmark"></i></h2>
                <table id='listOrder'></table>
            </div>
        </div>
    )
}

export default Cart