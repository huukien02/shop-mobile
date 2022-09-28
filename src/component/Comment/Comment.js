import './Comment.css'
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from 'react'
import axios from "axios";

var token = document.cookie;
if (token) {
    var decoded = jwt_decode(token);
    var username = decoded.obj.username
}


function Comment(props) {

    const [data, setData] = useState([])
    const [cmt, setCmt] = useState()
    var idProduct = props.idProduct


    useEffect(() => {
        async function getData() {
            const res = await axios.get(process.env.REACT_APP_API_CMT);
            return res;
        }
        getData().then((res) => setData(res.data))
    }, [])

    const listCMT = data.filter((item) => {
        return item.idProduct == idProduct;
    })

    console.log(listCMT);

    const handleCmt = () => {

        var d = new Date()
        var day = d.getDate()
        var month = (d.getMonth() + 1)
        var year = d.getFullYear()
        var hour = d.getHours()
        var minute = d.getMinutes()

        axios.post(process.env.REACT_APP_ADD_CMT, {
            idProduct,
            username,
            cmt,
            day,
            month,
            year,
            hour,
            minute
        })
            .then(function (response) {
                console.log(response);

                alert(response.data)
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);

                alert(error.response.data)
            });
    }

    const deleteCMT = (id, name) => {
        console.log(id);
        console.log(name);

        if (decoded.obj.username == 'admin') {
            axios.post(process.env.REACT_APP_DELETE_CMT, { id })
                .then(function (response) {
                    console.log(response);

                    alert(response.data)
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);

                    alert(error.response.data)
                });
        }
        else {
            if (decoded.obj.username == name) {
                axios.post(process.env.REACT_APP_DELETE_CMT, { id })
                    .then(function (response) {
                        console.log(response);

                        alert(response.data)
                        window.location.reload();
                    })
                    .catch(function (error) {
                        console.log(error);

                        alert(error.response.data)
                    });
            }
            else {
                alert('Không được xóa của người khác');
            }
        }
    }
    return (
        <>
            <div>
                <br /><br />
                <span style={{ paddingLeft: 50 }}>Nhận xét của bạn: </span>
                <input
                    id='input-cmt'
                    value={cmt}
                    placeholder='Enter comment'
                    onChange={e => setCmt(e.target.value)}
                /><i class="fa-solid fa-pen"></i>
                <button id='submit-cmt' onClick={handleCmt}>Send</button>
                <div>
                    {listCMT.map((item, index) => {
                        return (
                            <div key={index} className='detail-cmt'>
                                <p className='nameCMT'>{item.username} :</p>
                                <p className='CMT'>{item.cmt}</p>
                                <p className='dateCMT'>({item.day}/{item.month}/{item.year} - {item.hour}:{item.minute})</p>
                                <p className='del-cmt'><i onClick={() => deleteCMT(item._id, item.username)} class="fa-solid fa-trash-can"></i></p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Comment