import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children}) => {
    return (
        <>
            {isAuth ? children : <Navigate to="/signin" />}
        </>
    )
}

export default ProtectedRoute;