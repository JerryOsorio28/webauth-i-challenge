import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { axiosWithAuth } from './axiosWithAuth';
import { Link } from 'react-router-dom';



const LoginForm = (props) => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const changeHandler = e => {
        //sets input value to state
        const inputData = {...credentials, [e.target.name]: e.target.value}
        console.log(inputData)
        setCredentials(inputData)
    }

    const submitHandler = e => {

        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:8000/api/login', credentials)
            .then(res => {
                // console.log(res)
                localStorage.setItem('token', res.data.token)
                props.history.push('/users')

            })
            .catch(err => console.log(err.response))
    }
    return (
        <>
            <h1>Login</h1>
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
                <p>Don't have an account? <Link to='/register'>Sign up here!</Link></p>
            </Form>
        </>
    )
};

export default LoginForm;