import React, { useRef, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef();
    const passwordRef = useRef();
    const [user] = useAuthState(auth);

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();
    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then(data => {
                if (!data) {
                    setErrorMessage("Please check your email and password")

                } else {
                    setErrorMessage("")

                }
            })
    }
    return (
        <div className='container w-50 mx-auto border rounded p-5 mt-5'>
            <h1 className='text-center text-primary '>Please login</h1>
            {errorMessage && <strong className='text-danger'>Please check your email and password</strong>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter email" />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" required placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <p>New user? <small><Link to='/register'>Please Register</Link></small></p>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;