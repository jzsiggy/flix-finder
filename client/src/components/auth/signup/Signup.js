import instance from '../../../instance';
import React , { useState } from 'react';
import {
    FormWrapper,
    FormInput,
    FormInputGroup,
    FormLabel,
    Submit
} from '../styles';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = () => {
        instance.post('/auth/signup/', {
            username,
            password,
            email: 'email'
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
    
    return(
        <FormWrapper>
            <h2>Signup</h2>
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
            <Link to='/login' style={{'color': 'white'}}>Login</Link>
        </FormWrapper>
    )
}

export default Signup