import './SignUp.css'
import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom'

import axios from 'axios'
import React, { useState } from 'react'
import Footer from '../Footer/Footer'

function SignUp() {

    console.log(process.env.REACT_APP_SIGNUP);

    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('')
    const [rePass, setRePass] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('user')

    const handleSignUp = () => {
        axios.post(process.env.REACT_APP_SIGNUP, {
            name: name,
            username: userName,
            password: pass,
            phone: phone,
            role: role
        })
            .then(function (response) {
                console.log(response);

                alert(response.data)

                setName('')
                setUserName('')
                setPass('')
                setRePass('')
                setPhone('')

            })
            .catch(function (error) {
                console.log(error);

                alert(error.response.data)

                setName('')
                setUserName('')
                setPass('')
                setRePass('')
                setPhone('')
            });

    }

    return (
        <div>
            <div>
                <h1 className='TITLE_LOGIN'> WELCOME TO MOBILE SHOP </h1>


                <div className='form-sign'>
                    <h1>SIGN UP</h1>

                    <input
                        placeholder='Enter Name'
                        id='name'
                        onChange={e => setName(e.target.value)}
                        value={name}

                    /> <br></br> {name == '' || name.length < 6 ? (<small className='err-input'> Please Enter Name</small>) : (<i style={{ marginLeft: 440 }} class="fa-solid fa-circle-check"></i>)} <br></br>

                    <input
                        placeholder='Enter Username'
                        id='username'
                        onChange={e => setUserName(e.target.value)}
                        value={userName}

                    /><br></br> {userName == '' || userName.length < 6 ? (<small className='err-input'> Please Enter Username</small>) : (<i style={{ marginLeft: 440 }} class="fa-solid fa-circle-check"></i>)} <br></br>

                    <input
                        type={'password'}
                        placeholder='Enter Password'
                        id='password'
                        onChange={e => setPass(e.target.value)}
                        value={pass}
                    /><br></br> {pass == '' || pass.length < 6 ? (<small className='err-input'> Please Enter Password</small>) : (<i style={{ marginLeft: 440 }} class="fa-solid fa-circle-check"></i>)}<br></br>

                    <input
                        type={'password'}
                        placeholder='Comfirm Password'
                        id='repass'
                        onChange={e => setRePass(e.target.value)}
                        value={rePass}

                    /><br></br> {rePass !== pass || rePass == '' ? (<small className='err-input'> Please Confirm Password</small>) : (<i style={{ marginLeft: 440 }} class="fa-solid fa-circle-check"></i>)} <br></br>

                    <input
                        placeholder='Enter Phone'
                        id='phone'
                        onChange={e => setPhone(e.target.value)}
                        value={phone}

                    /><br></br>  {phone == '' ? (<small className='err-input'> Please Enter Username</small>) : (<i style={{ marginLeft: 440 }} class="fa-solid fa-circle-check"></i>)}<br></br>

                    {(name == '' || name.length < 6 || userName == '' || userName.length < 6 || pass == '' || pass.length < 6 || phone == '') ?
                        (<input className='signup-err' type="submit" value="SIGN UP" />) :

                        (<input onClick={() => handleSignUp()} className='signup' type="submit" value="SIGN UP" />)} <br /> <br />

                    <small style={{ marginLeft: 160 }}>Bạn đã có tài khoản ?</small>
                    <Link id='toSignUp' to={'/login'}>
                        Login
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp