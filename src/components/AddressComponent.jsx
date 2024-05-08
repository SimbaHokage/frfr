import { useState } from 'react';
import '../style/Login.css';
export const AddressComponent = ({city, zipCode, updateFields}) => {
	return (
		<div>
			<div className='inputContainer'>
				<p className='email'>City</p>
				<input
					required
					value={city}
					placeholder='Enter your city...'
					onChange={e => updateFields({city : e.target.value})}
					className={'inputBox'}
				/>
			</div>
			<br />
			<div className='inputContainer'>
				<p className='email'>Zip-code</p>
				<input
					required
					value={zipCode}
					placeholder='Enter your zip-code...'
					onChange={e => updateFields({zipCode : e.target.value})}
					className={'inputBox'}
				/>
			</div>
		</div>
	);
};
