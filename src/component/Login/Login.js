import './Login.css'
import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom'

import React, { useState } from 'react'
import axios from 'axios'
import Footer from '../Footer/Footer'


var token = document.cookie;

function Login() {

    const [acc, setAcc] = useState('')
    const [pass, setPass] = useState('')

    const handleLogin = () => {

        axios.post(process.env.REACT_APP_LOGIN, { acc, pass })
            .then(function (response) {
                console.log(response.data);

                var token = response.data
                // document.cookie = `${token}`;
                document.cookie = `token=${token}`;
                window.location = '/'

            })
            .catch(function (error) {
                alert(error.response.data)
            });

        setAcc('')
        setPass('')
    }

    return (
        <div>
            <h1 className='TITLE_LOGIN'> WELCOME TO MOBILE SHOP </h1 >
            <div className='FORM_LOGIN'>
                <h1>LOGIN</h1>
                <label for=""><i className="fa-solid fa-user"></i></label>
                <input
                    placeholder='Enter Username'
                    id='tk'
                    onChange={e => setAcc(e.target.value)}
                    value={acc}
                /><br></br>  {acc == '' ? (<small className='acc-err'> Please Enter Username</small>) : ('')} <br></br>
                <label for=""><i className="fa-solid fa-lock"></i></label>
                <input
                    type={'password'}
                    placeholder='Enter Password'
                    id='mk'
                    onChange={e => setPass(e.target.value)}
                    value={pass}
                /> <br></br>{pass == '' ? (<small className='pass-err'> Please Enter Password</small>) : ('')} <br></br>

                {(acc == '' || pass == '') ?
                    (<input className='submit-err' type="submit" value="LOGIN" />) :

                    (<input className='submit' onClick={handleLogin} type="submit" value="LOGIN" />)} <br /><br /> <br />
                <small style={{ marginLeft: 160 }}>Bạn chưa có tài khoản ?</small>
                <Link id='toSignUp' to={'/signup'}>
                    SignUp
                </Link>
            </div>
            <Footer />


        </div >
    )
}

export default Login