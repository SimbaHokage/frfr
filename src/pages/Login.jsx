import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
import  myImage from '../img/login1PNG.png';

export const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const navigate = useNavigate();

	const onButtonClick = () => {};

	return (
		<div className='mainContainer'>
			<div className='formContainer'>
				<div className='titleContainer'>
					<div className='welcomeDiv'>welcome back</div>
					<p className='welcomeP'>please enter your email and password!</p>
				</div>
				<br />
				<div className='inputContainer'>
					<p className='email'>Email</p>
					<input
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
						value={password}
						placeholder='Enter your password...'
						onChange={(ev) => setPassword(ev.target.value)}
						className={'inputBox'}
					/>
					<label className='errorLabel'>{passwordError}</label>
				</div>
				<br />
				<div className='inputContainer'>
					<input
						className={'inputButton'}
						type='button'
						onClick={onButtonClick}
						value={'Log in'}
					/>
				</div>
                <p className='dontHaveAccountP'>Don't have an account? <a href="#register" className='registerLink'>Sign up for free!</a></p>
			</div>
            <img src={myImage} alt="fci ale czemu nie działa ?" />
		</div>
	);
};
