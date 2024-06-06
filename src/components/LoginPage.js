import React, { useState } from 'react';
import { auth } from '../firebase-config.js';
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import '../assets/styles/TankTalkerAIPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);  // Toggle between login and signup

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                navigate('/dashboard');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleEmailAuth = (e) => {
        e.preventDefault();
        if (isLogin) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential);
                    navigate('/dashboard');
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential);
                    navigate('/dashboard');
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <div className="login-page">
            <form onSubmit={handleEmailAuth} className="auth-form">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
            </form>
            <button onClick={signInWithGoogle} className="google-btn">Sign In with Google</button>
            <p>
                {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
                <span onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? ' Sign Up' : ' Log In'}
                </span>
            </p>
        </div>
    );
};

export default LoginPage;