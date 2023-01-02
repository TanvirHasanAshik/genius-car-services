import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPassRef = useRef();

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/home')
    }
    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPassRef.current.value;
        if (password !== confirmPassword) {
            setErrorMessage("Your password does't match");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='container w-50 mx-auto border rounded p-5 mt-5'>
            <h1 className='text-center text-primary '>Please Registration</h1>
            <strong className='text-danger text-center'>{errorMessage}</strong>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter email" />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" required placeholder="Password" />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input ref={confirmPassRef} type="password" className="form-control" id="exampleInputPassword1" required placeholder="Confirm Password" />
                </div>
                <div className="form-group form-check">
                    <p>Already user? <small><Link to='/login'>Please Login</Link></small></p>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;