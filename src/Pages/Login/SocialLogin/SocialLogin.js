import React, { useEffect, useState } from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = ({ from }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, gitHubLoading, gitHubError] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    useEffect(() => {
        if (googleError || gitHubError) {
            setErrorMessage(gitHubError?.message || googleError.message);
        }
    }, [googleError, gitHubError]);

    if (googleUser || googleUser) {
        if (from) {
            navigate(from, { replace: true });
        } else {
            navigate('/')
        }
    }
    return (
        <div>
            <div className='d-flex align-items-center mt-2'>
                <div className='bg-primary w-50 border'></div>
                <p className="mt-2 px-2 text-muted">or</p>
                <div className='bg-primary w-50 border'></div>
            </div>
            {errorMessage && errorMessage}
            <div className='mt-3 mb-3 text-center'>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-primary m-2">
                    <img src={google} alt="" /> Google Sign in</button>
                <button className="btn btn-white border-secondary rounded m-2">
                    <img src={facebook} alt="" /> Facebook Login</button>
                <button
                    onClick={() => signInWithGithub()}
                    className="btn btn-secondary m-2">
                    <img src={github} alt="" /> Github Login</button>
            </div>
        </div>
    );
};

export default SocialLogin;