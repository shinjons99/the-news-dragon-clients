import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;


/**
 * ------------------
 * steps
 * 1. check user is logged in or not
 * 2. if user is logged in , then allow them to visit the route
 * 3. else redirect the user to the login page
 * 
 */