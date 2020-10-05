import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { loginInfo } from '../../App';

const PrivateRoute2 = ({ children, ...rest }) => {
    const { info } = useContext(loginInfo);
    const { login, } = info;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                login.email ? (
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

export default PrivateRoute2;