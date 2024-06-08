import React, { useState } from 'react';
import { auth } from '../firebase-config.js';
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import '../assets/styles/TankTalkerAIPage.css';
import '../assets/styles/LoginPage.css';
import Header from "./shared/Header.js";
import googleLogo from '../assets/images/google-logo.png'
import facebookLogo from '../assets/images/facebook-logo.png'

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
        <div className="home">
            < Header/>
            <div className="login-page">
                <div className="auth-container">
                         <div className="login-heading">
                             <p>Sign up or Log in</p>
                         </div>
                    <div className="alternate-login">
                         <button onClick={signInWithGoogle} className="google-btn">
                             <div className="google-logo-container">
                                <img src={googleLogo} alt="Google Logo" className="google-logo" />
                             </div>
                             Continue with Google
                         </button>
                        <button onClick={signInWithGoogle} className="google-btn">
                            <div className="google-logo-container">
                                <img src={facebookLogo} alt="Google Logo" className="google-logo" />
                            </div>
                            Continue with Facebook
                        </button>
                    </div>
                     <div className="separator">
                         <span className="separator-text">or</span>
                     </div>
                     <div className="email-auth">
                        <p className="signInEmailText">Email</p>
                         <form onSubmit={handleEmailAuth} className="auth-form">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                required
                            />
                            <button type="submit">Continue</button>
                        </form>
                         <div className="cant-login">
                             <p>
                                 <a href="#">Forgot your password?</a>
                             </p>
                         </div>
                         <div className="google-recaptcha">
                             <p>
                                 Secure login with reCAPTCHA<br/> subject to Google <a href="https://policies.google.com/terms?hl=en">Terms</a> & <a href="https://policies.google.com/privacy?hl=en">Privacy</a>
                             </p>
                         </div>
                     </div>
                 </div>
            </div>
        </div>

    );
};

    /*<p>
                    {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? ' Sign Up' : ' Log In'}
                    </span>
                </p>*/

export default LoginPage;