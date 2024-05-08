import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
export const LoginComponent = () => {
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	return (
		<div>
			<div className='inputContainer'>
				<p className='email'>Email</p>
				<input
					required
					value={email}
					placeholder='Enter your email...'
					onChange={(ev) => setEmail(ev.target.value)}
					className={'inputBox'}
				/>
				<label className='errorLabel'>{emailError}</label>
			</div>
			<br />
			<div className='inputContainer'>
				<p className='password'>Password</p>
				<input
					required
					value={password}
					placeholder='Enter your password...'
					onChange={(ev) => setPassword(ev.target.value)}
					className={'inputBox'}
				/>
				<label className='errorLabel'>{passwordError}</label>
			</div>
		</div>
	);
}
