import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isLoggedIn, onSignIn, ...props }) => {
	useEffect(() => {
		if(!isLoggedIn) {
			onSignIn();
		}
	}, [isLoggedIn, onSignIn])
	
	return (
		<Route>
			{() =>
				isLoggedIn ? <Component {...props} /> : <Redirect to="/"/>
			}
		</Route>
	);
};
export default ProtectedRoute;
