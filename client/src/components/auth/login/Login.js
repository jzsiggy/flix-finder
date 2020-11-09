import instance from '../../../instance';
import React , { useState, useEffect } from 'react';
import {
    FormWrapper,
    FormInput,
    FormInputGroup,
    FormLabel,
    Submit
} from '../styles';
import { Link, Redirect } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState('busy')

    useEffect(() => {
        instance.get('/auth/current-user')
        .then(response => setAuth(true))
        .catch(err => setAuth(false))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
    const handleSubmit = () => {
        instance.post('/auth/login/', {
            username,
            password,
        })
        .then(response => setAuth(true))
        .catch(err => setAuth(false))
    }
    
    return(
        auth == 'busy' ? <></> :
        auth ? <Redirect to='/' /> :
        <FormWrapper>
            <h2>Login</h2>
            <FormInputGroup>
                <FormLabel>Username:</FormLabel>
                <FormInput 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </FormInputGroup>

            <FormInputGroup>
                <FormLabel>Password:</FormLabel>
                <FormInput 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </FormInputGroup>

            <Submit onClick={() => handleSubmit()}>Submit</Submit>
            <Link to='/signup' style={{'color': 'white'}}>Signup</Link>
        </FormWrapper>
    )
}

export default Login