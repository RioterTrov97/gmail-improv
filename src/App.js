import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SendMail from './SendMail';
import { selectSendMessageOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
	const sendMessageOpen = useSelector(selectSendMessageOpen);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				dispatch(
					login({
						displayName: user.displayName,
						email: user.email,
						photoUrl: user.photoURL,
					})
				);
			}
		});
	}, [dispatch]);
	return (
		<Router>
			{!user ? (
				<Login />
			) : (
				<div className="app">
					<Header />

					<div className="app__body">
						<Sidebar />
						<Switch>
							<Route path="/mail" component={Mail} />
							<Route path="/" component={EmailList} />
						</Switch>
					</div>
					{sendMessageOpen && <SendMail />}
				</div>
			)}
		</Router>
	);
}

export default App;
