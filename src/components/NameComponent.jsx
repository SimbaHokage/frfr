import { useState } from 'react';
import '../style/Login.css';
export const NameComponent = ({firstName, lastName, updateFields}) => {
	return (
		<div>
			<div className='inputContainer'>
				<p className='email'>First name</p>
				<input
					required
					value={firstName}
					placeholder='Enter your first name...'
					onChange={e => updateFields({firstName : e.target.value})}
					className={'inputBox'}
				/>
			</div>
			<br />
			<div className='inputContainer'>
				<p className='password'>Last name</p>
				<input
					required
					value={lastName}
					placeholder='Enter your last name...'
					onChange={e => updateFields({lastName : e.target.value})}
					className={'inputBox'}
				/>
			</div>
		</div>
	);
}
