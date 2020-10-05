import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { loginInfo } from '../../App';

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
            sessionStorage.setItem('userInfo', JSON.stringify(newUser));
            history.replace(from);
          }).catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="login-with-google">
                <h2>Login with</h2>
                <div className="login-button">
                    <button onClick={handleLogin}>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;