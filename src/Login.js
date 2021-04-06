import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
	const dispatch = useDispatch();
	const signIn = () => {
		auth.signInWithPopup(provider)
			.then(({ user }) => {
				dispatch(
					login({
						displayName: user.displayName,
						email: user.email,
						photoUrl: user.photoURL,
					})
				);
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<div className="login__container">
				<img
					src="https://www.theindianwire.com/wp-content/uploads/2020/12/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
					alt=""
				/>
				<Button variant="contained" color="primary" onClick={signIn}>
					Login
				</Button>
			</div>
		</div>
	);
}

export default Login;
