import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios';


const LoginForm = () => {

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then(res => console.log(res))
            .catch(err => console.log(err.response))
    },[])

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const changeHandler = e => {

        // console.log(e.target.value)
        
        //sets input value to state
        const inputData = {...credentials, [e.target.name]: e.target.value}
        console.log(inputData)
        setCredentials(inputData)
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', credentials)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.response))
    }
    return (
        <>
            <Form onSubmit={submitHandler}>
                <Form.Field> 
                <label>Username</label>
                <input 
                    placeholder='Username' 
                    name='username'
                    value={credentials.username}
                    onChange={changeHandler}
                    />
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input 
                    placeholder='Password' 
                    name='password'
                    value={credentials.password}
                    onChange={changeHandler}
                />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </>
    )
};

export default LoginForm;