import React , { useState } from 'react';
import { Redirect } from 'react-router-dom';
import instance from '../../../instance';
const { LogoutWrapper } = require("./styles")

const Logout = () => {
    const [redirect, setRedirect] = useState(false);

    return (
        redirect ? <Redirect to='/login' /> :
        <LogoutWrapper 
        onClick={() => {
            instance.post('auth/logout')
            setRedirect(true)
        }}
        >
            Logout
        </LogoutWrapper>
    )
}

export default Logout