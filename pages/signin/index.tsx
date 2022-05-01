import { signIn } from 'next-auth/react';
import React, { useState } from 'react'

type Props = {}

const Auth = (props: Props) => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setCredentials({ ...credentials, [name]: value });
	}


	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		console.log('submitting');
		const res = await signIn('credentials', {
			redirect: false,
			email: credentials.email,
			password: credentials.password,
			callbackUrl: '/'
		});
		console.log(res)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChanges}
					type="text"
					name="email"
					value={credentials.email}
					placeholder="Email" />
				<input
					onChange={handleChanges}
					type="password"
					name="password"
					value={credentials.password}
					placeholder="Password" />
				<button type="submit">Sign In</button>
			</form>
		</div>
	);
}

export default Auth;
