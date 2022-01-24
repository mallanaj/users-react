import React from 'react';
import Card from '../Card/Card';
import './Modal.css';

function Modal(props) {
	return (
		<div>
			<div className="modal" onClick={props.onClose}/>
			<Card className="modal-content" key="modalError">
				<header className="header">
					<h2>{props.title}</h2>
				</header>
				<div className="content">
					<p>{props.message}</p>
				</div>
				<footer className="actions">
					<button onClick={props.onClose}>Ok</button>
				</footer>
			</Card>
		</div>
	);
}

export default Modal;
