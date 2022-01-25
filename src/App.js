// for users flow comment LoginForm component
// for Login flow and useEffect comment users and form components

import { useState } from 'react';
import Users from './components/Users/Users';
import Form from './components/Form/Form';
// import LoginForm from './components/LoginForm/LoginForm';

function App() {
	const initialUsesr = [
		{ id: 1, name: 'Mallana', age: 24 },
		{ id: 2, name: 'Rohit', age: 18 },
		{ id: 3, name: 'Yash', age: 21 },
	];
	const [allUsers, setAllUsers] = useState(initialUsesr);

	const addNewUser = ({ data, errMessage }) => {
		if (!errMessage) {
			data = { ...data, id: Math.floor(Math.random() * 10 + 1) };
			setAllUsers((prevUsers) => [...prevUsers, data]);
		}
	};

	return (
		<div className="App">
			<Form onSave={addNewUser} />
			<Users allUsers={allUsers} />
			{/* <LoginForm /> */}
		</div>
	);
}

export default App;
