import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <>
            <h1>Welcome to our App!</h1>
            <Link to='/login' style={{textAlign: "center"}}><h3>Get started</h3></Link>
        </>
    )
};

export default Welcome;