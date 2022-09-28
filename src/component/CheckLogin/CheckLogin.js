import './CheckLogin.css'
import React from 'react'
import jwt_decode from "jwt-decode";

var token = document.cookie;
if (token) {
    var decoded = jwt_decode(token);
}


function CheckLogin() {

    const logout = () => {
        if (window.confirm('Bạn muốn đăng xuất không ? ')) {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            window.location.reload();
        }
    }
    return (
        <div className='Check_Login'>
            <h3>
                Hello,{decoded.obj.username}
                <span onClick={logout}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                </span>
            </h3>
        </div>
    )
}

export default CheckLogin