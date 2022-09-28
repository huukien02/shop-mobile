import React, { useEffect, useState } from 'react';
import axios from 'axios';

function User() {
    const [data, setData] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await axios.get(process.env.REACT_APP_API_USER);
            return res;
        }
        getData().then((res) => setData(res.data))
    }, [])

    const handleDeleteUser = (id) => {
        if (window.confirm("Bạn muốn xóa User này không ?")) {

            axios.post(process.env.REACT_APP_DELETE_USER, { id })
                .then(function (response) {
                    console.log(response);
                    alert(response.data)
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    return (
        <div>
            <table style={{ marginLeft: 300 }} className='TABLE_PRODUCT_ADMIN'>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                    <th>ROLE</th>
                    <th>ORTHER</th>
                </tr>
                {data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.phone}</td>
                            <td>
                                <i onClick={() => handleDeleteUser(item._id)} className="fa-solid fa-trash-can"></i>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default User