import { useState } from 'react';
import Users from './components/Users/Users';
import Form from './components/Form/Form';

function App() {
	const initialUsesr = [
		{ id: 1, name: 'Mallana', age: 24 },
		{ id: 2, name: 'Rohit', age: 18 },
		{ id: 3, name: 'Yash', age: 21 },
	];
	const [allUsers, setAllUsers] = useState(initialUsesr);

	const addNewUser = (newUser) => {
		newUser = { ...newUser, id: Math.floor(Math.random() * 10 + 1) };
		setAllUsers((prevUsers) => [...prevUsers, newUser]);
	};

	return (
		<div className="App">
			<Form onSave={addNewUser} />
			<Users allUsers={allUsers} />
			
		</div>
	);
}

export default App;
