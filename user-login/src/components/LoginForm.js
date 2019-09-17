import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const LoginForm = () => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const submitHandler = () => {
        
    }
    const changeHandler = () => {

    }


    return (
        <>
            <Form>
                <Form.Field> 
                <label>Username</label>
                <input placeholder='Username' />
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </>
    )
};

export default LoginForm;