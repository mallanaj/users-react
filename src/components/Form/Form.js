import React, { useState } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';

import './Form.css';

function Form(props) {
    let isError = false;
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [errMessage, setErrMessage] = useState(null);

	const nameHandler = (event) => {
		setName(event.target.value);
	};
	const ageHandler = (event) => {
		setAge(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const formData = { name, age };
		if (formData.name.trim().length === 0 && !formData.age) {
            isError = true;
			setErrMessage('Please enter a valid name and age (non-empty values)');
		} else if (formData.name.trim().length === 0) {
            isError = true;
			setErrMessage('Please enter a valid name (non-empty values)');
		} else if (!formData.age) {
            isError = true;
			setErrMessage('Please enter a validage (non-empty values)');
		} else if (formData.age <= 0) {
            isError = true;
			setErrMessage('Please enter a valid age(>0)');
		}
		// If valid
		if (!isError) {
			props.onSave({ data: formData, errMessage });
			setName('');
			setAge('');
		} else {
			console.log('in else error ', isError);
		}
	};
	const closeModal = () => {
		setErrMessage(null);
	};
	return (
		<Card className="form-controls">
			<form onSubmit={submitHandler}>
				<div className="form-control">
					<label>Use Name</label>
					<input type="text" value={name} onChange={nameHandler} />
				</div>
				<div className="form-control">
					<label>Age (Years)</label>
					<input type="number" value={age} onChange={ageHandler} />
				</div>
				<div className="form-control">
					<button type="submit"> Add User</button>
				</div>
			</form>
			{errMessage && (
				<Modal
					message={errMessage}
					title="Invalid input"
					onClose={closeModal}
				/>
			)}
		</Card>
	);
}

export default Form;
