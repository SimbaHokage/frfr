import { useState } from 'react';
import '../style/Login.css';
import myImage from '../img/login1PNG.png';
import { useMultipleForm } from './MultipleForm';
import { RegisterComponent } from '../components/RegisterComponent';
import { AddressComponent } from '../components/AddressComponent';
import { NameComponent } from '../components/NameComponent';

const INITIAL_DATA = {
	firstName: '',
	lastName: '',
	city: '',
	zipCode: '',
	email: '',
	password: '',
	confirmPassword: '',
};

export const Register = (props) => {
	

	const [data, setData] = useState(INITIAL_DATA);
	function updateFields(fields) {
		setData(prev => {
			return {...prev, ...fields}
		})
	}
	const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
		useMultipleForm([
			<NameComponent {...data}  updateFields={updateFields}/>,
			<AddressComponent {...data} updateFields={updateFields}/>,
			<RegisterComponent {...data} updateFields={updateFields}/>,
		]);

	function onSubmit(e) {
		e.preventDefault();
		next();
	}

	return (
		<div className='mainContainer'>
			<form onSubmit={onSubmit}>
				<div className='formContainer'>
					<div className='titleContainer'>
						<div className='welcomeDiv'>welcome</div>
						<p className='welcomeP'>
							<p className='pageCounter'>
								{currentStepIndex + 1} / {steps.length}
							</p>
						</p>
					</div>
					<br />
					{step}
					<br />
					<div className='moveButtonsDiv'>
						{!isFirstStep && (
							<button className='moveButton' type='button' onClick={back}>
								Back
							</button>
						)}
						<button className='moveButton' type='submit'>
							{isLastStep ? 'Finish' : 'Next'}
						</button>
					</div>
					<p className='dontHaveAccountP'>
						If you have an account click here{' '}
						<a href='#login' className='registerLink'>
							login
						</a>
					</p>
				</div>
			</form>
			<img src={myImage} alt='fci ale czemu nie działa ?' />
		</div>
	);
};
