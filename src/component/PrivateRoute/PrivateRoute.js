import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { loginInfo } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const {info} = useContext(loginInfo);
    const {login, }  = info;

    const sessionData = sessionStorage.getItem('userInfo');
    const userData = JSON.parse(sessionData)

    const sessionData2 = sessionStorage.getItem('userData');
    const userData2 = JSON.parse(sessionData2);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                userData2.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;