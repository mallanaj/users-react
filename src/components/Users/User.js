import React from 'react';
import './User.css';

function User(props) {
	const userData = `${props.name} (${props.age} years old)`;
	return <div className="user">{userData}</div>;
}

export default User;
