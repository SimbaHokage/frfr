import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';



export const RegisterComponent = ({
	email,
	password,
	confirmPassword,
	updateFields
}) => {
	return (
		<div>
			<div className='inputContainer'>
				<p className='email'>Email</p>
				<input
					required
					type='email'
					value={email}
					placeholder='Enter your email...'
					onChange={(e) => updateFields({ email: e.target.value })}
					className={'inputBox'}
				/>
			</div>
			<br />
			<div className='inputContainer'>
				<p className='email'>Password</p>
				<input
					required
					type='password'
					minLength={6}
					value={password}
					placeholder='Enter your password...'
					onChange={(e) => updateFields({ password: e.target.value })}
					className={'inputBox'}
				/>
			</div>
			<br />
			<div className='inputContainer'>
				<p className='email'>Confirm password</p>
				<input
					required
					type='password'
					value={confirmPassword}
					placeholder='Confirm password...'
					onChange={(e) => updateFields({ confirmPassword: e.target.value })}
					className={'inputBox'}
				/>
			</div>
		</div>
	);
};
