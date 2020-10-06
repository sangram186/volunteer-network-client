import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { loginInfo } from '../../App';
import googleIcon from '../../logos/google-icon.png'
import { Button } from 'react-bootstrap';
import './Login.css';

firebase.initializeApp(firebaseConfig);
const Login = () => {
    const {info} = useContext(loginInfo);
    const {login, setLogin}  = info;
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };
    const handleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(data => {
            const {email, displayName} = data.user;
            const newUser = {...login};
            newUser.email = email;
            newUser.name = displayName;
            setLogin(newUser);
            sessionStorage.setItem('userData', JSON.stringify(newUser));
            history.replace(from);
          }).catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div className="container m-auto text-center" style={{ width: '30%'}}>
            <div className="register-logo">
                <img src={logo} alt=""/>
            </div>
            <div className="login-with-google register-form">
                <h2>Login with</h2>
                <div className="login-button">
                    <Button variant="outline-dark" onClick={handleLogin}>
                        <img style={{width: '30px'}} src={googleIcon} alt=""/>
                        Continue with google
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;