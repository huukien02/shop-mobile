import './Product.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Product() {
    const [data, setData] = useState([])

    const [btn, setBtn] = useState(true)

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [detail, setDetail] = useState('')
    const [id, setId] = useState('')
    useEffect(() => {
        async function getData() {
            const res = await axios.get(process.env.REACT_APP_API_PRODUCT);
            return res;
        }
        getData().then((res) => setData(res.data))
    }, [])


    /* ADD_Product */
    const handleAddProduct = () => {
        if (name == '' && price == '' && image == '' && detail == '') {
            alert("Vui lòng nhập thông tin sản phẩm")
        }
        else {
            axios.post(process.env.REACT_APP_ADD_PRODUCT, {
                name: name,
                price: price,
                image: image,
                detail: detail

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


    }

    const EDIT = (id, name, price, image, detail) => {
        setId(id)
        setName(name)
        setPrice(price)
        setImage(image)
        setDetail(detail)

        setBtn(prev => !prev)

        var form = document.querySelector('.Form');
        form.style.display = 'block'
    }

    const handleAddEdit = () => {
        axios.post(process.env.REACT_APP_EDIT_PRODUCT, { name, price, image, detail, id })
            .then(function (response) {
                console.log(response);
                alert(response.data)
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const closeForm = () => {
        var form = document.querySelector('.Form');
        form.style.display = 'none'
    }

    const openForm = () => {
        var form = document.querySelector('.Form');
        form.style.display = 'block'

        setName('')
        setPrice('')
        setImage('')
        setDetail('')
    }

    const handleDelete = (id) => {
        axios.post(process.env.REACT_APP_DELETE_PRODUCT, { id })
            .then(function (response) {
                console.log(response);
                alert(response.data)
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className='Form'>
                <div className='Add-Form'>
                    <i onClick={closeForm} class="fa-solid fa-square-xmark fa-2x"></i> <br></br><br></br>
                    <input
                        placeholder='Enter name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />  <br></br>
                    <input
                        placeholder='Enter price'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />  <br></br>
                    <input
                        placeholder='Enter Link image'
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />  <br></br>
                    <input
                        placeholder='Enter detail'
                        value={detail}
                        onChange={e => setDetail(e.target.value)}
                    />  <br></br>
                    {btn ? (<button onClick={handleAddProduct}>ADD</button>) : (<button onClick={handleAddEdit}>EDIT</button>)}
                </div>
            </div>

            <br /><i onClick={openForm} class="fa-solid fa-square-plus fa-2x"></i>
            <table className='TABLE_PRODUCT_ADMIN'>
                <tr>
                    <th>ID</th>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>OTHER</th>
                </tr>
                {data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><img src={item.image} /></td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <i onClick={() => handleDelete(item._id)} className="fa-solid fa-trash-can"></i>
                                <i onClick={() => EDIT(item._id, item.name, item.price, item.image, item.detail)} className="fa-solid fa-pen-to-square"></i>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default Product