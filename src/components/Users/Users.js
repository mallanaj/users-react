import React from 'react';
import User from './User';
import Card from '../Card/Card';
import './Users.css'

function Users(props) {
	return (
		<Card className='users'>
			{props.allUsers.map((user) => (
				<User key={user.id} name={user.name} age={user.age} />
			))}
		</Card>
	);
}

export default Users;
