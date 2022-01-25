import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './LoginForm.css';

const LoginForm = () => {
	const initialFormDate = {
		userName: '',
		email: '',
		password: '',
	};
	const [formData, setFormDate] = useState(initialFormDate);
	const [formErrors, setFormErrors] = useState({});
	const [isSave, setIsSave] = useState(false);

	useEffect(() => {
		console.log('This is run when component is mounted/re-rendered ');
		if (Object.keys(formErrors).length === 0 && isSave) {
			console.log('Log in successful ');
			setFormDate(initialFormDate);
		}
		/**
		 * cleanup funtcion: Doesn't run first time,
		 * from2nd time it runs
		 * before other functions in useEffect
		 */
		return () => {
			console.log('this is CLEANUP function');
		};
	}, [formErrors]);

	const handleInput = (event) => {
		const { name, value } = event.target;
		setFormDate((prev) => {
			return { ...prev, [name]: value };
		});
	};
	const validate = (data) => {
		let errors = {};
		if (!data.userName) {
			errors['userName'] = 'Name is required';
		}
		if (!data.email) {
			errors['email'] = 'Email is required';
		}
		if (!data.password) {
			errors['password'] = 'password is required';
		}
		if (data.password && data.password.length <= 6) {
			errors['password'] = 'password must be 6 chars long';
		}
		const regex = /^[^s@]+@[^s@]+.[^s@]+$/;
		if (data.email && !regex.test(data.email)) {
			errors['email'] = 'Please enter a valid mail';
		}
		return errors;
	};
	const handleSave = (event) => {
		event.preventDefault();
		setIsSave(true);
		setFormErrors(validate(formData));
	};
	return (
		// Adding Dynamic classes
		<Card
			className={`form-controls ${
				Object.keys(formErrors).length !== 0 ? 'invalid' : ''
			}`}
		>
			<form onSubmit={handleSave}>
				userName: {JSON.stringify(formData.userName)}
				email: {JSON.stringify(formData.email)}
				password: {JSON.stringify(formData.password)}
				<div className="form-control">
					<label> User Name</label>

					<input
						type="text"
						name="userName"
						value={formData.userName}
						onChange={handleInput}
					/>
					<p>{formErrors.userName}</p>
				</div>
				<div className="form-control">
					<label> Email </label>
					<input
						type="text"
						name="email"
						value={formData.email}
						onChange={handleInput}
					/>
					<p>{formErrors.email}</p>
				</div>
				<div className="form-control">
					<label> Password </label>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleInput}
					/>
					<p>{formErrors.password}</p>
				</div>
				<div className="form-control">
					<button type="submit"> Log in </button>
				</div>
			</form>
		</Card>
	);
};

export default LoginForm;
