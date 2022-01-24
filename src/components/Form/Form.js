import React, { useState } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';

import './Form.css';

function Form(props) {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
    const [errorObject, setErrorObject] = useState({
        isError: false,
        message: ''
    });

    const nameHandler = (event)=> {
        setName(event.target.value);
    }
    const ageHandler = (event)=> {
        setAge(event.target.value);
    }

    const submitHandler = (event)=> {
        event.preventDefault();
        const formData = {name, age};
        const errObj = {
            isError: false,
            message: ''
        };
        if(formData.name.trim().length === 0 && !formData.age) {
            setErrorObject({message: 'Please enter a valid name and age (non-empty values)', isError: true});
        }
        else if(formData.name.trim().length === 0) {
            setErrorObject({message: 'Please enter a valid name (non-empty values)', isError: true});
        }
        else if(!formData.age) {
            setErrorObject({message: 'Please enter a valid age (non-empty values)', isError: true});
        }
        else if (formData.age <= 0) {
            setErrorObject({message: 'Please enter a valid age(>0)', isError: true});
        }
        // If valid 
        if(!errorObject.isError) {
            props.onSave(formData);
            setName('');
            setAge('');
        } else {
            props.onError(errObj);
        }
    }
    const closeModal = ()=> {
        setErrorObject({isError: false, message: ''});
    }
	return (
       <Card className="form-controls">
		<form onSubmit={submitHandler}>
			<div className='form-control'>
				<label>Use Name</label>
				<input type="text" value={name} onChange={nameHandler}/>
			</div>
			<div  className='form-control'>
				<label>Age (Years)</label>
				<input type="number" value={age}  onChange={ageHandler}/>
			</div>
			<div  className='form-control'>
				<button type='submit'> Add User</button>
			</div>
		</form>
        { errorObject.isError && <Modal message={errorObject.message} title='Invalid input'onClose={closeModal}/>}
        </Card>
	);
}

export default Form;
